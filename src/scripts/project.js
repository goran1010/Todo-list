import Todo from "./todo.js";

export default class Project {
  constructor(newProjectName, newProjectDescription) {
    this.projectName = newProjectName;
    this.projectDescription = newProjectDescription;
    this.projectDateCreated = new Date();
    this.allTodos = [];
  }
  createNewTodo(name) {
    let newTodo = new Todo(this.projectName, name);
    this.allTodos.push(newTodo);
  }
}
