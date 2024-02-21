//constructors
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
//prototype funcs
Book.prototype.display= function(){
    const bookDiv = document.createElement("div");
    const readBtn = document.createElement("button")
    const delBtn = document.createElement("button");

    readBtn.innerText = "Read"
    delBtn.innerText = "Delete"
    bookDiv.innerText = `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read ? "read" : "not read yet"}`

    mainDiv.appendChild(bookDiv)
    mainDiv.appendChild(readBtn)
    mainDiv.appendChild(delBtn)

}
//functions
function addBookToLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
}

function displayLibrary() {
    myLibrary.forEach(book=>{
        book.display()
    })
    

}
//const
const myLibrary = [];
const mainDiv = document.querySelector(".main")


//test
addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,false)
addBookToLibrary("Parcy Jackson","Rick Riordan",312,true)
addBookToLibrary("Star Wars: A New Hope","George Lucas",400,true)
addBookToLibrary("Game of Thrones","Unknown",600,false)
console.log(myLibrary)
displayLibrary()
