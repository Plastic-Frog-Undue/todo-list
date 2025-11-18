export function createFooterSection() {
    const footer = document.createElement("div");
    footer.classList.add("sidebar-footer");
  
    footer.innerHTML = `
      <p>⚙️ Settings</p>
      <p>🚪 Sign Out</p>
    `;
  
    return footer;
  }
  