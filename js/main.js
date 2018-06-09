
var documentEl = $(document);
//     fadeElem = $('.fade');
// $('.fade').style = 'opacity:0';


documentEl.on('scroll', function () {
    // $('#navbarText').on('activate.bs.scrollspy', function () {
    //     alert("ativou");
    //    });
    if (window.pageYOffset > 100) {
        document.getElementById('barra-navegacao').style.backgroundColor = '#333e50';


    }
    else {
        document.getElementById('barra-navegacao').style.backgroundColor = 'transparent';
    }
  
});


$('#carouselComentarios').carousel({
    interval: 2200
});


