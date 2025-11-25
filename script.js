// Seleção dos elementos
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const clearCompleted = document.getElementById("clear-completed");
const clearAll = document.getElementById("clear-all");
const message = document.getElementById("message");

// Inicializar tarefas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Função para mostrar mensagem temporária
function showTemporaryMessage(text, duration = 1500) { // 1,5 segundos
  message.textContent = text;
  message.classList.remove("hide");

  setTimeout(() => {
    message.classList.add("hide");
    message.textContent = "";
  }, duration);
}

// Função para salvar no localStorage e renderizar
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Renderizar tarefas
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = task.text;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.done ? "Desmarcar" : "Concluir";
    toggleBtn.addEventListener("click", () => {
      task.done = !task.done;
      saveAndRender();
      if (task.done) {
        showTemporaryMessage("Tarefa concluída!");
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveAndRender();
    });

    li.appendChild(span);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// Adicionar nova tarefa
form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const task = { id: Date.now(), text, done: false };
  tasks.push(task);
  input.value = "";
  saveAndRender();
});

// Limpar concluídas
clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.done);
  saveAndRender();
});

// Limpar todas
clearAll.addEventListener("click", () => {
  tasks = [];
  saveAndRender();
});

// Render inicial
renderTasks();
