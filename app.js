const inputEl = document.querySelector("input");
const addBtn = document.querySelector(".add__btn");
const listTodo = document.querySelector(".list");
const btnClearAll = document.querySelector(".btn");

inputEl.addEventListener("keyup", function () {
    const textValue = inputEl.value;
    if (textValue.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
});
showTodo();
//add items
addBtn.addEventListener("click", function () {
    const getLocalstorage = localStorage.getItem("new-todo");
    const textValue = inputEl.value;

    if (getLocalstorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalstorage);
    }
    listArr.push(textValue);
    localStorage.setItem("new-todo", JSON.stringify(listArr));
    inputEl.value = "";
    inputEl.focus();
    showTodo();
});

//show todo
function showTodo() {
    const getLocalstorage = localStorage.getItem("new-todo");
    listArr = JSON.parse(getLocalstorage) || [];
    let liItem = "";
    listArr.forEach(function (el, index) {
        liItem += `<li class="list__item" >
        ${el}
        <span class="list__item-icon"
        >
        
            
            <i class="fa-solid fa-trash trash"  onclick="deleteItem(${index})"> </i
        ></span>
    </li>`;
    });
    listTodo.innerHTML = liItem;
    document.querySelector(
        ".btn__wrap span"
    ).textContent = `You have ${listArr.length} pending tasks`;
}

//deleteItem

function deleteItem(index) {
    const getLocalstorage = localStorage.getItem("new-todo");
    listArr = JSON.parse(getLocalstorage);
    listArr.splice(index, 1);
    localStorage.setItem("new-todo", JSON.stringify(listArr));
    showTodo();
}

btnClearAll.addEventListener("click", function () {
    listArr = [];
    localStorage.setItem("new-todo", JSON.stringify(listArr));
    showTodo();
});
