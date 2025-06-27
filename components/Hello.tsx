import Button from './Button';

export default function Hello({
  zone,
  imageName = 'random.jpg',
}: {
  zone: 'foo' | 'bar';
  imageName?: string;
}) {
  const imagePath = `/${zone}/images/${imageName}`;

  return (
    <div>
      <p className="mb-2">Hello from shared component!</p>
      <img src={imagePath} alt="Hello Image" className="w-48 h-auto mb-4 rounded shadow" />
      <Button>Click me</Button>
    </div>
  );
}