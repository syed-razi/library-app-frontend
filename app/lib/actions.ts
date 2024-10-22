"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBook(formData) {
  const rawFormData = {
    title: formData.get("title"),
    author: formData.get("author"),
  };
  console.log("Submitting book data to Spring:", rawFormData);

  // Send a POST request to your Spring Data REST API
  try {
    const response = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Failed to create the book");
    }

    console.log("Book created successfully:", await response.json());
  } catch (error) {
    console.error("Error creating book:", error);
    throw new Error("Failed to submit the book.");
  }
  revalidatePath("/");
  redirect("/");
}
