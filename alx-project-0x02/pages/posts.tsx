import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Posts Page</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is the Posts section of ALX Project 2.
        </p>
      </main>
    </div>
  );
}
