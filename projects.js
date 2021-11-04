const GITHUB_USERNAME = "YasserDbeis"

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
.then(response => response.json())
.then(repos => {

    for(const repo of repos) {

        const repoName = repo.name
        const repoDescription = repo.description
        const repoURL = repo.html_url
        const repoLanguage = repo.language

        const cardContainer = document.createElement("div")
        cardContainer.className = "card center"

        const cardImg = document.createElement("img")
        cardImg.src = "./assets/generic_code_bgrnd.jpg"
        cardImg.className = "project-image"

        cardContainer.appendChild(cardImg)

        const projectInfoContainer = document.createElement("div")
        projectInfoContainer.className = "project-info-container"

        const projectTitle = document.createElement("h3")
        projectTitle.textContent = repoName

        const projectDescription = document.createElement("p")
        projectDescription.textContent = repoDescription

        const projectURL = document.createElement("a")
        projectURL.href = repoURL
        projectURL.appendChild(projectTitle)
        projectURL.target = "_blank"

        const projectLanguage = document.createElement("p")
        projectLanguage.textContent = repoLanguage

        projectInfoContainer.appendChild(projectURL)
        projectInfoContainer.appendChild(projectDescription)
        projectInfoContainer.appendChild(projectLanguage)

        cardContainer.appendChild(projectInfoContainer)

        const projectsContainer = document.getElementById("projects_container")

        projectsContainer.appendChild(cardContainer)
    }

});
// The element we create for each repo:
// <div class="card center">
// <img src="../assets/generic_code_bgrnd.jpg" alt="Avatar" style="">
// <div class="container">
//   <h4><b>Jane Doe</b></h4>
//   <p>Interior Designer</p>
// </div>
// </div>
