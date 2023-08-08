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


