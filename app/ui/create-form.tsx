import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createBook } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createBook}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input id="title" name="title" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="author" className="text-right">
            Author
          </Label>
          <Input id="author" name="author" className="col-span-3" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Add Book</Button>
      </div>
    </form>
  );
}
