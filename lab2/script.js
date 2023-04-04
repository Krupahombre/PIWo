"use strict";

let deletedDiv = null;

const addNewToDoElement = () => {
    const userInput = document.createTextNode(document.getElementById("todoInput").value);

    if(userInput.textContent === "") {
        alert("Please enter a task!");
        return;
    }

    const div = document.createElement("div");
    const divTask = document.createElement("div");
    const divButton = document.createElement("div");
    const pForUserInput = document.createElement("p");
    const deleteButton = document.createElement("button");

    // clear input field
    const inputField = document.getElementById("todoInput");
    inputField.value = "";

    deleteButton.className = "btn btn-danger btn-sm float-right";
    deleteButton.innerHTML = "X";

    deleteButton.onclick = (e) => removeToDoElement(e, div);

    divButton.append(deleteButton);

    pForUserInput.append(userInput);
    divTask.style = "max-width: 95%";
    divTask.append(pForUserInput);

    div.appendChild(divTask);
    div.appendChild(divButton);

    div.className = "list-group-item";
    div.style = "border-radius: 0.75rem; display: block;";

    div.onclick = () => {
            pForUserInput.classList.toggle("line-through");
            const bool = div.classList.toggle("todo-done");
    
            if(bool) {
                const p = document.createElement("p");
    
                let d = new Date();
    
                let date = d.toLocaleString();
    
                p.append(date);
                divTask.appendChild(p);
            }
            else {
                div.innerHTML = "";
                divTask.innerHTML = "";
                pForUserInput.innerHTML = "";
                pForUserInput.append(userInput);
                divTask.append(pForUserInput);
                divButton.append(deleteButton);
                div.appendChild(divTask);
                div.appendChild(divButton);
            }
        }

    document.getElementById("todoList").append(div);
}

const closeDialog = () => $('#dialog').hide();

const removeToDoElement = (e, div) => {
    e.stopPropagation();
    $('#submit-button').off('click').click(() => {
        deletedDiv = div;
        $(div).remove();
        closeDialog();
    });
    $('dialog').show();
}

$(document).keydown((e) => {
    if(e.ctrlKey && e.key === "z") {
        if(deletedDiv !== null) {
            $("#todoList").append(deletedDiv);
            deletedDiv = null;
        }
    }
});