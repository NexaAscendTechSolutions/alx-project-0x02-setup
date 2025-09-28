import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8">
        {/* Page heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            This is the Home section of ALX Project 2.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Reusable Card"
            content="This component accepts props for title and content."
          />
          <Card
            title="Learning Next.js"
            content="We are implementing routing, layouts, and components."
          />
          <Card
            title="Dynamic Content"
            content="You can pass in any title and content to render different cards."
          />
        </div>
      </main>
    </div>
  );
}
