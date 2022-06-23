function toogleMenu() {
    document.getElementById("menu").classList.toggle("show-menu");
}

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dotsContainer: '#carousel-custom-dots',
    responsive: {
        0: {
            items: 1
        }
    }
})

if (window.screen.width > 1350) {
    $(document).ready(function () {
        var valueLeft = (window.screen.width - 1350) / 2;
        document.getElementById("carousel-custom-dots").style.left = valueLeft + 'px';
    });
    window.addEventListener('resize', function (event) {
        var valueLeft = (window.screen.width - 1350) / 2;
        document.getElementById("carousel-custom-dots").style.left = valueLeft + 'px';
    }, true);

}