import LoginForm from "@/components/auth/login-form";
import { BookGrid } from "@/components/books/BookGrid";
import { Book } from "lucide-react";

export default function Books() {
  return (
    <div className="text-center">
      <BookGrid />
    </div>
  );
}
