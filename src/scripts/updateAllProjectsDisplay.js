import updateCurrentProjectDisplay from "./updateCurrentProjectDisplay";

export default function updateAllProjectsDisplay(allProjects) {
  while (document.querySelector(`.aside-projects`).firstChild) {
    document
      .querySelector(`.aside-projects`)
      .removeChild(document.querySelector(`.aside-projects`).firstChild);
  }

  allProjects.forEach((project, index) => {
    const projectCard = document.createElement(`div`);
    const projectName = document.createElement(`h1`);
    const projectDescription = document.createElement(`p`);
    const deleteProjectButton = document.createElement(`div`);
    const showProjectID = document.createElement(`div`);

    deleteProjectButton.textContent = "x";
    deleteProjectButton.addEventListener(`click`, (event) => {
      event.stopPropagation();
      allProjects.splice(index, 1);
      updateAllProjectsDisplay(allProjects);
      if (allProjects.length === 0) {
        updateCurrentProjectDisplay(null, allProjects);
      }
    });

    projectName.textContent = project.projectName;
    projectDescription.textContent = project.projectDescription;
    showProjectID.textContent = project.projectID;

    projectCard.appendChild(deleteProjectButton);
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(showProjectID);

    projectCard.addEventListener(`click`, () => {
      updateCurrentProjectDisplay(project, allProjects);
    });
    document.querySelector(`.aside-projects`).appendChild(projectCard);
  });
}
