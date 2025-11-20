export function createMainContent() {
    const grid = document.createElement("div");
    grid.classList.add("notes-grid");
  
    const notes = [
      {
        color: "yellow",
        title: "Shopping List",
        items: ["Milk", "Bread", "Eggs", "Butter"]
      },
      {
        color: "blue",
        title: "To Do",
        items: ["Finish report", "Email clients", "Team meeting", "Plan next sprint"]
      },
      {
        color: "pink",
        title: "Reminders",
        items: ["Pay bills", "Doctor appointment", "Call mom", "Buy birthday gift"]
      },
      {
        color: "orange",
        title: "Ideas",
        items: ["New app concept", "Marketing strategy", "Workshop topics", "Content plan"]
      }
    ];
  
    // Create existing note cards
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
  
    // Create + button
    const addNote = document.createElement("div");
    addNote.classList.add("note", "add-note");
    addNote.innerHTML = "<span>+</span>";
    grid.appendChild(addNote);
  
    // Counter for new notes
    let newNoteCount = 0;
    const NEW_NOTE_LIMIT = 3;
  
    addNote.addEventListener("click", () => {
      if (newNoteCount >= NEW_NOTE_LIMIT) {
        console.log("Limit reached: Only 3 new todo notes allowed.");
        return;
      }
  
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
        <li>Edit me</li>
        <li>Add more...</li>
      `;
      ul.contentEditable = "true";
  
      newNote.appendChild(title);
      newNote.appendChild(ul);
  
      grid.insertBefore(newNote, addNote);
  
      newNoteCount++;
    });
  
    return grid;
  }
  
  