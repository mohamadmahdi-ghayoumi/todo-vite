export const validateInputs = () => {
  const taskInput = document.getElementById('task-input');

  const dateInput = document.getElementById('date-input');
  if (taskInput.value === '' || dateInput.value === '') {
    alert('Please enter the inputs');
    taskInput.classList.add('border-red-700');
    dateInput.classList.add('border-red-700');
    return false;
  }
  return true;
};
