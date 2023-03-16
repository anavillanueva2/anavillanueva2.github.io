const menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(const x = 0; x < links.length; x++) {
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
/*formulario*/

document.getElementById ("#boton").addEventListener("click", function(){
document.getElementById("#envio").innerHTML = "Gracias por contactarte!"
});


