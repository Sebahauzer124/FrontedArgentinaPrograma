import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})
export class EditareducacionComponent implements OnInit {

  id!:number;
  tituloEdu!:string;
  fechaEdu!:string;
  descEdu!:string;
  imagenEdu!:string;
  
  

  
  educacion = new Educacion(this.id,this.tituloEdu,this.fechaEdu,this.descEdu,this.imagenEdu);

   constructor(
     private service: EducacionService,
     private activatedRouter : ActivatedRoute,
     private router: Router
   ) { }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.detail(id).subscribe(
       data =>{
         this.educacion = data;
       }, err =>{
          alert("Error al modificar");
          this.router.navigate(['home']);
       }
     )
   }
 
   onUpdate(): void{
   
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.update(id, this.educacion).subscribe(
       data => {
         this.router.navigate(['']);
       }, err => {
         alert("Error al modificar la educacion");
         this.router.navigate(['']);
       }
     )
   }
}
