/* from the site owl carousel v2.1-> demos->basics*/ 

$(document).ready(function(){
/* hero-slider*/ 
$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    // to display one item at a slide
    items:1,
    // to adjust the speed of slide movement
    smartSpeed:1000,
    //to avoid the nav dots under the slide
    dots:false,
    navText:['PREV','NEXT'],
    responsive:{
        /* At mobile view we dnt want nav buttons*/ 
        0:{
            nav:false,
        },
        768:{
            nav:true,
        }
        
    }
})


});