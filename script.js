const input = document.querySelector("#newTaskInput");
const addBtn = document.querySelector("#btn");
const list = document.querySelector("#list");


addBtn.addEventListener("click",() => {
    const li = document.createElement("li");
    li.innerHTML += `${input.value}<button id="deleteBtn">Delete</button>`;    
    input.value = "";
    list.append(li);
    
    const deleteBtn = li.querySelector("button");

    deleteBtn.addEventListener("click",() =>{
        li.remove();
    
    })
})

