export default function updateCurrentProjectDisplay(allProjects) {
  if (document.querySelector(`.content`).firstChild) {
    document
      .querySelector(`.content`)
      .removeChild(document.querySelector(`.content`).firstChild);
  }

  let currentProject = allProjects.find((project) => project.isViewed);
  if (!currentProject) {
    return;
  }

  const projectName = document.createElement(`h3`);
  const projectDescription = document.createElement(`p`);
  const projectDateCreated = document.createElement(`p`);
  projectName.textContent = `${currentProject.projectName}`;
  projectDescription.textContent = `${currentProject.projectDescription}`;
  projectDateCreated.textContent = `Date created: ${currentProject.projectDateCreated}`;

  const projectHeader = document.createElement(`div`);
  const projectBody = document.createElement(`div`);
  const newTodoNameInput = document.createElement(`input`);
  const newTodoNameLabel = document.createElement(`h4`);
  const newTodoDescriptionInput = document.createElement(`textarea`);
  newTodoDescriptionInput.setAttribute("rows", 3);
  const newTodoDescriptionLabel = document.createElement(`h4`);
  const cards = document.createElement(`div`);
  cards.classList.add(`cards`);
  projectHeader.classList.add(`project-header`);
  projectBody.classList.add(`project-body`);

  newTodoNameLabel.textContent = "Todo Name: ";
  newTodoDescriptionLabel.textContent = "Todo Description: ";

  const createNewTodoButton = document.createElement(`button`);
  createNewTodoButton.addEventListener(`click`, () => {
    currentProject.createNewTodo(
      newTodoNameInput.value,
      newTodoDescriptionInput.value
    );
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
    updateCurrentProjectDisplay(allProjects);
  });
  createNewTodoButton.textContent = `Create a New Todo`;

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(projectDescription);
  projectHeader.appendChild(projectDateCreated);

  projectHeader.appendChild(newTodoNameLabel);
  projectHeader.appendChild(newTodoNameInput);
  projectHeader.appendChild(newTodoDescriptionLabel);
  projectHeader.appendChild(newTodoDescriptionInput);
  projectHeader.appendChild(createNewTodoButton);
  cards.appendChild(projectHeader);

  currentProject.allTodos.forEach((todo, index) => {
    const todoCard = document.createElement(`div`);
    todoCard.classList.add(`todo-card`);
    const todoName = document.createElement(`h4`);
    const todoDescription = document.createElement(`p`);

    todoName.textContent = `${todo.name}`;
    todoDescription.textContent = `${todo.description}`;

    const deleteTodoButton = document.createElement(`div`);
    deleteTodoButton.textContent = "DELETE";
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.addEventListener(`click`, () => {
      currentProject.allTodos.splice(index, 1);
      localStorage.setItem("allProjects", JSON.stringify(allProjects));
      updateCurrentProjectDisplay(allProjects);
    });

    todoCard.appendChild(deleteTodoButton);
    todoCard.appendChild(todoName);
    todoCard.appendChild(todoDescription);

    projectBody.appendChild(todoCard);
  });
  cards.appendChild(projectBody);
  document.querySelector(`.content`).appendChild(cards);
}
