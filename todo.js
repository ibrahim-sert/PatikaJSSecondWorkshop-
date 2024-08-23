document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const toastEl = document.getElementById('liveToast');

    loadTodos();

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            showToast('Boş bir yapılacak eklenemez!');
            return;
        }

        const todoItem = document.createElement('li');
        todoItem.className = 'list-group-item';

        const itemIndex = todoList.childElementCount + 1;
        todoItem.style.backgroundColor = (itemIndex % 2 === 0) ? 'white' : '#f8f9fa';

        todoItem.innerHTML = `${todoText}<button class="close ml-auto">&times;</button>`;
        todoList.appendChild(todoItem);
        todoInput.value = '';

        saveTodos();
        showToast('Yapılacak eklendi!');
    }

    todoList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
            saveTodos();
            updateTodoBackgrounds();
        } else if (e.target.tagName === 'LI') {
            toggleCheckMark(e.target);
            saveTodos();
        }
    });

    function toggleCheckMark(todoItem) {
        const checkMark = todoItem.querySelector('.check-mark');
        if (checkMark) {
            checkMark.remove();
            todoItem.classList.remove('done');
        } else {
            const newCheckMark = document.createElement('span');
            newCheckMark.className = 'check-mark';
            newCheckMark.innerHTML = '&#10003;';
            todoItem.insertBefore(newCheckMark, todoItem.firstChild);
            todoItem.classList.add('done');
        }
    }

    function showToast(message) {
        const toastBody = toastEl.querySelector('.toast-body');
        toastBody.textContent = message;
        $(toastEl).toast({ delay: 3000 });
        $(toastEl).toast('show');
    }

    function saveTodos() {
        const todos = [];
        document.querySelectorAll('#todoList li').forEach(todo => {
            todos.push({
                text: todo.childNodes[0].nodeValue.trim(),
                done: todo.classList.contains('done')
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            const todos = JSON.parse(savedTodos);
            todos.forEach((todo, index) => {
                const todoItem = document.createElement('li');
                todoItem.className = 'list-group-item';
                if (todo.done) {
                    todoItem.classList.add('done');
                    const newCheckMark = document.createElement('span');
                    newCheckMark.className = 'check-mark';
                    newCheckMark.innerHTML = '&#10003;';
                    todoItem.appendChild(newCheckMark);
                }

                todoItem.style.backgroundColor = (index % 2 === 0) ? '#f8f9fa' : 'white';
                todoItem.innerHTML += `${todo.text}<button class="close ml-auto">&times;</button>`;
                todoList.appendChild(todoItem);
            });
        }
    }

    function updateTodoBackgrounds() {
        const todos = document.querySelectorAll('#todoList li');
        todos.forEach((todo, index) => {
            todo.style.backgroundColor = (index % 2 === 0) ? '#f8f9fa' : 'white';
        });
    }
});
