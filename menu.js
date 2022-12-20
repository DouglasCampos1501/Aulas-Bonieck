function menuToggle(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened')
    } else {
        menuArea.classList.add('menu-opened')
    }

}


function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function displayScroll (){
    if (window.scrollY === 0){
        document.querySelector('.scrollButton').getElementsByClassName.display = "none";
    }else{
        document.querySelector('.scrollButton').getElementsByClassName.display = "block";
    }
}