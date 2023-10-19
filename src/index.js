import "./style.css";
import "./fonts/Autography.otf";
import "./fonts/Roboto-Regular.ttf";

import { format } from "date-fns";
import Project from "./scripts/project";
import updateCurrentProjectDisplay from "./scripts/updateCurrentProjectDisplay";
import updateAllProjectsDisplay from "./scripts/updateAllProjectsDisplay";

const allProjects = [];
let projectID;

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
  if (projectID === undefined) {
    projectID = 0;
  } else {
    projectID++;
  }
  let newProject = new Project(
    newProjectName,
    newProjectDescription,
    projectID
  );
  allProjects.push(newProject);
  updateCurrentProjectDisplay(allProjects[allProjects.length - 1], allProjects);
  updateAllProjectsDisplay(allProjects);
  newProjectNameInput.value = "";
  newProjectDescriptionInput.value = "";
});
