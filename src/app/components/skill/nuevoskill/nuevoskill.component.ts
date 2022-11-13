import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Model/skill.model';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-nuevoskill',
  templateUrl: './nuevoskill.component.html',
  styleUrls: ['./nuevoskill.component.css']
})
export class NuevoskillComponent implements OnInit {
  id!:number;
  tituloSkill!:string;        
  imagenSkill!:string;
  porcentaje!:number;

constructor(  private service :SkillService,
  private router: Router) { }

ngOnInit(): void {

}

onCreate(): void{
  const skill = new Skill(this.id,this.tituloSkill,this.imagenSkill,this.porcentaje );
  this.service.addSkill(skill).subscribe(
    data =>{
      alert("Cliente añadida correctamente");
      this.router.navigate(['home']);
    }, err =>{
      alert("falló");
      this.router.navigate(['home']);
    }
  )
}

}
