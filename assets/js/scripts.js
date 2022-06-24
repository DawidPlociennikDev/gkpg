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

var executiveAnimation = true;

let screenHeight = screen.height;
let offsetTop = $(".section-numbers").offset().top;

$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    if (executiveAnimation && scrollTop > (screenHeight - offsetTop) && scrollTop <= (screenHeight + (screenHeight - offsetTop))) {
        executiveAnimation = false;
        $('.number-counter').each(function (obj) {
            let maxNumber = Number($(this).attr("data-number-value"));
            $(this).text(0);
            getCounter(this, 0, maxNumber);
        });
    }

});

function getCounter(obj, i, maxNumber) {
    setTimeout(function () {
        if (i < maxNumber) {
            if (maxNumber > 100) i += 10
            else i++;
            $(obj).text(i);
            getCounter(obj, i, maxNumber)
        }
    }, 50)
}