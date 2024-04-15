
let posts = [];

function getPost(){
    fetch('https://jsonplaceholder.org/posts')
    .then(result => result.json())
    .then(data => {
        posts = data;
        document.getElementById('container').innerText = posts.length
    })
}
getPost()
