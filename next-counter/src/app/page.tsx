import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <Counter />
    </div>
  );
}
