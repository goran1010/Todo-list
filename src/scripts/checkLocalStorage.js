import createDefaultProject from "./createDefaultProject";

export default function (allProjects) {
  if (
    localStorage.getItem("allProjects") &&
    JSON.parse(localStorage.getItem("allProjects")).length != 0
  ) {
    allProjects = JSON.parse(localStorage.getItem("allProjects"));
    allProjects.forEach((project) => {
      project.createNewTodo = function (name, description) {
        let newTodo = new Todo(name, description);
        this.allTodos.push(newTodo);
      };
    });
    updateAllProjectsDisplay(allProjects);
    updateCurrentProjectDisplay(allProjects);
  } else {
    console.log("create Default Project");
    createDefaultProject(allProjects);
  }
}
