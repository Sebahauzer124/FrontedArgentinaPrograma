export class Persona{
    id!:number;
    apellido!:string;
    img!:string;
    nombre!:string;
    acercaDe!:string;
    titulo!:string;

    constructor(id:number,apellido:string, img:string, nombre:string, acercaDe:string,titulo:string){
        this.id=id;
        this.apellido=apellido;
         this.img=img;
         this.nombre=nombre;
         this.acercaDe=acercaDe;
         this.titulo=titulo;
    
    }
}