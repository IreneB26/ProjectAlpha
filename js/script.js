

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
const footer = document.querySelector(".footer");




// funcion abrir boton al click menu hamburguesa
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");

// icono cambiar al pulsar toogle 
    if(navMenu.classList.contains("nav-menu_visible")){
        icon.setAttribute("class", "fas fa-times icon");
    }else{
        icon.setAttribute("class", "fas fa-bars icon");
    }

// icono cambiar al pulsar seccion

 $(".nav-menu").find("a").click(function(){
  $(".icon").removeClass('fas fa-times')
  $(".icon").addClass('fas fa-bars')
})

// cerrar menu movil al cambiar de tema de color
$(".nav-menu").find("button").click(function(){
  $(".icon").removeClass('fas fa-times')
  $(".icon").addClass('fas fa-bars')
})


// zindex footer al abrir menu
    if(navMenu.classList.contains("nav-menu_visible")){
        footer.setAttribute("class", "footer zindex");
    }else{
        footer.setAttribute("class", "footer");
    }

// cambio de aria label menu 
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }


});



// marcar pagina activa
$(".nav-menu").find("a").click(function(){
    $(".nav-menu a").removeClass('nav-menu-link-active')
    $(this).addClass('nav-menu-link-active')
  })



  // cerrar menu movil al ir a una seccion
  $(".nav-menu").find("a").click(function(){
    $(".nav-menu").removeClass('nav-menu_visible')
    $(this).addClass('nav-menu_visible')
  })

  // cerrar menu movil al cambiar de tema de color
  $(".nav-menu").find("button").click(function(){
    $(".nav-menu").removeClass('nav-menu_visible')
    $(this).addClass('nav-menu_visible')
  })


  // quitar clase zindex footer al ir a una sección
  $(".nav-menu").find("a").click(function(){
    $(".footer").removeClass('zindex')
  })


  // quitar clase zindex footer al cambiar de tema de color
  $(".nav-menu").find("button").click(function(){
    $(".footer").removeClass('zindex')
  })


  const theme = document.querySelector(".theme");
  const body = document.querySelector("body");
  const icon_theme = document.querySelector(".icon_theme");


// añadir clase black para modo oscuro body

  theme.addEventListener("click", () =>{
    body.classList.toggle("black");


// icono sun and moon theme modo oscuro
  if(body.classList.contains("black")){
    icon_theme.setAttribute("class", "fas fa-sun");
}else{
    icon_theme.setAttribute("class", "fas fa-moon");
}



}); 




