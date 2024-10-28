"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createBook } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import Submit from "./add-book-button";
import { useRef } from "react";

export default function Form() {
  const initialState = { status: null, message: null };
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form
  const [state, formAction] = useFormState(async (prevState, formData) => {
    const result = await createBook(prevState, formData);

    // Reset form if submission was successful
    if (result.status === "success") {
      formRef.current?.reset();
    }

    return result;
  }, initialState);

  return (
    <form ref={formRef} action={formAction}>
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
      <div className="flex items-center justify-end gap-4">
        <Submit {...state} text="Add Book" pendingText="Adding Book..." />
      </div>
    </form>
  );
}
