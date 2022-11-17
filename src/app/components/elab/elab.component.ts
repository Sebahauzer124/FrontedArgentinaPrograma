import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia.model';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-elab',
  templateUrl: './elab.component.html',
  styleUrls: ['./elab.component.css']
})
export class ElabComponent implements OnInit {


  experiencia: Experiencia[] = [];

  isLogged =false;
  constructor(private service: ExperienciaService ,
     private tokenService: TokenService)

  { }

   
  ngOnInit(): void {
    
      this.cargarExperiencia();
      
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
 
     
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


