import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { Educacion } from '../Model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL='https://sebahauzer124.herokuapp.com/educacion/'
  constructor(private http:HttpClient) { }

  public getEducacion(): Observable<Educacion[]>{
  return this.http.get<Educacion[]>(this.URL+'traer');
  }
  public addEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.URL+'crear',educacion);
  }
  public update(id: number, educacion:Educacion) :Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, educacion);
  }
  /* por que tiene que ser del tipo void y no Educacion*/
  public deleteEducacion(idEdu:number): Observable<void>{
    return this.http.delete<void>(this.URL+`borrar/${idEdu}`);
  }
  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `traer/${id}`);
  } 
}