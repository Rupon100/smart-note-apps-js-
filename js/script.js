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

// get all data from LS then show it
const updateNote = () => {
    const parent = document.querySelector(".notes");
parent.innerHTML = '';
for(let i = 0; i < localStorage.length; i++){
    const item = JSON.parse(localStorage.getItem(`note${i}`));
    // const {title, date, msg} = item || 0;
    
    parent.innerHTML += `
      <div class="note-box">
        <div class="note-info">
          <h3>${item[0]}</h3>
          <p>${item[1]}</p>
          <p>${item[2]}</p>
        </div>
        <div class="note-edit">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    `
}
}
updateNote();


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
    updateNote();
});


// edit data, delete data, dark theme,  search 