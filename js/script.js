

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
const body = document.querySelector("body");
const theme = document.querySelector(".theme");
const icon_theme = document.querySelector(".icon_theme");



// modo oscuro detecta el modo del pc
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(userPrefersDark){
    console.log("User prefers a dark interface");
    $("body").addClass('black')
    icon_theme.setAttribute("class", "fas fa-sun");
  }
  else {
    $("body").removeClass('')
  }




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
        navToggle.setAttribute("aria-label", "Cerrar men??");
    }else{
        navToggle.setAttribute("aria-label", "Abrir men??");
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


  // quitar clase zindex footer al ir a una secci??n
  $(".nav-menu").find("a").click(function(){
    $(".footer").removeClass('zindex')
  })


  // quitar clase zindex footer al cambiar de tema de color
  $(".nav-menu").find("button").click(function(){
    $(".footer").removeClass('zindex')
  })





// a??adir clase black para modo oscuro body

  theme.addEventListener("click", () =>{
    body.classList.toggle("black");


// icono sun and moon theme modo oscuro
  if(body.classList.contains("black")){
    icon_theme.setAttribute("class", "fas fa-sun");
}else{
    icon_theme.setAttribute("class", "fas fa-moon");
}



}); 




