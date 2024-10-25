import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBook } from "@/app/lib/actions";

export default function EditBook({ id, title, author }) {
  const updateBookWithId = updateBook.bind(null, id);

  return (
    <form action={updateBookWithId}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="edit-title" className="text-right">
            Title
          </Label>
          <Input
            id="edit-title"
            name="edit-title"
            className="col-span-3"
            defaultValue={title}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="edit-author" className="text-right">
            Author
          </Label>
          <Input
            id="edit-author"
            name="edit-author"
            className="col-span-3"
            defaultValue={author}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}
