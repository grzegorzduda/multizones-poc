import Hello from '@/components/Hello';

export default function BarPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">This is the /bar site</h1>
      <Hello imageName='bar.jpg' />
    </div>
  );
}
