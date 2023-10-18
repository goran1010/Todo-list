import "./style.css";
import "./fonts/Autography.otf";
import "./fonts/Roboto-Regular.ttf";

import { format } from "date-fns";
import Project from "./scripts/project.js";

const allProjects = [];

const createNewProjectButton = document.querySelector(`header button`);
const newProjectNameInput = document.querySelector(`header input#project-name`);
let newProjectName = newProjectNameInput.value;
newProjectNameInput.addEventListener(`keyup`, () => {
  newProjectName = newProjectNameInput.value;
});

const newProjectDescriptionInput = document.querySelector(
  `header input#project-description`
);
let newProjectDescription = newProjectDescriptionInput.value;
newProjectDescriptionInput.addEventListener(`keyup`, () => {
  newProjectDescription = newProjectDescriptionInput.value;
});

createNewProjectButton.addEventListener(`click`, () => {
  let newProject = new Project(newProjectName, newProjectDescription);
  allProjects.push(newProject);
  console.log(allProjects);
});
