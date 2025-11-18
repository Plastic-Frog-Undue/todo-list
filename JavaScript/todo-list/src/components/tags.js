export function createTagsSection() {
    const section = document.createElement("div");
    section.classList.add("sidebar-section", "tags");
  
    const title = document.createElement("h4");
    title.textContent = "Tags";
  
    const tagContainer = document.createElement("div");
    tagContainer.classList.add("tags");
  
    const tags = [
      { text: "Tag 1", color: "tag-blue" },
      { text: "Tag 2", color: "tag-pink" },
      { text: "+ Add Tag", color: "tag-add" }
    ];
  
    tags.forEach(tag => {
      const span = document.createElement("span");
      span.classList.add("tag", tag.color);
      span.textContent = tag.text;
      tagContainer.appendChild(span);
    });
  
    section.appendChild(title);
    section.appendChild(tagContainer);
  
    return section;
  }
  