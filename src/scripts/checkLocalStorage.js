import Todo from "./todo";
import updateCurrentProjectDisplay from "./updateCurrentProjectDisplay";
import updateAllProjectsDisplay from "./updateAllProjectsDisplay";
import createDefaultProject from "./createDefaultProject";
import Project from "./project";

export default function (allProjects) {
  if (
    localStorage.getItem("allProjects") &&
    JSON.parse(localStorage.getItem("allProjects")).length != 0
  ) {
    allProjects = JSON.parse(localStorage.getItem("allProjects"));
    for (let i = 0; i < allProjects.length; i++) {
      let todos = allProjects[i].allTodos;
      let projectDateCreated = allProjects[i].projectDateCreated;
      allProjects[i] = new Project(
        allProjects[i].projectName,
        allProjects[i].projectDescription
      );
      allProjects[i].allTodos = todos;
      allProjects[i].isViewed = false;
      allProjects[i].projectDateCreated = projectDateCreated;
    }
    updateAllProjectsDisplay(allProjects);
    updateCurrentProjectDisplay(allProjects);
    return allProjects;
  }
  createDefaultProject(allProjects);
  return allProjects;
}
