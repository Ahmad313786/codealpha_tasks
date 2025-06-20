const addBtn = document.getElementById("addBtn")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

addBtn.addEventListener("click", () => {
    const task = taskInput.value.trim()
    if (task) {
        const li = document.createElement("li")
        li.innerHTML = `
        <input type="checkbox"/>
        <span>${task}</span>
        <button class="edit">edit<button>
        <button class="delete">X<button>
        `
        taskList.appendChild(li);
        taskInput.value = ""
    }
})


taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }

    if (e.target.classList.contains('edit')) {
        const span = e.target.previousElementSibling 
        const currentText = span.textContent ;
        const newText = prompt("Edit task", currentText)
        if (newText !== null) {
            span.textContent = newText
        }
    }
})