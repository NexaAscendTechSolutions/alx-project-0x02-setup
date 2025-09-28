import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center text-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            👋 Welcome to ALX Project 2
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your Next.js app is live and ready to build on!
          </p>
        </div>
      </main>
    </div>
  );
}
