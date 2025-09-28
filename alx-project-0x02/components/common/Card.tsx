import { CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
}
