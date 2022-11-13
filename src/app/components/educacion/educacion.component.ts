import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  isLogged =false;
  constructor(private service: EducacionService)

  { }

   
  ngOnInit(): void {
    
      this.cargarEducacion();
    
 
     
    }
 
  

    cargarEducacion(): void {
      this.service.getEducacion().subscribe(
        data =>{
          this.educacion = data;
        }
      )
    }

 



  delete(id: number){
    if( id != undefined){
      this.service.deleteEducacion(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar")
          console.log(err);
        }
      )
    
  }

}


}

