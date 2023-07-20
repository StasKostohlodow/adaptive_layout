window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth > 575){
        menuClose()
    }
});


document.getElementById('burger').onclick = function(){
    document.getElementsByClassName('header_menu')[0].classList.add('show_mobile_menu')
    document.getElementById('burger').style.opacity = 0
    document.getElementById('burger-close').classList.add('burger_active')
}

let menuClose = function(){
    document.getElementsByClassName('header_menu')[0].classList.remove('show_mobile_menu')
    document.getElementById('burger').style.opacity = 1
    document.getElementById('burger-close').classList.remove('burger_active')
}

document.getElementById('burger-close').onclick = menuClose