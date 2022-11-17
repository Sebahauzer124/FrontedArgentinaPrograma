import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion.model';
import { Persona } from 'src/app/Model/persona.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {

  id!:number;
  descEdu!:string;
  fechaEdu!:string;
  imagenEdu!:string;
  tituloEdu!:string;
  personaId!:number;

constructor(  private service :EducacionService,
  private router: Router) { }

ngOnInit(): void {

}

onCreate(): void{
  const educacion = new Educacion(this.id,this.tituloEdu,this.fechaEdu,this.descEdu, this.imagenEdu );
  this.service.addEducacion(educacion).subscribe(
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
