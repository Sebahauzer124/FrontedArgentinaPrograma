import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { TokenService } from 'src/app/Servicios/token.service';
@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: Persona = new Persona("","","","","");
  isLogged = false;
  constructor(private service: PersonaService,private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    
  
this.getPersonas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }

  getPersonas(): void {
    this.service.getPersona().subscribe(  data =>{
      this.persona = data;
    }
  )
    
  }
}
