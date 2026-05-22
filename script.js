const input = document.querySelector("#newTaskInput");
const addBtn = document.querySelector("#btn");
const list = document.querySelector("#list");

const addNewTask = () => {
    if(input.value != ""){
        const li = document.createElement("li");
        li.innerHTML += `<div class="taskRows">
                            <span class="editTask">${input.value}</span>
                        </div>
                        <div class="listBtns">

                            <button class="completeBtn">Complete</button>
                            <button class="editBtn">Edit</button>
                            <button class="deleteBtn">Delete</button>
                        </div>`;    
        input.value = "";
        list.append(li);

        const deleteBtn = li.querySelector(".deleteBtn");

        deleteBtn.addEventListener("click",() =>{
            li.remove();
        
        })

        const completeBtn = li.querySelector(".completeBtn")
        const editBtn = li.querySelector(".editBtn");
        const editTask = li.querySelector(".editTask");

        editBtn.addEventListener("click", () => {

            deleteBtn.style.display = "none";
            editBtn.style.display = "none";
            completeBtn.style.display = "none"

            let oldText = editTask.textContent;

            editTask.innerHTML = `<input class ="editInput" type="text" value="${oldText}"></input>`;
            const editInput = li.querySelector(".editInput");
            editInput.addEventListener("keydown", (e) => {
                if(e.key == "Enter") {
                    editTask.innerHTML = editInput.value;
                    deleteBtn.style.display = "inline";
                    editBtn.style.display = "inline";
                    completeBtn.style.display = "inline"
                    
                }
            })
        })
        
        completeBtn.addEventListener("click", () => {
            li.style.backgroundColor = "green";
            editTask.style.textDecoration = "line-through";
            editTask.style.opacity = "0.6";
            completeBtn.remove();
            editBtn.remove();
        })
    }
}

addBtn.addEventListener("click",addNewTask);
input.addEventListener(
"keydown",
(e) => {

    if(e.key === "Enter") {
        addNewTask();
    }

});


