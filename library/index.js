
let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
    
    info = function() {
        if (this.read === false) {
            return `The ${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
        }
    }

    changeStatus = function() {
        this.read === true ? this.read = false : this.read = true;
    }
}



const displayBooks = () => {
    
    const books = document.querySelector(".books");
    while(books.hasChildNodes()) {
        books.removeChild(books.lastChild);
    }

    for (const book of myLibrary){
        const books = document.querySelector(".books");
        
        const card = document.createElement("div");
        const title = document.createElement("p");
        title.textContent = `Title: ${book.title}`;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = `Read it? ${book.read}`;
        card.appendChild(read);
        
        const status = document.createElement("button");
        status.textContent = "Change Read it? status";
        status.addEventListener("click", () => {
            book.changeStatus();
            displayBooks();
        });
        card.appendChild(status);

        const remove = document.createElement("button");
        remove.textContent = "Remove Book";
        remove.addEventListener("click", () => {
            const children = books.childNodes;
            const parent = remove.parentNode;
            for (const node of children) {
                if (node === parent){
                    books.removeChild(node);
                    myLibrary.splice(myLibrary.findIndex((val)=> val === book), 1); //guarantees that we will proplerly remove the book from the library at the correct index
                }
            }
        });
        card.appendChild(remove);
        books.appendChild(card);
    }
}


const addBookToLibrary = (event) => {
        event.preventDefault();
        const title = document.querySelector("#title").value;
        console.log(title.value);
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").value;
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        console.log("submitted");
        displayBooks();
}

const createNewBookForm = () => {
    const formContentsToDelete = document.querySelector("#form");
    while(formContentsToDelete.hasChildNodes()) {
        formContentsToDelete.removeChild(formContentsToDelete.lastChild);
    }
    const formDiv = document.querySelector("#form");
    const bookForm = document.createElement("form");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Book Title:";
    const titleInput = document.createElement("input");
    titleInput.id = "title";
    titleInput.type = "text";
    titleInput.required = true;
    const authorLabel = document.createElement("label");
    authorLabel.textContent = "Author Name:";
    const authorInput = document.createElement("input");
    authorInput.id = "author";
    authorInput.type = "text";
    authorInput.required = true;
    const pagesLabel = document.createElement("label");
    pagesLabel.textContent = "Number of pages:";
    const pagesInput = document.createElement("input");
    pagesInput.id = "pages";
    pagesInput.type = "number";
    pagesInput.required = true;
    const readItLabel = document.createElement("label");
    readItLabel.textContent = "Have you read it? (true or false):";
    const readItInput = document.createElement("input");
    readItInput.id = "read";
    readItInput.type = "text";
    readItInput.required = true;
    const submit = document.createElement("input");
    submit.type = "submit";

    bookForm.addEventListener("submit", addBookToLibrary);

    bookForm.appendChild(titleLabel);
    bookForm.appendChild(titleInput);
    bookForm.appendChild(authorLabel);
    bookForm.appendChild(authorInput);
    bookForm.appendChild(pagesLabel);
    bookForm.appendChild(pagesInput);
    bookForm.appendChild(readItLabel);
    bookForm.appendChild(readItInput);
    bookForm.appendChild(submit);
    formDiv.appendChild(bookForm);
}

const newBookBtn = document.querySelector("#new");

newBookBtn.addEventListener("click", createNewBookForm);

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let handmaid = new Book("The Handmaid's Tale", "Margaret Atwood", 311, true);
myLibrary.push(theHobbit);
myLibrary.push(handmaid);

displayBooks();