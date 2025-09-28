// pages/interface/index.tsx
import Header from "../layout/Header";

export default function InterfacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Interface Page</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is the Interface section of ALX Project 2.
        </p>
      </main>
    </div>
  );
}
