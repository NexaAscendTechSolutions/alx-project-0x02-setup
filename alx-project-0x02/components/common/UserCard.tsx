import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{email}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
}
