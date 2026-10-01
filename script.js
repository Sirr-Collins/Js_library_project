
// const myLibrary = [];

// function Book(title, author, pages, read) {
//     if (!new.target) {
//         throw Error("You should enter the 'new' keyword")
//     }
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }
 
// function addBookToLibrary() {
//     Object.setPrototypeOf(addBookToLibrary.prototype, Book.prototype);
//     let newbook = `${this.title} by ${this.author} contains ${this.pages}`;
//     const book1 = new Book('Odin', 'TOP Group', '200', 'no');
//     myLibrary.push(crypto.randomUUID(newbook));
    
// }

// console.log(myLibrary);









// // Array to store all book objects
// const myLibrary = [];

// // Constructor function for creating Book objects
// function Book(title, author, pages, isRead) {
//   this.id = crypto.randomUUID(); // Unique and stable identifier
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.isRead = isRead;
// }

// // Prototype method to toggle read status
// Book.prototype.toggleRead = function() {
//   this.isRead = !this.isRead;
// };

// // Function to handle book creation and addition to the library
// function addBookToLibrary(title, author, pages, isRead) {
//   const newBook = new Book(title, author, pages, isRead);
//   myLibrary.push(newBook);
//   displayBooks(); // Re-render library when data changes
// }

// // Function to render books from the array onto the page
// function displayBooks() {
//   const libraryContainer = document.getElementById("library-container");
//   libraryContainer.innerHTML = ""; // Clear existing display to avoid duplication

//   myLibrary.forEach((book) => {
//     // Create card element
//     const card = document.createElement("div");
//     card.classList.add("book-card");
//     if (book.isRead) card.classList.add("read");

//     // Add content to card
//     card.innerHTML = `
//       <h3>${book.title}</h3>
//       <p class="author">By ${book.author}</p>
//       <p class="pages">${book.pages} pages</p>
//       <div class="card-buttons">
//         <button class="toggle-btn" onclick="toggleBookRead('${book.id}')">
//           ${book.isRead ? "Mark Unread" : "Mark Read"}
//         </button>
//         <button class="delete-btn" onclick="removeBook('${book.id}')">Remove</button>
//       </div>
//     `;

//     libraryContainer.appendChild(card);
//   });
// }

// // Function to remove a book from the array and update the view
// function removeBook(id) {
//   const index = myLibrary.findIndex(book => book.id === id);
//   if (index !== -1) {
//     myLibrary.splice(index, 1);
//     displayBooks();
//   }
// }

// // Function to toggle a book's read status from the array and update the view
// function toggleBookRead(id) {
//   const book = myLibrary.find(book => book.id === id);
//   if (book) {
//     book.toggleRead();
//     displayBooks();
//   }
// }

// // DOM Event Listeners for the Form Dialog
// const newBookBtn = document.getElementById("new-book-btn");
// const bookDialog = document.getElementById("book-dialog");
// const bookForm = document.getElementById("book-form");
// const cancelBtn = document.getElementById("cancel-btn");

// // Open dialog modal
// newBookBtn.addEventListener("click", () => {
//   bookDialog.showModal();
// });

// // Close dialog modal without action
// cancelBtn.addEventListener("click", () => {
//   bookDialog.close();
//   bookForm.reset();
// });

// // Handle form submission
// bookForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent page refresh

//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const pages = parseInt(document.getElementById("pages").value, 10);
//   const isRead = document.getElementById("isRead").checked;

//   addBookToLibrary(title, author, pages, isRead);

//   bookForm.reset(); // Clear inputs for next time
//   bookDialog.close(); // Close modal
// });

// // Manually seed sample books for initial testing
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
// addBookToLibrary("1984", "George Orwell", 328, false);







// Array to store all book objects
const myLibrary = [];

// Refactored Book class
class Book {
  constructor(title, author, pages, isRead) {
    this.id = crypto.randomUUID(); // Unique and stable identifier
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  // Methods defined inside a class block automatically go to the prototype
  toggleRead() {
    this.isRead = !this.isRead;
  }
}

// Function to handle book creation and addition to the library
function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks(); // Re-render library when data changes
}

// Function to render books from the array onto the page
function displayBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = ""; // Clear existing display to avoid duplication

  myLibrary.forEach((book) => {
    // Create card element
    const card = document.createElement("div");
    card.classList.add("book-card");
    if (book.isRead) card.classList.add("read");

    // Add content to card
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p class="author">By ${book.author}</p>
      <p class="pages">${book.pages} pages</p>
      <div class="card-buttons">
        <button class="toggle-btn" onclick="toggleBookRead('${book.id}')">
          ${book.isRead ? "Mark Unread" : "Mark Read"}
        </button>
        <button class="delete-btn" onclick="removeBook('${book.id}')">Remove</button>
      </div>
    `;

    libraryContainer.appendChild(card);
  });
}

// Function to remove a book from the array and update the view
function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

// Function to toggle a book's read status from the array and update the view
function toggleBookRead(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.toggleRead();
    displayBooks();
  }
}

// DOM Event Listeners for the Form Dialog
const newBookBtn = document.getElementById("new-book-btn");
const bookDialog = document.getElementById("book-dialog");
const bookForm = document.getElementById("book-form");
const cancelBtn = document.getElementById("cancel-btn");

// Open dialog modal
newBookBtn.addEventListener("click", () => {
  bookDialog.showModal();
});

// Close dialog modal without action
cancelBtn.addEventListener("click", () => {
  bookDialog.close();
  bookForm.reset();
});

// Handle form submission
bookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);

  bookForm.reset(); // Clear inputs for next time
  bookDialog.close(); // Close modal
});

// Manually seed sample books for initial testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);
