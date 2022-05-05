//Codido del cuadrado
console.group("Cuadrados");
//const ladoCuadraro = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadraro + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado
}
//console.log("el area del cuadrado es: " + areaCuadrado + "cm");
console.groupEnd();


//codigo del triangulo 
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


// console.log("Los lados del triangulo miden: "
//             + ladoTriangulo1
//             + "cm"
//             + ladoTriangulo2
//             + "cm"
//             + baseTriangulo
//             + "cm");

//console.log("La altura del triangulo es de: " + alturaTriangulo);

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

//Codigo del circulo 
console.group("Circulos");

//Radio
const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("PI del circulo es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo es: " + areaCirculo + "cm cuadrados");

console.groupEnd();

//******************************** *//
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}