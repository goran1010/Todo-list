import Project from "./project";
import updateAllProjectsDisplay from "./updateAllProjectsDisplay";
import updateCurrentProjectDisplay from "./updateCurrentProjectDisplay";

export default function createDefaultProject(allProjects) {
  let newProject = new Project(
    "Default Name",
    "Description for the Default Project"
  );
  allProjects.forEach((project) => (project.isViewed = false));
  allProjects.push(newProject);
  updateCurrentProjectDisplay(allProjects);
  updateAllProjectsDisplay(allProjects);
}
