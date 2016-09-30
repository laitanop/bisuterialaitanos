

var inicio = [
{img: "i1.jpg" , nombre: "Pulseras", descripcion: "Pulseras Macrame de colores con dije Estela Maya." },
{img: "i2.jpg" , nombre: "Pulseras", descripcion: "Pulsera de colores con dije de pewter Maya." },
{img: "i3.jpg" , nombre: "Pulseras Maya", descripcion: "Brasalete Maya" },
{img: "i4.jpg" , nombre: "Pulseras ", descripcion: "Elige un color para cada dia." },
{img: "i5.jpg" , nombre: "pulseras", descripcion: "Puedes escoger nuestra variedad de pulseras." },
{img: "i6.jpg" , nombre: "Ferias Artesanales", descripcion: "visitanos en diferentes ferias artesanales." },

];

$(document).ready(function(){
  for (i=0; i<inicio.length; i++){
    $('#inicio').append(
      


      '<div class="col-sm-4 col-lg-4 col-md-4">'+
                        '<div class="thumbnail">'+
                            '<img src="../img/inicio/'+inicio[i].img+' "alt="">'+
                            '<div class="caption">'+
                                '<h4 class="pull-right"></h4>'+
                                '<h4><a href="pulseras.html">'+inicio[i].nombre+'</a>'+
                                '</h4>'+
                                '<p> <a target="_blank" href="pulseras.html">'+inicio[i].descripcion+'</a></p>'+
                            '</div>'
                            );
  }
});


