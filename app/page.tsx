import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";
import { fetchBooks } from "./lib/data";

export default async function Home() {
  // Mock data for books
  // const books = [
  //   {
  //     id: 1,
  //     title: "To Kill a Mockingbird",
  //     author: "Harper Lee",
  //     cover: "/placeholder.svg?height=200&width=150",
  //   },
  //   {
  //     id: 2,
  //     title: "1984",
  //     author: "George Orwell",
  //     cover: "/placeholder.svg?height=200&width=150",
  //   },
  //   {
  //     id: 3,
  //     title: "Pride and Prejudice",
  //     author: "Jane Austen",
  //     cover: "/placeholder.svg?height=200&width=150",
  //   },
  //   {
  //     id: 4,
  //     title: "The Great Gatsby",
  //     author: "F. Scott Fitzgerald",
  //     cover: "/placeholder.svg?height=200&width=150",
  //   },
  //   {
  //     id: 5,
  //     title: "Moby Dick",
  //     author: "Herman Melville",
  //     cover: "/placeholder.svg?height=200&width=150",
  //   },
  //   {
  //     id: 6,
  //     title: "The Catcher in the Rye",
  //     author: "J.D. Salinger",
  //     cover: "/placeholder.svg?height=200&width=150",
  //   },
  // ];

  const books = await fetchBooks();
  console.log(books);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">City Library</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    My Reservations
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for books..."
              className="w-full pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">
                  {book.title}
                </CardTitle>
                <p className="text-sm text-gray-600">{book.authourFirstName}</p>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Button className="w-full">Reserve</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
