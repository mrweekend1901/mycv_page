import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  private apiUrl = 'http://localhost:3000'; // Địa chỉ của API

  constructor(private http: HttpClient) {}

  getInfor(): Observable<any> {
    return this.http.get(`${this.apiUrl}/information`);
  }

  getTechSkill(): Observable<any> {
    return this.http.get(`${this.apiUrl}/techskill`);
  }

  getOtherSkill(): Observable<any> {
    return this.http.get(`${this.apiUrl}/otherskill`);
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  getEducations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/education`);
  }

  getCertificates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/certificate`);
  }

  getActivates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activate`);
  }

  getAbouts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/about`);
  }
}
