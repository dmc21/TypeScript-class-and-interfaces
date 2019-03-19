interface DatosMaestros {
    titulo: string;
    addInscrito();
}

class Curso implements DatosMaestros {
    titulo: string;
    public descripcion: string;
    public horas: number;
    public inscritos: number;

    constructor(descripcion){
        this.descripcion = descripcion;
        this.horas = 20;
        this.inscritos = 0;
    }

    public getInscritos(){
        return this.inscritos;
    }

    public setInscritos(inscritos:number){
        this.inscritos = inscritos;
    }


    public addInscrito(){
        this.inscritos++;
    }

    public remInscrito(){
        this.inscritos--;
    }

    var cursoAngular = new Curso("The best description");

    console.log(cursoAngular);

}
