import { addedNote, getNote } from "./local-storage.js";

//.for note add
const addNote =  document.querySelector(".note1");
const formData = document.querySelector(".form-info");
addNote.addEventListener("click", (e) => {
    formData.style.display = "block";
})

// for cancel note form
const canBtn = document.querySelector(".cancel-btn");
canBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formData.style.display = "none";
})

// get data from form
formData.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("info submittted");
    const data = new FormData(formData);
    const infoArray = [];
    data.forEach(d => {
        infoArray.push(d);
    })
    console.log(infoArray)
    const isadded = addedNote(JSON.stringify(infoArray));
    console.log(isadded)
    formData.style.display = "none";
});

// dynamic show data, edit data, delete data, dark theme,  search 