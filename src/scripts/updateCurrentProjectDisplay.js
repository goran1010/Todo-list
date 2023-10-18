export default function updateCurrentProjectDisplay(currentProject) {
  const newTodoNameInput = document.createElement(`input`);
  const newTodoDescriptionInput = document.createElement(`input`);
  const projectOnScreen = document.createElement(`div`);

  const createNewTodoButton = document.createElement(`button`);
  createNewTodoButton.addEventListener(`click`, () => {
    // updateCurrentProjectDisplay(currentProject);
    currentProject.createNewTodo(
      newTodoNameInput.value,
      newTodoDescriptionInput.value
    );
    console.log(currentProject.allTodos);

    currentProject.allTodos.forEach((todo, index) => {
      const todoCard = document.createElement(`div`);
      const todoName = document.createElement(`div`);
      const todoDescription = document.createElement(`div`);

      todoName.textContent = `${todo.name}`;
      todoDescription.textContent = `${todo.description}`;

      const deleteTodoButton = document.createElement(`div`);
      deleteTodoButton.textContent = "x";
      deleteTodoButton.addEventListener(`click`, () => {
        currentProject.allTodos.splice(index, 1);
        updateCurrentProjectDisplay(currentProject);
      });

      todoCard.appendChild(todoName);
      todoCard.appendChild(todoDescription);
      todoCard.appendChild(deleteTodoButton);
      projectOnScreen.appendChild(todoCard);
    });
  });
  createNewTodoButton.textContent = `Create a New Todo`;

  if (document.querySelector(`.cards`).firstChild) {
    document
      .querySelector(`.cards`)
      .removeChild(document.querySelector(`.cards`).firstChild);
  }

  projectOnScreen.textContent = `
  ${currentProject.projectName},
  ${currentProject.projectDescription},
  ${currentProject.projectDateCreated}`;

  projectOnScreen.appendChild(newTodoNameInput);
  projectOnScreen.appendChild(newTodoDescriptionInput);
  projectOnScreen.appendChild(createNewTodoButton);
  document.querySelector(`.cards`).appendChild(projectOnScreen);
}
