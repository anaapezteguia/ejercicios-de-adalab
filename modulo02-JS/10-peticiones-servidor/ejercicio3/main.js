'use strict';
const user = document.querySelector(".js-user");
const uName = document.querySelector(".js-name");
const img = document.querySelector(".js-img");
const repos = document.querySelector(".js-repos");
const search = document.querySelector(".js-search");
function handleSearch() {
  const username = user.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      uName.innerHTML = data.name;
      img.src = data.avatar_url;
      img.alt = username;
      repos.innerHTML = data.public_repos;
    });
}
search.addEventListener("click", handleSearch);