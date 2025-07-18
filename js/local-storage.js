// for functionality -- https://chatgpt.com/c/687913e0-ebcc-8008-92b2-d352690310fc

 
const addedNote = (note) => {
    const count = localStorage.length;
    localStorage.setItem(`note${count}`, note);
}

const getNote = () => {
    return localStorage.getItem(`note${count}`);
} 

export {addedNote, getNote};