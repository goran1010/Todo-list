export default class Todo {
  constructor(projectName, name, description, dueDate, priority) {
    this.projectName = projectName;
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.dateCreated = new Date();
  }
}
