const addTaskBtn = document.getElementById('aggiungi-elemento');
const taskInput = document.getElementById('input-elemento');
const taskList = document.getElementById('lista-elementi');

addTaskBtn.addEventListener('click', () => {
   const taskText = taskInput.value.trim();

   if (taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Elimina';
      deleteBtn.addEventListener('click', () => {
         taskList.removeChild(listItem);
      });

      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);

      taskInput.value = '';
   }
});

taskList.addEventListener('click', (eVT) => {
   if (eVT.target.tagName === 'LI') {
      eVT.target.classList.toggle('completed');
   }
});
