// for functionality -- https://chatgpt.com/c/687913e0-ebcc-8008-92b2-d352690310fc

// for adding note
const addedNote = (note) => {
    const count = localStorage.length;
    localStorage.setItem(`note${count}`, note);
}

// get one item
const getNote = () => {
    return localStorage.getItem(`note${count}`);
} 

// delete all
const deleteAll = () => {
    localStorage.clear();
}

export {addedNote, getNote, deleteAll};