// menu hamburguesa
let menu = document.getElementById ('menu')
let abrir_menu = document.getElementById ('abrir_menu')
let cerrar_menu = document.getElementById ('cerrar_menu')

abrir_menu.addEventListener ('click', cabiarmenu);
cerrar_menu.addEventListener ('click', cabiarmenu);

function cabiarmenu () {
    menu.classList.toggle ('apretarboton');

    if(menu.classList.contains ('apretarboton')) {
        abrir_menu.style.display = 'none';
        cerrar_menu.style.display = 'block';
    }
    else {
        abrir_menu.style.display = 'block';
        cerrar_menu.style.display = 'none';
    }
}
// formulario de contacto

let nombreUsuario = prompt ("Ingrese Nombre de Usuario");
console.log ("La cantidad de caracteres es de" + " " + nombreUsuario.length)
if (nombreUsuario.length >= 4) {
    alert ("Tu nombre de usuario es valido")
} else {
    alert ("Tu nombre de usuario no es valido")
}

let portafolioGonza = prompt ("Queres ver mi Portafolio? Respondes con SI O NO")
if (portafolioGonza == "SI") {
    alert ("Bienvenido a mi portafolio")
} else { 
    alert ("Nos vemos Pronto!")
}

