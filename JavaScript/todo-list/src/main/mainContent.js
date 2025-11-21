export function createMainContent() {
    const grid = document.createElement("div");
    grid.classList.add("notes-grid");
  
    const notes = [
      { color: "yellow", title: "Shopping List", items: ["Milk", "Bread", "Eggs", "Butter"] },
      { color: "blue", title: "To Do", items: ["Finish report", "Email clients", "Team meeting", "Plan next sprint"] },
      { color: "pink", title: "Reminders", items: ["Pay bills", "Doctor appointment", "Call mom", "Buy birthday gift"] },
      { color: "orange", title: "Ideas", items: ["New app concept", "Marketing strategy", "Workshop topics", "Content plan"] }
    ];
    
    notes.forEach(note => {
      const noteEl = document.createElement("div");
      noteEl.classList.add("note");
      noteEl.dataset.color = note.color;
  
      const title = document.createElement("h3");
      title.textContent = note.title;
  
      const ul = document.createElement("ul");
      note.items.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
  
      noteEl.appendChild(title);
      noteEl.appendChild(ul);
      grid.appendChild(noteEl);
    });
  
    // CREATE ADD NOTE BUTTON
    const addNote = document.createElement("div");
    addNote.classList.add("note", "add-note");
    addNote.innerHTML = "<span>+</span>";
    grid.appendChild(addNote);
  
    let currentEditable = null;
    let newNoteCount = 0;        
    const NEW_NOTE_LIMIT = 3;
  
    function lockNote(note) {
      const editables = note.querySelectorAll("[contenteditable='true']");
      editables.forEach(el => el.contentEditable = "false");
    }
ç

    addNote.addEventListener("click", () => {
  
      // FIRST check limit
      if (newNoteCount >= NEW_NOTE_LIMIT) {
        console.log("Limit reached: Only 3 new todo notes allowed.");
        return;
      }
  
      // Lock older editable note
      if (currentEditable) {
        lockNote(currentEditable);
        currentEditable = null;
      }
  
      // Create NEW note
      const newNote = document.createElement("div");
      newNote.classList.add("note");
  
      const colors = ["yellow", "blue", "pink", "orange"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      newNote.dataset.color = randomColor;
  
      const title = document.createElement("h3");
      title.textContent = "New Note";
      title.contentEditable = "true";
  
      const ul = document.createElement("ul");
      ul.innerHTML = `
        <li>New item</li>
        <li>Edit me</li>
      `;
      ul.contentEditable = "true";
  
      newNote.appendChild(title);
      newNote.appendChild(ul);
  
      grid.insertBefore(newNote, addNote);
  
      currentEditable = newNote;
      newNoteCount++;     // <-- count new notes
    });
  
    return grid;
  }
  