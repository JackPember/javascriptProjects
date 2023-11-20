import { projectList } from "./page_load";
import renderTodos from "./render_todos";
import clearMain from "./clear-main";

const addRenderListeners = () => {
    const side = document.querySelector("#side");
    if (side.hasChildNodes()) {
        const children = side.childNodes;
        for (const node of children){
            node.addEventListener("click", () => {
                clearMain();
                const currentProj = projectList[projectList.findIndex((obj) => obj.title === node.id)];
                renderTodos(currentProj);
            })
        }
    }
    }

export default addRenderListeners;