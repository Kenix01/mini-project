let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userDetailDiv = document.getElementsByClassName(`user-details`)[0]
userDetailDiv.innerHTML = `${JSON.stringify(user)}`
let btn = document.getElementsByClassName(`btn`)[0]
let posts = document.getElementsByClassName('posts')[0];
btn.onclick = ()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const valueElement of value) {
                let postInfo = document.createElement('div');
                postInfo.classList.add('post');
                postInfo.innerText = valueElement.title
                let postBtn = document.createElement('button')
                postBtn.innerText = `Click`
                postBtn.onclick = ()=> {location.href = `post-details.html?data=${JSON.stringify(valueElement)}`}
                postInfo.appendChild(postBtn)
                posts.appendChild(postInfo)
            }
        })
}
userDetailDiv.appendChild(btn)