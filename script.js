const myLibrary = [];
const mainDiv = document.querySelector(".main")

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read){
            return `${this.title} by ${this.author}, ${this.pages} pages,had read.`
        }else{
            return `${this.title} by ${this.author}, ${this.pages} pages,not read yet.`
        }
    }
}

function addBookToLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
}

function displayLibrary() {
    myLibrary.forEach(book=>{
        const bookDiv = document.createElement("div");
        const readBtn = document.createElement("button")
        const delBtn = document.createElement("button");

        readBtn.innerText = "Read"
        delBtn.innerText = "Delete"
        bookDiv.innerText = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read ? "read" : "not read yet"}`

        mainDiv.appendChild(bookDiv)
        mainDiv.appendChild(readBtn)
        mainDiv.appendChild(delBtn)
    })
    

}

addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,false)
addBookToLibrary("Parcy Jackson","Rick Riordan",312,true)
addBookToLibrary("Star Wars: A New Hope","George Lucas",400,true)
addBookToLibrary("Game of Thrones","Unknown",600,false)
console.log(myLibrary)
displayLibrary()
