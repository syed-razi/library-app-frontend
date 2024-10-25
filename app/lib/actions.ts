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

export async function updateBook(id, formData) {
  const updatedFormData = {
    title: formData.get("edit-title"),
    author: formData.get("edit-author"),
  };

  console.log("Updating book with ID:", id);

  // Send a PUT request to your Spring Data REST API to update the book
  try {
    const response = await fetch(`http://localhost:8080/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Failed to update book with ID ${id}`);
    }

    console.log(
      `Book with ID ${id} updated successfully:`,
      await response.json()
    );
  } catch (error) {
    console.error("Error updating book:", error);
    throw new Error(`Failed to update book with ID ${id}`);
  }
  revalidatePath("/");
  redirect("/");
}

export async function deleteBook(id) {
  try {
    const response = await fetch(`http://localhost:8080/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete book with ID ${id}`);
    }
    revalidatePath("/");

    return {
      success: true,
      message: `Book with ID ${id} deleted successfully`,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
