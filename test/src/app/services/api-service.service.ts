import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  private URL = "http://localhost:4000/"

  constructor(private http: HttpClient, private router: Router) { }

  sendMail(Data){
    return this.http.post<any>('envio', Data)
  }
}
