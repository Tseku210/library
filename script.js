// let myLibrary = [];
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const pages = document.querySelector("#pages");
// const read = document.querySelector("#read");
// const submitButton = document.querySelector("#submit");
// const mainSection = document.querySelector("#main");

// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// function addBookToLibrary(){
//     myLibrary.push(new Book(title.value, author.value, pages.value, read.checked))
//     storeLocal()
// }

// submitButton.addEventListener("click", () => {
//     addBookToLibrary()
//     refreshCards()
//     displayCards()
//     storeLocal()
// })

// function refreshCards(){
//     while (mainSection.firstChild){
//         mainSection.removeChild(mainSection.firstChild);
//     }
//     storeLocal()
// }

// function displayCards() {
//     for (let i = 0; i < myLibrary.length; i++){
//         let div = document.createElement("div");
//         let titleCard = document.createElement("h2");
//         let authorCard = document.createElement("p");
//         let pagesCard = document.createElement("p");
//         let readCard = document.createElement("input");
//         let removeButton = document.createElement("button");

//         readCard.type = "checkbox";

//         if (myLibrary[i].read === true){
//             readCard.checked = true;
//         } else if (
//             myLibrary[i].read === false) {
//             readCard.checked = false;
//         };

//         authorCard.textContent = myLibrary[i].author;
//         titleCard.textContent = myLibrary[i].title;
//         pagesCard.textContent = myLibrary[i].pages;
//         removeButton.classList.add("remove");
//         removeButton.textContent = "REMOVE";

//         div.classList.add("card");
//         div.dataset.index = `${i}`;
//         removeButton.dataset.index = `${i}`

//         div.append(titleCard);
//         div.append(authorCard);
//         div.append(pagesCard);
//         div.append(readCard);
//         div.append(removeButton);
//         mainSection.appendChild(div);
//         storeLocal()
//     }
//     const removeButtons = document.querySelectorAll(".remove");
//     removeButtons.forEach(button => button.addEventListener("click", (e) => {
//         myLibrary.splice(Number(e.target.dataset.index), 1);
//         console.log(Number(e.target.dataset.index))
//         console.log(myLibrary[Number(e.target.dataset.index)])
//         console.log(myLibrary)
//         console.log(e.target)
//         refreshCards()
//         displayCards()
//         storeLocal()
//     }))
// }
// function storeLocal(){
//     localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
// }
// function restore(){
//     if (!localStorage.myLibrary){
//         displayCards();
//     } else {
//         let storageLocal = localStorage.getItem("myLibrary");
//         let storage = JSON.parse(storageLocal);
//         myLibrary = storage;
//         displayCards()
//     }
// }

// restore();
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
class MyLibrary {

    constructor(){
        this.myLibrary = [];
        this.title = document.querySelector("#title");
        this.author = document.querySelector("#author");
        this.pages = document.querySelector("#pages");
        this.read = document.querySelector("#read");
        this.submitButton = document.querySelector("#submit");
        this.mainSection = document.querySelector("#main");
    }

    addBookToLibrary = () => {
        this.myLibrary.push(new Book(this.title.value, this.author.value, this.pages.value, this.read.checked))
        this.storeLocal()
    }

    isFormValid = () => {
        if ((!this.title.checkValidity()) || (!this.author.checkValidity()) || (!this.pages.checkValidity())) {
            return false;
        } else {
            return true;
        }
    }

    formAddErrorListener = (el) => {
        el.addEventListener("input", () => {
            if (!el.checkValidity()) {
                el.setCustomValidity("not valid");
                el.reportValidity();
                el.setCustomValidity("")
            } else {
                el.setCustomValidity("");
            }
        })
    }

    submitListener = () => {
        this.submitButton.addEventListener("click", () => {
            if (this.isFormValid()) {
                this.addBookToLibrary()
                this.refreshCards()
                this.displayCards()
                this.storeLocal()
            } else {
                return;
            }

        })
    }
    refreshCards = () => {
        while (this.mainSection.firstChild){
            this.mainSection.removeChild(this.mainSection.firstChild);
        }
        this.storeLocal()
    }
    displayCards = () => {
        for (let i = 0; i < this.myLibrary.length; i++){
            let div = document.createElement("div");
            let titleCard = document.createElement("h2");
            let authorCard = document.createElement("p");
            let pagesCard = document.createElement("p");
            let readCard = document.createElement("input");
            let removeButton = document.createElement("button");
    
            readCard.type = "checkbox";
    
            if (this.myLibrary[i].read === true){
                readCard.checked = true;
            } else if (
                this.myLibrary[i].read === false) {
                readCard.checked = false;
            };
    
            authorCard.textContent = this.myLibrary[i].author;
            titleCard.textContent = this.myLibrary[i].title;
            pagesCard.textContent = this.myLibrary[i].pages;
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
            this.mainSection.appendChild(div);
            this.storeLocal()
        }
        const removeButtons = document.querySelectorAll(".remove");
        removeButtons.forEach(button => button.addEventListener("click", (e) => {
            this.myLibrary.splice(Number(e.target.dataset.index), 1);
            console.log(Number(e.target.dataset.index))
            console.log(this.myLibrary[Number(e.target.dataset.index)])
            console.log(this.myLibrary)
            console.log(e.target)
            this.refreshCards()
            this.displayCards()
            this.storeLocal()
        }))
    }
    storeLocal = () => {
        localStorage.setItem("myLibrary", JSON.stringify(this.myLibrary));
    }
    restore = () => {
        if (!localStorage.myLibrary){
            this.displayCards();
        } else {
            let storageLocal = localStorage.getItem("myLibrary");
            let storage = JSON.parse(storageLocal);
            this.myLibrary = storage;
            this.displayCards()
        }
    }
    run = () => {
        this.formAddErrorListener(this.title)
        this.formAddErrorListener(this.author)
        this.formAddErrorListener(this.pages)
        this.submitListener()
        this.restore()
    }
}
let library = new MyLibrary;
library.run()