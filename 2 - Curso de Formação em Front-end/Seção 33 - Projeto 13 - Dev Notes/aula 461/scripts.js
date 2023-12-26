// ELEMENTOS
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");



// FUNÇÕES
function showNotes(){
    cleanNotes()
    getNotes().forEach((note)=>{
        const noteElement = createNote(note.id, note.content, note.fixed)
        notesContainer.appendChild(noteElement)
    })
}

function cleanNotes(){
    notesContainer.replaceChildren([])
}

function addNote() {
    const notes = getNotes();
    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content);
    notesContainer.appendChild(noteElement)

    notes.push(noteObject)
    saveNotes(notes)
    noteInput.value = "";
};

function generateId() {
    return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed) {
    const element = document.createElement("div");
    element.classList.add("note")

    const textarea = document.createElement("textarea")
    textarea.value = content
    textarea.placeholder = "Adicione algum texto..."
    element.appendChild(textarea)

    const pinIcon = document.createElement("i")
    pinIcon.classList.add(...["bi", "bi-pin"])
    element.appendChild(pinIcon)

    if(fixed){
        element.classList.add("fixed")
    }

    // EVENTOS DO ELEMENTO
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixNote(id)
    })
    return element;
};

function toggleFixNote(id){
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id)[0]
    targetNote.fixed = !targetNote.fixed
    saveNotes(notes)
    showNotes()
}

// LOCAL STORAGE
function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    
    const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1))
    return orderedNotes;
}
function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes))
}


// EVENTOS
addNoteBtn.addEventListener("click", () => addNote());


// INICIALIZAÇÃO
showNotes();