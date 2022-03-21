let wrapper = document.getElementsByClassName(`wrapper`)[0]
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userBlock = document.createElement(`div`)
            userBlock.classList.add(`user`);
            userBlock.innerText = `
                ID: ${user.id}
                Name: ${user.name}`
            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = `Click me`
            btn.onclick = ()=>{location.href=`user-details.html?data=${JSON.stringify(user)}`}
            userBlock.appendChild(btn)
            wrapper.appendChild(userBlock)
        }
    })
