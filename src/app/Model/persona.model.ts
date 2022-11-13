export class Persona{
    id!:number;
    apellido!:string;
    img!:string;
    nombre!:string;
    acercaDe!:string;
    titulo!:string;

    constructor( apellido:string, img:string, nombre:string, acercaDe:string,titulo:string){
        
        this.apellido=apellido;
         this.img=img;
         this.acercaDe=acercaDe;
         this.titulo=titulo;
    
    }
}