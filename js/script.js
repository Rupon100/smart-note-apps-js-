import { addedNote, getNote, deleteAll } from "./local-storage.js";

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
    
    parent.innerHTML += `
      <div class="note-box">
        <div class="note-info">
          <h3>${item[0]}</h3>
          <p>${item[1]}</p>
          <p>${item[2]}</p>
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


// delete item note
const deleteItem = document.getElementById("itemDelete");
deleteItem.addEventListener("click", () => {
  deleteAll();
  updateNote();
})


// // dark theme 
// const btn = document.querySelector(".note2");
// const func = document.querySelector(".function-box");
// btn.addEventListener("click", () => {
//   const theme = document.body.classList.toggle("dark");
//   localStorage.setItem("mode", theme ? "dark" : "light");
//    console.log(theme);
//    func.style.backgroundColor = theme ? "gray" : "#B9D9EB";
//   //  parent.style.backgroundColor = theme ? "gray" : "#B9D9EB";
// })