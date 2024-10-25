import { deleteBook } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
export default function DeleteBook({ id }) {
  const deleteBookWithId = deleteBook.bind(null, id);

  return (
    <form action={deleteBookWithId}>
      <Button variant="destructive" type="submit">
        <Trash2 size={20} />
      </Button>
    </form>
  );
}
