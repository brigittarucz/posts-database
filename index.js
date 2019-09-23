function get() {
    fetch("https://posts-5ad9.restdb.io/rest/posts", {
            method: "get",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "5d887df4fd86cb75861e2625",
                "cache-control": "no-cache"
            }
        })
        .then(e => e.json())
        .then(posts => {
            posts.forEach(addPostToTheDOM);
        })
}

function addPostToTheDOM(post) {
    const section = document.querySelector("section");
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    console.log(post);

    clone.querySelector("h4").textContent = post.user;
    let li = document.createElement("li");
    li.textContent = post.category;
    clone.querySelector("ul").appendChild(li);
    clone.querySelector(".date").textContent = post.date;
    clone.querySelector(".socialmedia").textContent = post.socialmedia;
    if (post.origin == true) {
        clone.querySelector(".origin").textContent = "Original Post";
    } else {
        clone.querySelector(".origin").textContent = "Shared Post";
    }
    section.appendChild(clone);
}

get();

function post() {
    const data = {
        user: "jeremy2234",
        date: Date.now(),
        category: "multimedia design",
        socialmedia: "instagram",
        origin: false
    };

    const postData = JSON.stringify(data);
    fetch("https://posts-5ad9.restdb.io/rest/posts", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "5d887df4fd86cb75861e2625",
                "cache-control": "no-cache"
            },
            body: postData
        })
        .then(res => res.json())
        .then(data => {
            // window.location = "";
            // location.reload();
            addPostToTheDOM(data);
        });
}

document.querySelector("button").addEventListener("click", e => {
    post();
});