import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function Submit({ status, message }) {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && status && (
        <p className={status === "success" ? "text-green-600" : "text-red-600"}>
          {message}
        </p>
      )}
      <Button type="submit" disabled={pending}>
        {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {pending ? "Adding Book..." : "Add Book"}
      </Button>
    </>
  );
}
