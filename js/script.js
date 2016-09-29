var pulseras = [
  {img: "01.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "02.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color Azul.", stock: "2" },
  {img: "03.jpg" ,precio: "₡ 7,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa y Azul.", stock: "2" },
  {img: "04.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "05.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "06.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "07.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "08.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },

];

$(document).ready(function(){
    for (i=0; i<pulseras.length; i++){
    	$('#pulseras').append(
    		'<div class="col-sm-4 col-lg-4 col-md-4">'+
                        '<div class="thumbnail">'+
                            '<img src="../img/pulseras/'+pulseras[i].img+'" alt="">'+
                            '<div class="caption">'+
                                '<h5 class="pull-right">'+pulseras[i].precio+'</h5>'+
                                '<h5><a href="#">'+pulseras[i].nombre+'</a>'+
                                '</h5>'+
                                '<h6>'+pulseras[i].descripcion+'</h6>'+
                                '<button class"button"type="button">Add to cart:</button>'+
                                '<input type="text" size="4" maxlength="6" value="1" name="cart_quantity">'+
                                '<h5 class="pull-right">'+pulseras[i].stock+' en stock</h5>'+

                                
                            '</div>'+
                        
                        '</div>'+
                    '</div>'

    		);
    }
});




