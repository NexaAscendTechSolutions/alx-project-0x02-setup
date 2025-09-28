import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    {
      title: "Reusable Card",
      content: "This component accepts props for title and content.",
    },
    {
      title: "Learning Next.js",
      content: "We are implementing routing, layouts, and components.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSavePost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            This is the Home section of ALX Project 2.
          </p>
        </div>

        {/* Add Post button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Add New Post
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />
    </div>
  );
}
