export default function updateProjectDisplay(
  newProjectName,
  newProjectDescription,
  dateCreated,
  newProject
) {
  const newTodoNameInput = document.createElement(`input`);

  const createNewTodoButton = document.createElement(`button`);
  createNewTodoButton.addEventListener(`click`, () => {
    newProject.createNewTodo(newTodoNameInput.value);
  });

  const projectOnScreen = document.createElement(`div`);
  projectOnScreen.textContent = `${newProjectName} ${newProjectDescription} ${dateCreated}`;
  document.querySelector(`.cards`).appendChild(projectOnScreen);
}
