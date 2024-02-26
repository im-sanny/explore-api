function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => dailyPosts(data));
}

/*
1. get the container element where you want to add the new elements
2. create child element 
3. set innertext or innerhtml
4. append child
*/
function dailyPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    console.log(post);
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: title${post.title} </h5>
        <p>Post Description${post.body}</p>
       `;
    postContainer.appendChild(div);
  }
}
loadPosts();
