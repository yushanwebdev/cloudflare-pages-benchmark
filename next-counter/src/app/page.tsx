import ServerGreeting from "./components/ServerGreeting";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <ServerGreeting />
      <Counter />
    </div>
  );
}
