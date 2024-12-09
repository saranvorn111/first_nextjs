import { resolve } from "path";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UserServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <ul className="container mx-auto px-4 py-8 mt-20 space-y-4 p-4 ">
      {users.map((user: User) => (
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
