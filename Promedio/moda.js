const lista = [
    1,
    4,
    7,
    8,
    1,
    2,
    1
]

const listaCount = {};

lista.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] = listaCount[elemento] + 1;
        }else{
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function(valorAcumulado,nuevoValor){
        return valorAcumulado - nuevoValor;
    }
);

const moda = listaArray[listaArray.length - 1];