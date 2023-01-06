const settingsMenu = document.querySelector('.settings-menu')
const darkMode = document.getElementById('dark-btn')

function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-height')
}


darkMode.onclick = function(){
    darkMode.classList.toggle('drk-mode-btn')
    document.body.classList.toggle('dark-mode')

    if(localStorage.getItem('theme') = 'light'){
        localStorage.setItem('theme',"dark");
    }
    else{
        localStorage.setItem('theme',"light")
    }
}
