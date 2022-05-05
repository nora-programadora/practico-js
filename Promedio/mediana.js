const lista = [
    100,
    200,
    300,
    400000
];
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

const mitadLista = parseInt(lista.length / 2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1 ];
    const elemento2 = lista[mitadLista];

    const promedioElementos1y2 = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = promedioElementos1y2;

}else{
    mediana = lista[mitadLista];
}