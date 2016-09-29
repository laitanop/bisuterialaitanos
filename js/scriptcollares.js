var collares = [
  {img: "c1.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c2.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c3.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c4.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c5.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c6.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c7.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c8.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c9.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c10.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c11.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c12.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "c13.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },

];

$(document).ready(function(){
    for (i=0; i<collares.length; i++){
    	$('#collares').append(
    		'<div class="col-sm-4 col-lg-4 col-md-4">'+
                        '<div class="thumbnail">'+
                            '<img src="../img/collares/'+collares[i].img+'" alt="">'+
                            '<div class="caption">'+
                                '<h5 class="pull-right">'+collares[i].precio+'</h5>'+
                                '<h5><a href="#">'+collares[i].nombre+'</a>'+
                                '</h5>'+
                                '<h6>'+collares[i].descripcion+'</h6>'+
                                '<button class"button"type="button">Add to cart:</button>'+
                                '<input type="text" size="4" maxlength="6" value="1" name="cart_quantity">'+
                                '<h5 class="pull-right">'+collares[i].stock+' en stock</h5>'+

                                
                            '</div>'+
                        
                        '</div>'+
                    '</div>'

    		);
    }
});




