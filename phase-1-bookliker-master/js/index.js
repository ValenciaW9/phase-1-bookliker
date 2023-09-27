document.addEventListener("DOMContentLoaded", function() {
  // Create an li element for each book
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.title;

    // Append the li to the book list
    booklist.appendChild(li);
  });
});