import Todo from "./todo.js";

export default class Project {
  constructor(newProjectName, newProjectDescription) {
    this.name = newProjectName;
    this.description = newProjectDescription;
    this.dateCreated = new Date();
  }
  createNewTodo() {}
}
