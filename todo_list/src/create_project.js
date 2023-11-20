import { createProjectDiv } from "./sidebar";
import Project from "./todo_project";
import { projectList } from "./page_load";
import addRenderListeners from "./render_proj";
import clearMain from "./clear-main";


const setProjectButton = () => {
    const btn = document.querySelector("#new");
    btn.addEventListener("click", () => {
        clearMain();
        createProjectForm();
    });
}

const addProject = (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#desc").value;
    const due = document.querySelector("#due").value;
    const prio = document.querySelector("#prio").value;
    const proj = new Project(title, desc, new Date(due), prio);
    projectList.push(proj);
    createProjectDiv(proj);
    addRenderListeners();
    const projForm = document.querySelector("#new-proj");
    while (projForm.hasChildNodes()) {
        projForm.removeChild(projForm.lastChild);
    }
    const side = document.querySelector("#side");
    side.removeChild(projForm);
}

const createProjectForm = () => {
    const projDiv = document.createElement("div");
    projDiv.id = "new-proj";
    const projectForm = document.createElement("form");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    const descLabel = document.createElement("label");
    descLabel.textContent = "Description: ";
    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.id = "desc";
    const dueLabel = document.createElement("label");
    dueLabel.textContent = "Due Date: ";
    const dueInput = document.createElement("input");
    dueInput.type = "date";
    dueInput.id = "due";
    const prioLabel = document.createElement("label");
    prioLabel.textContent = "Priority(low, med, high): ";
    const prioInput = document.createElement("input");
    prioInput.type = "text";
    prioInput.id = "prio";
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.addEventListener("click", addProject);

    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(descLabel);
    projectForm.appendChild(descInput);
    projectForm.appendChild(dueLabel);
    projectForm.appendChild(dueInput);
    projectForm.appendChild(prioLabel);
    projectForm.appendChild(prioInput);
    projectForm.appendChild(submit);
    projDiv.appendChild(projectForm);
    const side = document.querySelector("#side");
    side.appendChild(projDiv);
}

export default setProjectButton;