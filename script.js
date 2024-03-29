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

    delBtn.addEventListener("click",() =>{
        myLibrary.splice(myLibrary.indexOf(this),1)
        displayLibrary()
    })
    readBtn.addEventListener("click",()=>{
        this.read = this.read?false:true;
        displayLibrary()
    })

    readBtn.innerText = "Read"
    delBtn.innerText = "Delete"
    bookDiv.innerText = `Title: ${this.title},Author: ${this.author},Pages: ${this.pages},Read: ${this.read ? "yes" : "not yet"}`

    bookContainer.appendChild(bookDiv)
    bookContainer.appendChild(readBtn)
    bookContainer.appendChild(delBtn)

}
//functions
function addBookToLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
}

function displayLibrary() {
    bookContainer.innerHTML = ""
    myLibrary.forEach(book=>{
        book.display()
    })
}
function checkValue(){
    if(!titleInput.value){titleInput.value="Unknown"}
    if(!authorInput.value){authorInput.value="Unknown"}
    if(!pagesInput.value){pagesInput.value="Unknown"}
}
function submitForm(event){
    event.preventDefault()
    checkValue()
    addBookToLibrary(titleInput.value,authorInput.value, pagesInput.value, readInput.value)
    displayLibrary()
    dialog.close()
}

//const
const myLibrary = [];

//html divs
const bookContainer = document.querySelector(".bookContainer")
const dialog = document.querySelector("#dialog")
//btns
const addNewBookBtn = document.querySelector("#addNewBook")
const closeDialogBtn = document.querySelector("#closeBtn")
const submitFormBtn = document.querySelector("#submitBtn")
//form inputs
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const readInput = document.querySelector("#read")

//eventListeners
addNewBookBtn.addEventListener("click", ()=>{dialog.showModal()})
closeDialogBtn.addEventListener("click", ()=>{dialog.close()})
submitFormBtn.addEventListener("click", submitForm)

//test
addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,false)
addBookToLibrary("Parcy Jackson","Rick Riordan",312,true)
addBookToLibrary("Star Wars: A New Hope","George Lucas",400,true)
addBookToLibrary("Game of Thrones","Unknown",600,false)
console.log(myLibrary)
displayLibrary()
