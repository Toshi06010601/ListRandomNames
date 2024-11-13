const $button = document.getElementById("addBtn");
const $lists = document.getElementById("lists");

async function getUsers() {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}



async function listUsers() {
    const users = getUsers();
    users.forEach(user => {
        //DOM操作
        const list = document.createElement("li");
        list.innerText = user.name;
        $lists.appendChild(list);
    });
}

$button.addEventListener("click", listUsers);

window.addEventListener("load", listUsers);