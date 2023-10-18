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

    deleteProjectButton.textContent = "x";
    deleteProjectButton.addEventListener(`click`, () => {
      allProjects.splice(index, 1);
      updateAllProjectsDisplay(allProjects);
    });

    projectName.textContent = project.projectName;
    projectDescription.textContent = project.projectDescription;

    projectCard.appendChild(deleteProjectButton);
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);

    projectCard.addEventListener(`click`, () => {
      updateCurrentProjectDisplay(project);
    });
    document.querySelector(`.aside-projects`).appendChild(projectCard);
  });
}
