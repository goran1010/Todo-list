import "./style.css";
import "./fonts/Autography.otf";
import "./fonts/Roboto-Regular.ttf";

import Project from "./scripts/project";
import updateCurrentProjectDisplay from "./scripts/updateCurrentProjectDisplay";
import updateAllProjectsDisplay from "./scripts/updateAllProjectsDisplay";
import checkLocalStorage from "./scripts/checkLocalStorage";

let allProjects = [];

allProjects = checkLocalStorage(allProjects);
console.log(allProjects);

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
