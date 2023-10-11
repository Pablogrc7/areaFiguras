let b;
let a;

let calcular = document.getElementById('calcular');
calcular.addEventListener('click', calcularArea);

function calcularArea() {
    let figura = document.getElementById('figura').value;
    b = document.getElementById("base").value;
    a = document.getElementById("altura").value;

    if (figura === "Cuadrado") {
        areaCuadrado();
    } else if (figura === "Rectangulo") {
        areaRectangulo();
    } else if (figura === "Triangulo") {
        areaTriangulo();
    }

    // Restablecer los campos de base y altura
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
}

function areaCuadrado() {
    document.getElementById("resultado").innerHTML = b * a;
}

function areaRectangulo() {
    document.getElementById("resultado").innerHTML = b * a;
}

function areaTriangulo() {
    document.getElementById("resultado").innerHTML = (b * a) / 2;
}
