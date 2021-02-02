'user strict';
const inputElement = document.querySelector('.js-organization');
const searchElement = document.querySelector('.js-searchBtn');
const nameElement = document.querySelector('.js-name');
const repoElement = document.querySelector('.js-repos');
function handleSearch() {
    const orgname = inputElement.value;
    fetch(`https://api.github.com/orgs/${orgname}`)
      .then((response) => response.json())
      .then((data) => {
          nameElement.innerHTML = data.login;
          console.log(data.repos_url);
          const repoList = data.repos_url;
          return fetch(repoList);
        })
        .then((repoResponse) => repoResponse.json())
        .then((repoData) => {
          for (let i = 0; i < repoData.length; i++){
            const myRepo = repoData[i].name;
            repoElement.innerHTML += `<li>${myRepo}</li>`;
                // console.log(myRepo);
            }
         })
        
  }
searchElement.addEventListener("click", handleSearch);
  
// repoElement.innerHTML += `<li>${myRepo}</li>`;