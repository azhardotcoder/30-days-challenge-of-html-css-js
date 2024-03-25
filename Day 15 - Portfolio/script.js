var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assests/icons/sun.png"

    }else{
        icon.src = "./assests/icons/moon.png"
    }
}