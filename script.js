const input = document.querySelector("#newTaskInput");
const addBtn = document.querySelector("#btn");
const list = document.querySelector("#list");


addBtn.addEventListener("click",() => {
    if(input.value != ""){
        const li = document.createElement("li");
        li.innerHTML += `<div class="taskRows">
                            <span class="editTask">${input.value}</span>
                            <div class="listBtns">
                                <label>
                                    Complete
                                    <input type="checkbox"/>
                                <button class="editBtn">Edit</button>
                                <button class="deleteBtn">Delete</button>
                            </div>
                        </div>`;    
        input.value = "";
        list.append(li);

        const deleteBtn = li.querySelector(".deleteBtn");

        deleteBtn.addEventListener("click",() =>{
            li.remove();
        
        })

        const editBtn = li.querySelector(".editBtn");
        const editTask = li.querySelector(".editTask");

        editBtn.addEventListener("click", () => {

            deleteBtn.style.display = "none";
            editBtn.style.display = "none";
            
            let oldText = li.childNodes[0].textContent;

            editTask.innerHTML = `<input class ="editInput" type="text" value="${oldText}"></input>`;
            const editInput = li.querySelector(".editInput");
            editInput.addEventListener("keydown", (e) => {
                if(e.key == "Enter") {
                    editTask.innerHTML = editInput.value;
                    deleteBtn.style.display = "inline";
                    editBtn.style.display = "inline";
                }
            })
        })
    }
})

