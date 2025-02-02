const SIDEBAR = document.getElementById('sidebar')

SIDEBAR.innerHTML = `
${sideBarNavigation()}
${library()} 
${footer()}   `