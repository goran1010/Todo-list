import "./style.css";
import "./fonts/Autography.otf";
import "./fonts/Roboto-Regular.ttf";

import Todo from "./scripts/todo";
import Project from "./scripts/project";
import updateCurrentProjectDisplay from "./scripts/updateCurrentProjectDisplay";
import updateAllProjectsDisplay from "./scripts/updateAllProjectsDisplay";
import createDefaultProject from "./scripts/createDefaultProject";

let allProjects = [];

if (
  localStorage.getItem("allProjects") &&
  JSON.parse(localStorage.getItem("allProjects")).length != 0
) {
  allProjects = JSON.parse(localStorage.getItem("allProjects"));
  allProjects.forEach((project) => {
    // project.createNewTodo = function (name, description) {
    //   let newTodo = new Todo(name, description);
    //   this.allTodos.push(newTodo);
    // };
    project = new Project(project.projectName, project.projectDescription);
  });
  updateAllProjectsDisplay(allProjects);
  updateCurrentProjectDisplay(allProjects);
} else {
  console.log("create Default Project");
  createDefaultProject(allProjects);
}

const createNewProjectButton = document.querySelector(`header button`);
const newProjectNameInput = document.querySelector(`header input#project-name`);
let newProjectName = newProjectNameInput.value;
newProjectNameInput.addEventListener(`keyup`, () => {
  newProjectName = newProjectNameInput.value;
});

const newProjectDescriptionInput = document.querySelector(
  `header textarea#project-description`
);
let newProjectDescription = newProjectDescriptionInput.value;
newProjectDescriptionInput.addEventListener(`keyup`, () => {
  newProjectDescription = newProjectDescriptionInput.value;
});

createNewProjectButton.addEventListener(`click`, () => {
  let newProject = new Project(newProjectName, newProjectDescription);

  allProjects.forEach((project) => (project.isViewed = false));
  allProjects.push(newProject);

  localStorage.setItem("allProjects", JSON.stringify(allProjects));

  updateCurrentProjectDisplay(allProjects);
  updateAllProjectsDisplay(allProjects);
  newProjectNameInput.value = "";
  newProjectDescriptionInput.value = "";
});
