var settingsMenu = document.querySelector('.settings-menu')
var darkBtn = document.getElementById('dark-btn')

function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-height')
}


darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-mode-btn')
    document.body.classList.toggle('dark-mode')

    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme',"dark");
    }
    else{
        localStorage.setItem('theme',"light")
    }
}
if(localStorage.getItem('theme') == "light"){
    darkBtn.classList.remove('dark-mode-btn')
    document.body.classList.remove('dark-mode')
}
else if(localStorage.getItem('theme') == "dark"){
    darkMode.classList.add('dark-mode-btn')
    document.body.classList.add('dark-mode')
}
else{
    localStorage.setItem('theme',"light");
}



localStorage.setItem('theme', 'light');
localStorage.getItem('theme');