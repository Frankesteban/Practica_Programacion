var z//primero se declarar las variables

for(var i=0; i<10; i++)// Ciclo i es igual a cero, mientras i sea menor que 10, i agregar un espacio
{
    z = aleatorio(10, 20);//se llama la funcion con los valores para los parametros
    document.write(z + ", ");//escribre
}


function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}