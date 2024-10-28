"use client";

import { deleteBook } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useFormState } from "react-dom";
import { useToast } from "@/hooks/use-toast";

export default function DeleteBook({ id, title }) {
  const deleteBookWithId = deleteBook.bind(null, id, title);
  const initialState = { success: null, message: null };
  const { toast } = useToast();
  const [state, formAction] = useFormState(async (id, prevState) => {
    const result = await deleteBookWithId(prevState);

    toast({
      variant: result.success ? "default" : "destructive",
      description: result.message,
    });
  }, initialState);

  return (
    <form action={formAction}>
      <Button variant="destructive" type="submit">
        <Trash2 size={20} />
      </Button>
    </form>
  );
}
