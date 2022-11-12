import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL='https://bkdprueba1.herokuapp.com/personas/';

  constructor(private http:HttpClient) { }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL+'id/1');
  }
}
