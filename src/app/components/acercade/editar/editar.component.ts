import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id!:number;
    apellido!:string;
    img!:string;
    nombre!:string;
    acercaDe!:string;
    titulo!:string;
  
  

  
  persona = new Persona(this.id,this.apellido,this.img,this.nombre,this.acercaDe,this.titulo);

   constructor(
     private service: PersonaService,
     private activatedRouter : ActivatedRoute,
     private router: Router
   ) { }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.getPersona().subscribe(
       data =>{
         this.persona = data;
       }, err =>{
          alert("Error al modificarrrr");
          this.router.navigate(['home']);
       }
     )
   }
 
   onUpdate(): void{
   
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.update(1, this.persona).subscribe(
       data => {
         this.router.navigate(['']);
       }, err => {
         alert("Error al modificar");
         this.router.navigate(['']);
       }
     )
   }

}
