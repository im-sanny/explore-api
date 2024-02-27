function practice() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => practiceUser(data));
}

function practiceUser(data) {
  for (const user of data) {
    console.log(user);
    const ul = document.getElementById("user-list");
    const li = document.createElement("li");
    li.classList.add("user"); //why user here?
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
// practice()

function practicePost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => postUser(data));
}

function postUser(data) {
  for (const user of data) {
    console.log(user);
    const postContainer = document.getElementById("container");
    const div = document.createElement('div')
    div.innerHTML = `
        <h2>${user.title}</h2>
        <h3>${user.id}</h3>
        <p>${user.body}</p>
        `;
    postContainer.appendChild(div)
  }
}
// function dailyPosts(posts) {
//     const postContainer = document.getElementById("posts-container");
//     for (const post of posts) {
//       console.log(post);
//       const div = document.createElement("div");
//       div.classList.add("post");
//       div.innerHTML = `
//           <h4>User-${post.userId}</h4>
//           <h5>Post: title${post.title} </h5>
//           <p>Post Description${post.body}</p>
//          `;
//       postContainer.appendChild(div);
//     }
//   }
