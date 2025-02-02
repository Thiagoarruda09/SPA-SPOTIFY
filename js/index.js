const SIDEBAR = document.getElementById('sidebar')
const MAIN = document.getElementById('main-container')

SIDEBAR.innerHTML = `
${sideBarNavigation()}
${library()} 
${rodape()}   `

MAIN.innerHTML = `
${headerNavigation()}
${playlist()}
`

