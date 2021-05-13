import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Skill } from '../../models/skill.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/json');

  }


  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.url_api}/skills/all`);
  }
}
