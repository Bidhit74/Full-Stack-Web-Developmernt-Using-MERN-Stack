// Variable declarations
const input = document.querySelector("#input-list");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

// Try to load existing todos from localStorage
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Function
const saveTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

// create a dom node for a todo object and apped it to the todo list
const createTodoElement = (todo, index) => {
    const li = document.createElement("li");

    // check to toggle the completed status of the todo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!todo.completed;

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        // visually feedback : strikethrough the text if completed
        if (todo.completed) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
        // Save the updated todos to localStorage
        saveTodo();
    });

    // Text of the todo
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;

    textSpan.style.margin = "0 10px";
    //Add dubble-click event listerner to edit todo
    textSpan.addEventListener("dblclick", () => {
        const newText = prompt("Edit todo ", todo.text);
        if (newText !== null) {
            todo.text = newText.trim();
            textSpan.textContent = todo.text;
            saveTodo();
        }
    });

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => {
        if (checkbox.checked) {
            todos.splice(index, 1); // single element remove in current todo
            renderTodoList();
            saveTodo();
        }
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);
    return li;
};

// Function to render the todo list from the todos array

const renderTodoList = () => {
    // Clear the existing list
    todoList.innerHTML = "";
    // Loop through the todos array and create elements for each todo
    todos.forEach((todo, index) => {
        const node = createTodoElement(todo, index);
        todoList.appendChild(node);
    });
};

// Add Todo
function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    // Push a new todo object
    todos.push({ text, completed: false });
    input.value = "";
    renderTodoList();
    saveTodo();
}

addBtn.addEventListener("click", addTodo);
renderTodoList();
console.log(todos);
