"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Fail to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Failed to fetch Users");
        if (error instanceof Error) {
          setError(`Failed to fetch User: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Loading....</div>;
  if (error) return { error };
  return (
    <ul className="container mx-auto px-4 py-8 mt-20 space-y-4 p-4 ">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-500"
        >
          {user.name} ({user.email}) ({user.phone}) ({user.username})
        </li>
      ))}
    </ul>
  );
}
