
const loadPage = () => {
    const container = document.createElement("div");
    container.id = "container";
    const sidebar = document.createElement("div");
    sidebar.id = "side";
    sidebar.textContent = "Projects: ";
    const main = document.createElement("div");
    main.id = "main";
    const newProjBtn = document.createElement("button");
    newProjBtn.id = "new";
    newProjBtn.textContent = "Create new project";
    sidebar.appendChild(newProjBtn)
    container.appendChild(sidebar);
    container.appendChild(main);
    document.body.appendChild(container);
}

export const projectList = [];

export default loadPage;