import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{Observable} from 'rxjs';
import {Experiencia} from '../Model/experiencia.model';
import { Skill } from '../Model/skill.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL='https://sebahauzer124.herokuapp.com/skill/'
  constructor(private http:HttpClient) { }

  public getSkill(): Observable<Skill[]>{
  return this.http.get<Skill[]>(this.URL+'traer');
  }
  public addSkill(skill:Skill): Observable<Skill>{
    return this.http.post<Skill>(this.URL+'crear',skill);
  }
  public update(id: number, skill:Skill) :Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, skill);
  }
  /* por que tiene que ser del tipo void y no Educacion*/
  public deleteSkill(idSkill:number): Observable<void>{
    return this.http.delete<void>(this.URL+`borrar/${idSkill}`);
  }
  public detail(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.URL + `traer/${id}`);
  } 
}

