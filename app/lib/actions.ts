"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBook(prevState, formData) {
  const rawFormData = {
    title: formData.get("title"),
    author: formData.get("author"),
  };
  console.log("Creating new book:", rawFormData);

  try {
    const response = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    if (!response.ok) {
      throw new Error("Failed to create book");
    }

    const result = await response.json();
    console.log("Book created successfully:", result);
    revalidatePath("/");

    return {
      success: true,
      message: "Book created successfully!",
    };
  } catch (error) {
    console.error("Error creating book:", error);
    return {
      success: false,
      message: "Database Error: Failed to Create Book",
    };
  }
}

export async function updateBook(id, prevState, formData) {
  const updatedFormData = {
    title: formData.get("edit-title"),
    author: formData.get("edit-author"),
  };
  console.log("Updating book:", { id, ...updatedFormData });

  try {
    const response = await fetch(`http://localhost:8080/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });

    if (!response.ok) {
      throw new Error("Failed to update book");
    }

    const result = await response.json();
    console.log("Book updated successfully:", result);
    revalidatePath("/");

    return {
      success: true,
      message: "Saved changes successfully!",
    };
  } catch (error) {
    console.error("Error updating book:", error);
    return {
      success: false,
      message: "Database Error: Failed to Update Book",
    };
  }
}

export async function deleteBook(id, title, prevState) {
  console.log("Deleting book:", { id, title });

  try {
    const response = await fetch(`http://localhost:8080/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }

    const result = await response.json();
    console.log("Book deleted successfully:", result);
    revalidatePath("/");

    return {
      success: true,
      message: `${title} deleted successfully`,
    };
  } catch (error) {
    console.error("Error deleting book:", error);
    return {
      success: false,
      message: `Database Error: Failed to Delete ${title}`,
    };
  }
}
