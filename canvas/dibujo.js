var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var colorcito = "blue";
var colorcito_2= "green";
var yi, xf;

for(l; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1); 
    dibujarlinea(colorcito, 0, yi, xf, 300);
    dibujarlinea(colorcito_2, 300, yi, xf, 0);
    console.log("Linea " + 1)
    }
     
/*for(l; l < lineas; l++)
    {
        yi = 10 * l;
        xf = 10 * (l + 1);  
        dibujarlinea(colorcito_2, 300, yi, xf, 0);
        console.log("Linea " + 1)
        }*/

dibujarlinea("orange", 1, 1, 1, 300);
dibujarlinea("orange", 1, 299, 299, 299);
dibujarlinea("orange", 1, 1, 299, 1);
dibujarlinea("orange", 299, 1, 299, 299);

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();  
}

function dibujoPorClick()
{
    console.log(texto);
    alert("no me toques ahi");
}