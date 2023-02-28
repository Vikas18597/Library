const myLibrary = []

function Book (author, title, pages, readFlag) {
  this.author = author
  this.title = title
  this.pages = pages
  this.readFlag = readFlag
}

function addBookToLibrary (book) {
  myLibrary.push(book)
}

const book1 = new Book('Vikas', 'Big Brain', '1000', 'No')
addBookToLibrary(book1)

const book2 = new Book('Vipas', 'Small Brain', '400', 'Yes')
addBookToLibrary(book2)

const book3 = new Book('Viwas', 'Medium Brain', '700', 'No')
addBookToLibrary(book3)

// creating table based on book length
for (let i = 0; i < myLibrary.length + 1; i++) {
  const heading = document.createElement('tr')
  heading.setAttribute('id', 'row-' + i)
  const element = document.getElementById('table')
  element.appendChild(heading)
}

for (const keys in book1) {
  const heading = document.createElement('th')
  const text = document.createTextNode(keys)
  heading.appendChild(text)
  const element = document.getElementById('row-0')
  element.appendChild(heading)
}

for (let i = 0; i < myLibrary.length; i++) {
  const temp = Object.values(myLibrary[i])
  for (let j = 1; j < Object.values(temp).length + 1; j++) {
    const cell = document.createElement('td')
    const text = document.createTextNode(temp[j - 1])
    cell.appendChild(text)
    const element = document.getElementById('row-' + (i + 1))
    element.appendChild(cell)
  }
}

// adding a function for pop up box with details for entires of books
function details () {
  const person = prompt('Please enter author name')
  const title = prompt('Please enter title')
}

const popUp = document.querySelector('.open-button')
popUp.addEventListener('click', details)
