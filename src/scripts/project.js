import Todo from "./todo.js";
import { format } from "date-fns";

export default class Project {
  constructor(newProjectName, newProjectDescription) {
    this.projectName = newProjectName;
    this.projectDescription = newProjectDescription;
    this.projectDateCreated = format(new Date(), "yyyy-MM-dd");
    this.allTodos = [];
    this.isViewed = true;
  }
  createNewTodo(name, description) {
    let newTodo = new Todo(name, description);
    this.allTodos.push(newTodo);
  }
}
