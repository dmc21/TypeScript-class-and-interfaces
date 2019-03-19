/*let nombre: string = "Antonio";

function saludo(nombre){
    return "Hola "+nombre;
}

document.getElementById("encabezado").innerHTML = saludo(nombre);*/
var Curso = /** @class */ (function () {
    function Curso(descripcion) {
        this.descripcion = descripcion;
        this.horas = 20;
        this.inscritos = 0;
    }
    Curso.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso.prototype.remInscrito = function () {
        this.inscritos--;
    };
    return Curso;
}());
var cursoAngular = new Curso("The best description");
console.log(cursoAngular);
