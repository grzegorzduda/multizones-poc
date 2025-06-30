import Button from './Button';

export default function Hello({
  imageName = 'random.jpg',
}: {
  imageName?: string;
}) {
  const imagePath = `/images/${imageName}`;

  return (
    <div>
      <p className="mb-2">Hello from shared component!</p>
      <img src={imagePath} alt="Hello Image" className="w-48 h-auto mb-4 rounded shadow" />
      <Button>Click me</Button>
    </div>
  );
}