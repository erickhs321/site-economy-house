window.onscroll = scroll


function scroll() {
   if(window.pageYOffset > 100){
       
       document.getElementById('barra-navegacao').style.backgroundColor = '#333e50';
   }else{
    document.getElementById('barra-navegacao').style.backgroundColor = 'transparent';
   }
}