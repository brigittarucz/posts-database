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
        posts.forEach(post => {
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
        })
    })