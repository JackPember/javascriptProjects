
class Project {

    #todos = [];
    
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    set title(t) {
        this._title = t;
    }
    
    get title () {
        return this._title;
    }
    
    set desc(newDesc) {
        this._desc = newDesc;
    }

    get desc () {
        return this._desc;
    }

    set dueDate(newD) {
        this._dueDate = newD;
    }

    get dueDate() {
        return this._dueDate;
    }

    set priority (p) {
        this._priority = p;
    }

    get priority () {
        return this._priority;
    }
    
    get todos() {
        return this.#todos;
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }

    removeTodo(todo) {
        this.#todos.splice(this.#todos.findIndex((item) => item.title === todo.title), 1); //ensures proper index of todo item to be removed.
    }

}

export default Project;