export default function updateCurrentProjectDisplay(allProjects) {
  if (document.querySelector(`.content`).firstChild) {
    document
      .querySelector(`.content`)
      .removeChild(document.querySelector(`.content`).firstChild);
  }

  let currentProject = allProjects.find((project) => project.isViewed === true);
  if (!currentProject) {
    return;
  }

  const newTodoNameInput = document.createElement(`input`);
  const newTodoDescriptionInput = document.createElement(`input`);
  const cards = document.createElement(`div`);
  cards.classList.add(`cards`);

  const createNewTodoButton = document.createElement(`button`);
  createNewTodoButton.addEventListener(`click`, () => {
    currentProject.createNewTodo(
      newTodoNameInput.value,
      newTodoDescriptionInput.value
    );

    updateCurrentProjectDisplay(allProjects);
  });
  createNewTodoButton.textContent = `Create a New Todo`;

  cards.textContent = `
  ${currentProject.projectName},
  ${currentProject.projectDescription},
  ${currentProject.projectDateCreated}`;

  cards.appendChild(newTodoNameInput);
  cards.appendChild(newTodoDescriptionInput);
  cards.appendChild(createNewTodoButton);

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
      updateCurrentProjectDisplay(allProjects);
    });

    todoCard.appendChild(todoName);
    todoCard.appendChild(todoDescription);
    todoCard.appendChild(deleteTodoButton);
    cards.appendChild(todoCard);
  });

  document.querySelector(`.content`).appendChild(cards);
}
