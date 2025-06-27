const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://picsum.photos/seed/foo/400/300', folder: 'apps/foo/public', filename: 'random.jpg' },
  { url: 'https://picsum.photos/seed/bar/400/300', folder: 'apps/bar/public', filename: 'random.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (res) => {
      // Handle redirect
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirected to ${res.headers.location}`);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (status code: ${res.statusCode})`));
        return;
      }

      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    });

    request.on('error', (err) => reject(err));
  });
}

(async () => {
  for (const { url, folder, filename } of images) {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    const filepath = path.join(folder, filename);
    console.log(`Downloading ${url} → ${filepath}`);
    try {
      await download(url, filepath);
      console.log('Downloaded successfully');
    } catch (err) {
      console.error('Error:', err);
    }
  }
})();
