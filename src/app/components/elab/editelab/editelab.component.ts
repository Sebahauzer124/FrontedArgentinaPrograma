import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-editelab',
  templateUrl: './editelab.component.html',
  styleUrls: ['./editelab.component.css']
})
export class EditelabComponent implements OnInit {

  id!:number;
  tituloExp!:string;
  fechaExp!:string;
  descExp!:string;
  imagenExp!:string;
  
  experiencia = new Experiencia(this.id,this.tituloExp,this.fechaExp,this.descExp, this.imagenExp );

   constructor(
     private service: ExperienciaService,
     private activatedRouter : ActivatedRoute,
     private router: Router
   ) { }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.detail(id).subscribe(
       data =>{
         this.experiencia = data;
       }, err =>{
          alert("Error al modificar");
          this.router.navigate(['home']);
       }
     )
   }
 
   onUpdate(): void{
   
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.update(id, this.experiencia).subscribe(
       data => {
         this.router.navigate(['']);
       }, err => {
         alert("Error al modificar la educacion");
         this.router.navigate(['']);
       }
     )
   }
}
