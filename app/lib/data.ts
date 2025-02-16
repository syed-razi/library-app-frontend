export async function fetchBooks() {
  try {
    const res = await fetch("http://localhost:8080/books", {
      cache: "no-store",
    });
    const data = await res.json();
    const books = data._embedded?.books || [];
    return books;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch book data.");
  }
}
