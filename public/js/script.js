$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        center: true,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    })
})