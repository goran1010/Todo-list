export default class Todo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.dateCreated = new Date();
  }
}
