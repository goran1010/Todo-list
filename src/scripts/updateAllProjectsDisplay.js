import { format } from "date-fns";
import updateCurrentProjectDisplay from "./updateCurrentProjectDisplay";

export default function updateAllProjectsDisplay(allProjects) {
  while (document.querySelector(`.aside-projects`).firstChild) {
    document
      .querySelector(`.aside-projects`)
      .removeChild(document.querySelector(`.aside-projects`).firstChild);
  }

  allProjects.forEach((project, index) => {
    const projectCard = document.createElement(`div`);
    const projectName = document.createElement(`h3`);
    const projectDescription = document.createElement(`p`);
    const deleteProjectButton = document.createElement(`div`);
    const projectDateCreated = document.createElement(`div`);

    if (project.isViewed) {
      projectCard.classList.add("viewing");
    }

    deleteProjectButton.textContent = "DELETE";
    deleteProjectButton.classList.add("delete-project");
    deleteProjectButton.addEventListener(`click`, (event) => {
      event.stopPropagation();
      allProjects.splice(index, 1);
      localStorage.setItem("allProjects", JSON.stringify(allProjects));
      updateAllProjectsDisplay(allProjects);

      updateCurrentProjectDisplay(allProjects);
    });

    projectName.textContent = project.projectName;
    projectDescription.textContent = project.projectDescription;
    projectDateCreated.textContent = `${project.projectDateCreated}`;

    projectCard.classList.add("project-card");
    projectCard.appendChild(deleteProjectButton);
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectDateCreated);

    projectCard.addEventListener(`click`, () => {
      allProjects.forEach((project) => {
        project.isViewed = false;
      });
      project.isViewed = true;
      updateAllProjectsDisplay(allProjects);
      updateCurrentProjectDisplay(allProjects);
    });
    document.querySelector(`.aside-projects`).appendChild(projectCard);
  });
}
