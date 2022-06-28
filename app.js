let menuBtn = document.getElementById('toggle')
let menuLists = document.getElementById('myNav')
let cancelIcon = document.getElementById('toggleClose')


menuBtn.addEventListener('click', () => {
    showNav();
})

cancelIcon.addEventListener('click', () => {
    hideNav();
})

function showNav() {
    menuLists.style.width = "100%";
}

function hideNav() {
    menuLists.style.width = "0%";
}