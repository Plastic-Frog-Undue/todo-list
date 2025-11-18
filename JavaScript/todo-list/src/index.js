import './style.css';

import { createTasksSection } from "./components/tasks.js";
import { createListsSection } from "./components/lists.js";
import { createTagsSection } from "./components/tags.js";
import { createFooterSection } from "./components/footer.js";

const sidebar = document.querySelector(".sidebar");

sidebar.appendChild(createTasksSection());
sidebar.appendChild(createListsSection());
sidebar.appendChild(createTagsSection());
sidebar.appendChild(createFooterSection());


import { createMainContent } from "./main/mainContent.js";

const mainContent = document.querySelector(".main-content");

mainContent.appendChild(createMainContent());








