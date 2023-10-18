import Todo from "./todo.js";

export default class Project {
  constructor(newProjectName, newProjectDescription) {
    this.projectName = newProjectName;
    this.projectDescription = newProjectDescription;
    this.projectDateCreated = new Date();
    this.allTodos = [];
  }
  createNewTodo(name, description) {
    let newTodo = new Todo(name, description);
    this.allTodos.push(newTodo);
  }
}
