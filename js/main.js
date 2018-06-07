
var documentEl = $(document),
    fadeElem = $('.fadein');
$('.fadein').style = 'opacity:0';


documentEl.on('scroll', function () {
    if (window.pageYOffset > 100) {
        document.getElementById('barra-navegacao').style.backgroundColor = '#333e50';
      
      
    }
     else {
        document.getElementById('barra-navegacao').style.backgroundColor = 'transparent';
    }
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function () {
        var $this = $(this),
            elemOffsetTop = $this.offset().top;
        if (currScrollPos + 400 > elemOffsetTop){
          
            $this.addClass('animated fadeInRight');
            $this.css('opacity', 1 - (currScrollPos - elemOffsetTop) / 500);
        }
         
        
       
    });
});


$('#carouselComentarios').carousel({
    interval: 2100
});


