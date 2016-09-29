var aretes = [
  {img: "a1.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a2.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a3.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a4.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a5.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a6.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a7.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a8.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a9.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a10.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a11.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a12.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a13.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a14.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a15.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a16.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a17.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a18.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },
  {img: "a19.jpg" ,precio: "₡ 4,000.00", nombre: "Pulsera Minnie", descripcion: "Pulsera de Minnie color rosa.", stock: "2" },

];

$(document).ready(function(){
    for (i=0; i<aretes.length; i++){
    	$('#aretes').append(
    		'<div class="col-sm-4 col-lg-4 col-md-4">'+
                        '<div class="thumbnail">'+
                            '<img src="../img/aretes/'+aretes[i].img+'" alt="">'+
                            '<div class="caption">'+
                                '<h5 class="pull-right">'+aretes[i].precio+'</h5>'+
                                '<h5><a href="#">'+aretes[i].nombre+'</a>'+
                                '</h5>'+
                                '<h6>'+aretes[i].descripcion+'</h6>'+
                                '<button class"button"type="button">Add to cart:</button>'+
                                '<input type="text" size="4" maxlength="6" value="1" name="cart_quantity">'+
                                '<h5 class="pull-right">'+aretes[i].stock+' en stock</h5>'+

                                
                            '</div>'+
                        
                        '</div>'+
                    '</div>'

    		);
    }
});




