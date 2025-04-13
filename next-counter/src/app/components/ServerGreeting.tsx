export default function ServerGreeting() {
  // This will be executed on the server
  const serverTime = new Date().toLocaleTimeString();

  return (
    <div className="text-3xl font-bold text-blue-600 mb-8">
      Hello World from Server! (Server Time: {serverTime})
    </div>
  );
}
