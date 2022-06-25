// Declaraciones
const d = document;
const menuBtn = d.querySelector('nav .btn');
const menuLst = d.querySelector('nav .menu');
const mapBtn = d.querySelector('.map .btn');
const mapFrm = d.querySelector('.map .cover');

// Navegacion
const toggleMenu = () => {
    menuLst.classList.toggle('active') ? 
    menuBtn.innerHTML = '&times;' :
    menuBtn.innerHTML = '&equiv;' 
}

menuBtn.onclick = toggleMenu();

// Mapa de Contacto
function toggleMap() {
    if (mapFrm.classList.toggle('active')){
        mapBtn.classList.replace('icon-max','icon-min')
    } else {
        mapBtn.classList.replace('icon-min','icon-max')
    }
}
mapBtn.addEventListener('click', () => toggleMap() );

// Formulario de contacto