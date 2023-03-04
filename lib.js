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

function Printdata () {
  // deleting the section
  const temp = document.getElementById('table')
  temp.innerHTML = ''

  // creating table based on book length
  for (let i = 0; i < myLibrary.length + 1; i++) {
    const heading = document.createElement('tr')
    heading.setAttribute('id', 'row-' + i)
    const element = document.getElementById('table')
    element.appendChild(heading)
  }

  for (let i = 0; i < Object.keys(book1).length; i++) {
    const heading = document.createElement('th')
    const text = document.createTextNode(Object.keys(book1)[i])
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
  for (let i = 1; i < myLibrary.length + 1; i++) {
    const temp = document.createElement('div')
    temp.setAttribute('id', 'del-butt-div')
    const cell = document.createElement('button')
    cell.setAttribute('id', 'del-butt')
    const text = document.createTextNode('del')
    cell.appendChild(text)
    const element = document.getElementById('row-' + i)
    element.appendChild(temp)
    temp.appendChild(cell)
  }
}

// calling it once
Printdata()

// adding a function for pop up box with details for entires of books
const popUp = document.querySelector('.open-button')
popUp.addEventListener('click', function (e) {
  document.getElementById('myForm').style.display = 'block'
  e.preventDefault()
})

const popOut = document.querySelector('.Enter')
popOut.addEventListener('click', (e) => {
  e.preventDefault()
  const newAuthor = document.getElementById('Name-author').value

  const newTitle = document.getElementById('Book-title').value

  const newPages = document.getElementById('Book-pages').value

  const readFlag = document.getElementsByName('Book-readFlag')

  // for checking if there are non empty values
  if (newAuthor && newTitle && newPages) {
    if (readFlag[0].checked) {
      const booknew = new Book(newAuthor, newTitle, newPages, 'Yes')
      addBookToLibrary(booknew)
      document.getElementById('myForm').style.display = 'none'
      Printdata()
      console.log(myLibrary)
      document.querySelector('.form-container').reset()
    } else if (readFlag[1].checked) {
      const booknew = new Book(newAuthor, newTitle, newPages, 'No')
      addBookToLibrary(booknew)
      document.getElementById('myForm').style.display = 'none'
      Printdata()
      console.log(myLibrary)
      document.querySelector('.form-container').reset()
    }
  } else {
    if (!newAuthor) {
      document.getElementById('empty-author').style.display = 'block'
    } else {
      document.getElementById('empty-author').style.display = 'none'
    }
    if (!newTitle) {
      document.getElementById('empty-title').style.display = 'block'
    } else {
      document.getElementById('empty-title').style.display = 'none'
    }
    if (!newPages) {
      document.getElementById('empty-page').style.display = 'block'
    } else if (newPages) {
      document.getElementById('empty-page').style.display = 'none'
    }
    if (!readFlag[0].checked && !readFlag[1].checked) {
      document.getElementById('empty-flag').style.display = 'block'
    } else if (readFlag[0].checked || readFlag[1].checked) {
      document.getElementById('empty-flag').style.display = 'none'
    }
  }
})

// adding event listener to delete row when ordered
const buttons = document.querySelector('.table-div')

const del = (x) => {
  if (x.target.tagName === 'BUTTON') {
    const currentVal = x.target.parentElement.parentElement
    currentVal.remove()
  }
}

buttons.addEventListener('click', del)
