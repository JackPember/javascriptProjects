import renderTodos from "./render_todos";
import Todo from "./todo_item";
import clearMain from "./clear-main";

const createNewTodo = (proj) => {
        createTodoForm(proj);
}

const addTodo = (proj) => {
    const title = document.querySelector("#todo-title").value;
    const desc = document.querySelector("#todo-desc").value;
    const due = document.querySelector("#todo-due").value;
    const prio = document.querySelector("#todo-prio").value;
    const todo = new Todo(title, desc, new Date(due), prio);
    proj.addTodo(todo);
    clearMain();
    renderTodos(proj);
}

const createTodoForm = (proj) => {
    const todoDiv = document.createElement("div");
    todoDiv.id = "new-todo";
    const todoForm = document.createElement("form");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "todo-title";
    const descLabel = document.createElement("label");
    descLabel.textContent = "Description: ";
    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.id = "todo-desc";
    const dueLabel = document.createElement("label");
    dueLabel.textContent = "Due Date: ";
    const dueInput = document.createElement("input");
    dueInput.type = "date";
    dueInput.id = "todo-due";
    const prioLabel = document.createElement("label");
    prioLabel.textContent = "Priority(low, med, high): ";
    const prioInput = document.createElement("input");
    prioInput.type = "text";
    prioInput.id = "todo-prio";
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.addEventListener("click", () => {
        addTodo(proj);
    });

    todoForm.appendChild(titleLabel);
    todoForm.appendChild(titleInput);
    todoForm.appendChild(descLabel);
    todoForm.appendChild(descInput);
    todoForm.appendChild(dueLabel);
    todoForm.appendChild(dueInput);
    todoForm.appendChild(prioLabel);
    todoForm.appendChild(prioInput);
    todoForm.appendChild(submit);
    todoDiv.appendChild(todoForm);
    const main = document.querySelector("#main");
    main.appendChild(todoDiv);
}

export default createNewTodo;