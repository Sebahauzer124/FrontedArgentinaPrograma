import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-nuevoelab',
  templateUrl: './nuevoelab.component.html',
  styleUrls: ['./nuevoelab.component.css']
})
export class NuevoelabComponent implements OnInit {

  id!:number;
  tituloExp!:string;
  fechaExp!:string;
  descExp!:string;
  imagenExp!:string;

constructor(  private service :ExperienciaService,
  private router: Router) { }

ngOnInit(): void {

}

onCreate(): void{
  const experiencia = new Experiencia(this.id,this.tituloExp,this.fechaExp,this.descExp, this.imagenExp );
  this.service.addExperiencia(experiencia).subscribe(
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

