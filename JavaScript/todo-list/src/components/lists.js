export function createListsSection() {
    const section = document.createElement("div");
    section.classList.add("sidebar-section", "lists");
  
    const title = document.createElement("h4");
    title.textContent = "Lists";
  
    const list = document.createElement("ul");
    const items = ["❤️ Favorites", "🎯 Personal", "🏠 Home", "📌 List"];
  
    items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<i>${item.split(" ")[0]}</i> ${item.split(" ").slice(1).join(" ")}`;
      list.appendChild(li);
    });
  
    section.appendChild(title);
    section.appendChild(list);
  
    return section;
  }
  