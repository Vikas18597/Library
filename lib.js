const myLibrary = []

function Book (author, title, pages, readFlag) {
  this.author = author
  this.title = title
  this.pages = pages
  this.readFlag = readFlag
}

function addBookToLibrary (book) {
  myLibrary.push(book.title)
  console.log(myLibrary)
}

const book1 = new Book('Vikas', 'Big Brain', '1000', 'No')
addBookToLibrary(book1)
