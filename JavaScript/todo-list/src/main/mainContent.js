export function createMainContent() {
    const grid = document.createElement("div");
    grid.classList.add("notes-grid");
    document.body.appendChild(grid);
  
    // --- LOCAL STORAGE HELPER ---
    function saveNotes() {
      const allNotes = Array.from(grid.querySelectorAll(".note:not(.add-note)")).map(note => {
        const title = note.querySelector("h3").textContent;
        const items = Array.from(note.querySelectorAll("ul li")).map(li => li.textContent);
        const color = note.dataset.color;
        return { title, items, color };
      });
      localStorage.setItem("notes", JSON.stringify(allNotes));
    }
  
    let currentEditable = null;
    let newNoteCount = 0;
    const NEW_NOTE_LIMIT = 7;
  
    function lockNote(note) {
      const editables = note.querySelectorAll("[contenteditable='true']");
      editables.forEach(el => el.contentEditable = "false");
    }
  
    // --- ADD NOTE BUTTON ---
    const addNote = document.createElement("div");
    addNote.classList.add("note", "add-note");
    addNote.innerHTML = "<span>+</span>";
    grid.appendChild(addNote);
  
    // --- DELETE NOTE ---
    grid.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const note = event.target.closest(".note");
        if (!note) return;
  
        if (note.classList.contains("new-note")) newNoteCount--;
        if (note === currentEditable) currentEditable = null;
  
        note.remove();
        saveNotes();
      }
    });
  
    // --- ADD NEW NOTE ---
    addNote.addEventListener("click", () => {
      if (newNoteCount >= NEW_NOTE_LIMIT) {
        console.log(`Limit reached: Only ${NEW_NOTE_LIMIT} new notes allowed.`);
        return;
      }
  
      if (currentEditable) {
        lockNote(currentEditable);
        currentEditable = null;
      }
  
      const newNote = document.createElement("div");
      newNote.classList.add("note", "new-note");
  
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
  
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";
  
      newNote.appendChild(title);
      newNote.appendChild(ul);
      newNote.appendChild(deleteBtn);
  
      grid.insertBefore(newNote, addNote);
      currentEditable = newNote;
      newNoteCount++;
  
      saveNotes();
    });
  
    // --- SAVE ON EDIT ---
    grid.addEventListener("blur", (event) => {
      if (event.target.closest(".note")) {
        saveNotes();
      }
    }, true);
  
    return grid;
  }
  