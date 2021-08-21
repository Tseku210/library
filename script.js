let myLibrary = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submitButton = document.querySelector("#submit");
const mainSection = document.querySelector("#main");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    myLibrary.push(new Book(title.value, author.value, pages.value, read.checked))
    storeLocal()
}

submitButton.addEventListener("click", () => {
    addBookToLibrary()
    refreshCards()
    displayCards()
    storeLocal()
})

function refreshCards(){
    while (mainSection.firstChild){
        mainSection.removeChild(mainSection.firstChild);
    }
    storeLocal()
}

function displayCards() {
    for (let i = 0; i < myLibrary.length; i++){
        let div = document.createElement("div");
        let titleCard = document.createElement("h2");
        let authorCard = document.createElement("p");
        let pagesCard = document.createElement("p");
        let readCard = document.createElement("input");
        let removeButton = document.createElement("button");

        readCard.type = "checkbox";

        if (myLibrary[i].read === true){
            readCard.checked = true;
        } else if (
            myLibrary[i].read === false) {
            readCard.checked = false;
        };

        authorCard.textContent = myLibrary[i].author;
        titleCard.textContent = myLibrary[i].title;
        pagesCard.textContent = myLibrary[i].pages;
        removeButton.classList.add("remove");
        removeButton.textContent = "REMOVE";

        div.classList.add("card");
        div.dataset.index = `${i}`;
        removeButton.dataset.index = `${i}`

        div.append(titleCard);
        div.append(authorCard);
        div.append(pagesCard);
        div.append(readCard);
        div.append(removeButton);
        mainSection.appendChild(div);
        storeLocal()
    }
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => button.addEventListener("click", (e) => {
        myLibrary.splice(Number(e.target.dataset.index), 1);
        console.log(Number(e.target.dataset.index))
        console.log(myLibrary[Number(e.target.dataset.index)])
        console.log(myLibrary)
        console.log(e.target)
        refreshCards()
        displayCards()
        storeLocal()
    }))
}
function storeLocal(){
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}
function restore(){
    if (!localStorage.myLibrary){
        displayCards();
    } else {
        let storageLocal = localStorage.getItem("myLibrary");
        let storage = JSON.parse(storageLocal);
        myLibrary = storage;
        displayCards()
    }
}

restore();

