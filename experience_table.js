var showExperienceTable = false
document.getElementById("experience_toggle").onclick = function() {
    const experience_table = document.getElementById("experience_table")
    showExperienceTable = !showExperienceTable
    experience_table.style.display = showExperienceTable ? "block" : "none"
    
    const experience_toggle = document.getElementById("experience_toggle")
    experience_toggle.innerHTML = showExperienceTable ? "experience.kill()" : "./experience"
}

const experiences = [
    {
        title: 'Product Engineer at ASU',
        description: 'Collaborated closely with marketing to produce devices and RPM kits based on market research and revenue-focused price points.'
    },
    {
        title: 'Software Engineer at ASU',
        description: 'Simplified device configuration with custom Android software helping save nearly 30 minutes of labor per device.'
    },
    {
        title: 'Sales Associate at ASU',
        description: 'Worked closely with customers to service their needs whether on the sales floor or at the cash wrap.'
    },
]

tableElem = document.getElementById("experience_table")

for (var i = 0; i < experiences.length; i++) {
    experienceRow = document.createElement('tr');
    experienceRow.className = "experience-entry"

    titleCol = document.createElement('td');
    titleCol.className = "experience-title"
    titleCol.appendChild(document.createTextNode(experiences[i].title)); //to print cell number

    descriptionCol = document.createElement('td');
    descriptionCol.className = "experience-desc"
    descriptionCol.appendChild(document.createTextNode(experiences[i].description)); //to print cell number
    
    experienceRow.appendChild(titleCol);
    experienceRow.appendChild(descriptionCol);

    tableElem.appendChild(experienceRow);
}