window.onload = function(){ 
    document.querySelector(".preloader").style.display = "none";
 }


//$(window).load(function() {
//     $(".loading").fadeOut("slow");
// }).then(function() {
//     window.location = "index.html";
// });


// mobile menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".icon");
const linkActive = document.querySelector(".nav-menu-link");


// funcion abrir boton al click menu hamburguesa
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");

// icono cerrar abrir menu cambio
    if(navMenu.classList.contains("nav-menu_visible")){
        icon.setAttribute("class", "fas fa-times");
    }else{
        icon.setAttribute("class", "fas fa-bars");
    }

// cambio de aria label 
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }

});

// linkActive.addEventListener("click", () =>{
//     linkActive.classList.toggle("nav-menu-link-active");

// });

// marcar pagina activa
$(".nav-menu").find("a").click(function(){
    $(".nav-menu a").removeClass('nav-menu-link-active')
    $(this).addClass('nav-menu-link-active')
  })





  // cerrar menu mobil al ir a una seccion
  $(".nav-menu").find("a").click(function(){
    $(".nav-menu").removeClass('nav-menu_visible')
    $(this).addClass('nav-menu_visible')
  })

