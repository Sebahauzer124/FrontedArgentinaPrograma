import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import {Experiencia} from '../Model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL='https://sebahauzer124.herokuapp.com/experiencia/';

  constructor(private http:HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]>{
  return this.http.get<Experiencia[]>(this.URL+'traer');
  }
  public addExperiencia(experiencia:Experiencia): Observable<any>{
    return this.http.post<Experiencia>(this.URL+'crear',experiencia);
  }
  public update(id: number, experiencia:Experiencia) :Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, experiencia);
  }
  /* por que tiene que ser del tipo void y no Educacion*/
  public deleteExperiencia(idExp:number): Observable<void>{
    return this.http.delete<void>(this.URL+`borrar/${idExp}`);
  }
  public detail(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL + `traer/${id}`);
  } 
}
