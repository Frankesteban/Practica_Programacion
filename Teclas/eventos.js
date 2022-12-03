var teclas = {//Objeto que tiene internamente una colección de variables. Técnicamente es una sola linea de codigo. JSON
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);//para detectar el evento donde el usuario oprima una tecla.
var cuadro = document.getElementById("area_de_dibujo");//se trae del canvas definido en html
var papel = cuadro.getContext("2d");
var x = 150;//posicion inicial
var y = 150;


dibujarlinea("red",149,149,151,151,papel);

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)//se incluye lienzo como parametro para traerlo dentro de la funcion
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.linewidth = 10;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();  
}

function dibujarTeclado(evento)//creamos la variable evento como parámetro
    {
       var colorcito= "blue";//se crea por fuera para no tener que modificarlo en cada case
       var movimiento = 10;
        switch(evento.keyCode)
        {
            case teclas.DOWN:
            dibujarlinea(colorcito, x, y, x, y + movimiento, papel);//se debe incluir el parametro del lienzo donde debe hacerse el dibujo
            y = y + movimiento;
            break;

            case teclas.UP:
                dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;// es igua a la posicion inicial - el movimmiento definido.
                break;
               
            case teclas.LEFT:
                dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
                break;
                
            case teclas.RIGHT:
                dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
                break;
            
            default://Es como el Else
                console.log("otra tecla");


        }    
    }