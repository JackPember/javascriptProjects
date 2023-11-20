import { projectList } from './page_load';

export function createProjectDiv(proj) {
    const side = document.querySelector("#side");
    const todoProj = document.createElement("div");
    todoProj.id = proj.title;
    const title = document.createElement("h2");
    title.textContent = proj.title;
    const desc = document.createElement("p");
    desc.textContent = proj.desc;
    const dueDate = document.createElement("p");
    dueDate.textContent = proj.dueDate.toLocaleDateString();
    const prio = document.createElement("p");
    prio.textContent = proj.priority;
    const todos = document.createElement("div");
    todos.id = `${proj.title}-todos`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Complete project";
    removeBtn.addEventListener("click", () => {
        projectList.splice(projectList.findIndex((obj) => obj.title === todoProj.id), 1);
        side.removeChild(todoProj);
    });
    todoProj.appendChild(title);
    todoProj.appendChild(desc);
    todoProj.appendChild(dueDate);
    todoProj.appendChild(prio);
    todoProj.appendChild(removeBtn);
    side.appendChild(todoProj);
}



