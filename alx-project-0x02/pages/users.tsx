import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: unknown) => {
        // ensure data is an array
        if (Array.isArray(data)) {
          const mappedUsers: UserProps[] = data.map(
            (user: {
              id: number;
              name: string;
              email: string;
              address: { street: string; city: string };
            }) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              address: {
                street: user.address.street,
                city: user.address.city,
              },
            })
          );
          setUsers(mappedUsers);
        }
      });
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Users
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
