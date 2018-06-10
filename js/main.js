
var documentEl = $(document);
//     fadeElem = $('.fade');
// $('.fade').style = 'opacity:0';


documentEl.on('scroll', function () {
    // $('#navbarText').on('activate.bs.scrollspy', function () {
    //     alert("ativou");
    //    });
    if (window.pageYOffset > 100) {
        document.getElementById('barra-navegacao').style.backgroundColor = '#22658B';

        // #3B8686
        // #0B486B
    }
    else {
        document.getElementById('barra-navegacao').style.backgroundColor = 'transparent';
    }
  
});


$('#carouselComentarios').carousel({
    interval: 2200
});

$('#carouselCaracteristicas').carousel({
    interval: 5200
});


