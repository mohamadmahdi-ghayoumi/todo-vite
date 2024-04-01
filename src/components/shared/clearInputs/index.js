export const clearInputs = () => {
  const taskInput = document.getElementById('task-input');
  const descriptionInput = document.getElementById('description_input');
  const dateInput = document.getElementById('date-input');

  taskInput.value = '';
  descriptionInput.value = '';
  dateInput.value = '';
};
