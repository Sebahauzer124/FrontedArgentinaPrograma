import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/Model/skill.model';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-editarskill',
  templateUrl: './editarskill.component.html',
  styleUrls: ['./editarskill.component.css']
})
export class EditarskillComponent implements OnInit {

  id!:number;
  tituloSkill!:string;        
  imagenSkill!:string;
  porcentaje!:number;
  
  
  
  skill = new Skill(this.id,this.tituloSkill,this.imagenSkill,this.porcentaje );

   constructor(
     private service: SkillService,
     private activatedRouter : ActivatedRoute,
     private router: Router
   ) { }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.detail(id).subscribe(
       data =>{
         this.skill = data;
       }, err =>{
          alert("Error al modificar");
          this.router.navigate(['home']);
       }
     )
   }
 
   onUpdate(): void{
   
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.update(id, this.skill).subscribe(
       data => {
         this.router.navigate(['']);
       }, err => {
         alert("Error al modificar la educacion");
         this.router.navigate(['']);
       }
     )
   }

}
