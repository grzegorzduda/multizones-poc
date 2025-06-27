import Hello from '@/components/Hello';

export default function FooPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">This is the /foo site</h1>
      <Hello zone="foo" imageName="foo.jpg" />
    </div>
  );
}
