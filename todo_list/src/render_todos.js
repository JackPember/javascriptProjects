import createNewTodo from "./new-todo";

const renderTodos = (proj) => {
    const main = document.querySelector("#main");
    main.textContent = "Todos:"
    if (proj === undefined) { return; }
    const todos = proj.todos;
    console.log(todos);
    if (todos !== undefined) {
        for (const todo of todos) {
            const todoDiv = document.createElement("div");
            todoDiv.id = `${todo.title}`;
            const todoTitle = document.createElement("h3");
            todoTitle.textContent = todo.title;
            const todoDesc = document.createElement("p");
            todoDesc.textContent = todo.desc;
            const todoDate = document.createElement("p");
            todoDate.textContent = todo.dueDate.toLocaleDateString();
            const todoPrio = document.createElement("p");
            todoPrio.textContent = todo.priority;
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Complete Task";
            completeBtn.addEventListener("click", () => {
                console.log(todos);
                todos.splice(todos.findIndex((obj) => obj.title === todoDiv.id), 1);
                main.removeChild(todoDiv);
                console.log(todos);
            });
            todoDiv.appendChild(todoTitle);
            todoDiv.appendChild(todoDesc);
            todoDiv.appendChild(todoDate);
            todoDiv.appendChild(todoPrio);
            todoDiv.appendChild(completeBtn);
            main.appendChild(todoDiv);
        }
    }
    const addTodoBtn = document.createElement("button");
    addTodoBtn.id = "add";
    addTodoBtn.textContent = "Add new todo";
    addTodoBtn.addEventListener("click", () => {
        createNewTodo(proj);
    });
    main.appendChild(addTodoBtn);
}

export default renderTodos;