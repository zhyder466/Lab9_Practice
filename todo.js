
const con = document.getElementById('container')
const btn_add = document.getElementById('btn-add')
const btn_remove = document.getElementById('btn-remove')

let tasks = []

function add() {
    const con = document.getElementById('container')
    const child = document.createElement("child")
    const input = document.getElementById('input')
    child.textContent = input.value
    tasks.push(child.textContent)
    child.className = 'child'
    const delBtn = document.createElement("button")
    delBtn.innerText = "delete"
    child.appendChild(delBtn)
    delBtn.onclick = function () {
        child.remove();
    }
    localStorage.setItem('task',JSON.stringify(tasks))
    con.appendChild(child)
    
    input.value = ''
}


btn_add.onclick = add