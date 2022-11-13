import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL='https://sebahauzer124.herokuapp.com/personas/';

  constructor(private http:HttpClient) { }

  


    public detail(id: number): Observable<Persona>{
      return this.http.get<Persona>(this.URL + `traer/${id}`);
    } 
  
    public save(persona: Persona): Observable<any>{
      return this.http.post<any>(this.URL + 'crear', persona);
    }
  
    public update(id: number, persona:Persona) :Observable<any>{
      return this.http.put<any>(this.URL + `editar/${id}`, persona);
    }
  
    public delete(id: number): Observable<any>{
      return this.http.delete<any>(this.URL + `borrar/${id}`);
    }

    public getPersona(): Observable<Persona>{
      return this.http.get<Persona>(this.URL+ 'traer/perfil');
    }
}
