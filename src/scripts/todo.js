export default class Todo {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.dateCreated = new Date();
  }
}
