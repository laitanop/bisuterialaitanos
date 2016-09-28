$(document).ready(function(){
    for (i=0; i<10; i++){
    	$('#pulseras').append(
    		'<div class="col-sm-4 col-lg-4 col-md-4">'+
                        '<div class="thumbnail">'+
                            '<img src="../img/pulseras/01.jpg" alt="">'+
                            '<div class="caption">'+
                                '<h5 class="pull-right">₡ 4,000.00</h5>'+
                                '<h5><a href="#">Pulsera Minnie</a>'+
                                '</h5>'+
                                '<h6>Pulsera de Minnie color rosa.</h6>'+
                                '<button class"button"type="button">Add to cart:</button>'+
                                '<input type="text" size="4" maxlength="6" value="1" name="cart_quantity">'+
                                '<h5 class="pull-right">In stock</h5>'+

                                
                            '</div>'+
                        
                        '</div>'+
                    '</div>'

    		);
    }
});


