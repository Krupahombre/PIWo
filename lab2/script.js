const addNewToDoElement = () => {
    const li = document.createElement("li");
    const pForUserInput = document.createElement("p");
    const userInput = document.createTextNode(document.getElementById("todoInput").value);

    pForUserInput.append(userInput)
    li.appendChild(pForUserInput);

    li.className = "list-group-item";

    li.onclick = () => {
        pForUserInput.classList.toggle("line-through");
        const bool = li.classList.toggle("todo-done");

        if(bool) {
            const p = document.createElement("p");

            let d = new Date();

            let date = d.toLocaleString();

            p.append(date);
            li.appendChild(p);
        }
        else {
            li.innerHTML = "";
            pForUserInput.innerHTML = "";
            pForUserInput.append(userInput)
            li.append(pForUserInput);
        }
    }

    document.getElementById("todoList").append(li);
}