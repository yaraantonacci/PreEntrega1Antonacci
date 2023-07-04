alert('Bienvenidos a la Tienda de Tortas!!!');
alert('A continuación podrán visualizar nuestra carta y realizar su compra online');


let total = 0; 

let producto = prompt('1-Torta de Cumpleaños - $4500\n2-Cheesecake de Frutos Rojos - $3800\n3-Torta Oreo - $3800\n4-Chocotorta - $3500\n5-Torta Toffe - $3000\n6-Alfajores de dulce de leche x12 - $1500\n7-Escones de queso  1/4 - $900\n8-Rosca con pastelera -$1500\n0-Para salir de la lista de productos y/o finalizar tu compra');

while(producto != '0'){
    
    switch(producto){
        case '1':
            alert('Agregaste una Torta de Cumpleaños - $4500 ');
            sumaTotal(2500);
            break;
        case '2':
            alert('Agregaste una Cheesecake de Frutos Rojos - $3800');
            sumaTotal(2800);
            break;
        case '3':
            alert('Agregaste una Torta Oreo - $3800');
            sumaTotal(3800);
            break;
        case '4':
            alert('Agregaste una Chocotorta - $3500');
            sumaTotal(3500);
            break;     
        case '5':
            alert('Agregaste una Torta Toffe- $3000');
            sumaTotal(3000);
            break;   
        case '6':
            alert('Agregaste Alfajores de dulce de leche x12 - $1500');
            sumaTotal(1500);
            break;  
        case '7':
            alert('Agregaste Escones de queso 1/4 - $900');
            sumaTotal(900);
            break;
        case '8':
            alert('Agregaste una Rosca con pastelera - $1500');
            sumaTotal(1500);
            break;
        default:
            alert('Código incorrecto');
            break;
    }
    producto = prompt('1-Torta de Ricota - $2500\n2-Torta de Ricota y dulce de leche - $2800\n3-Torta Oreo - $3800\n4-Chocotorta - $3500\n5-Torta Toffe - $3000\n6-Alfajores de dulce de leche x12 - $1500\n7-Escones de queso  1/4 - $900\n8-Rosca con pastelera -$1500\n0-Para salir de la lista de productos y/o finalizar tu compra ');
}

alert('Precio total de tu compra $ '+total);
alert("Gracias por elergirnos que lo disfrutes ❤");




function sumaTotal(precioTorta){
    total = total + precioTorta;
    console.log('Subtotal hasta el momento $'+total);
}
