import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">About Page</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          This is the About section of ALX Project 2.
        </p>

        <div className="flex gap-4 justify-center">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
}
