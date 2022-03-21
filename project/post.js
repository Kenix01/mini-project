let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);
let postContainer = document.getElementsByClassName(`post`)[0]
postContainer.innerText = JSON.stringify(post)

let comments = document.getElementsByClassName('comment')[0]
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let valueBlock = document.createElement('div')
            valueBlock.classList.add('valueBlock')
            valueBlock.innerText = valueElement.body;
            comments.appendChild(valueBlock)
        }
    })
