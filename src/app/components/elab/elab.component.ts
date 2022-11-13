import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia.model';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-elab',
  templateUrl: './elab.component.html',
  styleUrls: ['./elab.component.css']
})
export class ElabComponent implements OnInit {


  experiencia: Experiencia[] = [];

  isLogged =false;
  constructor(private service: ExperienciaService)

  { }

   
  ngOnInit(): void {
    
      this.cargarExperiencia();
    
 
     
    }
 
  

    cargarExperiencia(): void {
      this.service.getExperiencia().subscribe(
        data =>{
          this.experiencia = data;
        }
      )
    }

 



  delete(id: number){
    if( id != undefined){
      this.service.deleteExperiencia(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar")
          console.log(err);
        }
      )
    
  }

}

  }


