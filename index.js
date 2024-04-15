const h1 = document.getElementById('h1')
const add_btn = document.getElementById('add-btn')
const sub_btn = document.getElementById('sub-btn')

let count = 0

add_btn.onclick = function(){
    count++
    h1.innerText = ""+count
    localStorage.setItem('value',count)
}
sub_btn.onclick = function(){
    count--
    h1.innerText = ""+count
    localStorage.setItem('value',count)
}


let counter = localStorage.getItem('value')
count = counter
h1.innerText = count