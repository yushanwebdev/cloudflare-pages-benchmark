import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      {/* Server-rendered Hello World */}
      <h1 className="text-4xl font-bold text-center">Hello World</h1>

      {/* Client-side Counter */}
      <Counter />
    </div>
  );
}
