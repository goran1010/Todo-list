import Todo from "./todo.js";

export default class Project {
  constructor(newProjectName, newProjectDescription, projectID) {
    this.projectName = newProjectName;
    this.projectDescription = newProjectDescription;
    this.projectDateCreated = new Date();
    this.allTodos = [];
    this.projectID = projectID;
    this.isViewed = true;
  }
  createNewTodo(name, description) {
    let newTodo = new Todo(name, description);
    this.allTodos.push(newTodo);
  }
}
