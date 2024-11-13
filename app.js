const $button = document.getElementById("addBtn");
const $lists = document.getElementById("lists");

$button.addEventListener("click", async function() {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    users.forEach(user => {
        console.log(user);
    });

    //DOM操作
    const list = document.createElement("li");
    list.innerText = "foo";
    $lists.appendChild(list);
})