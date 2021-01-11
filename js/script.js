var username = document.getElementById('username')
var getRepos = document.getElementById('get-repos')
var showRepos = document.getElementById('show-repos')

getRepos.addEventListener('click', ()=> {
    if(username.value != '')
    {
        fetch(`https://api.github.com/users/${username.value}/repos`)
        .then(response => response.json())
        .then(repos => {
            showRepos.innerHTML = ''
            repos.forEach(repo => {
                showRepos.innerHTML += `
                            <div class="repo">
                                ${repo.name}

                                <div class="repo-data">
                                    <div class="stars">
                                        <span><i class="fa fa-star"></i></span>
                                        ${repo.stargazers_count}
                                    </div>
                                    <div class="forks">
                                        <span><i class="fa fa-code-branch"></i></span>
                                        ${repo.forks_count}
                                    </div>
                                    <a class="visit" href="${repo.html_url}" target="_blank">
                                        Visit
                                    </a>
                                </div>
                            </div>
                `;
            });
        });
    }else{
        showRepos.innerHTML = ''
        showRepos.innerHTML = `
                    <div class="empty">
                        Empty Username
                    </div>
                                `;
    }
})