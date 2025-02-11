
// ===================== Common Header/Footer =============================

$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});


function zoom() {
    if (window.innerWidth >= 650 && window.innerWidth <= 1400) {
        document.body.style.zoom = "90%";
    } 
    // else if (window.innerWidth >= 650 && window.innerWidth <= 1300) {
    //     document.body.style.zoom = "80%";
    // } 
    else {
        document.body.style.zoom = "100%";
    }
}
// Call the zoom function on window resize
window.addEventListener('resize', zoom);
// Initial call to set zoom based on current window size
zoom();

$('.banner-silder').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: false,
    slideTransition: 'linear',
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});