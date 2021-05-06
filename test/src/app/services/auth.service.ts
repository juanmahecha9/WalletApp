import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private url = "http://localhost:4000"

  constructor(private http: HttpClient, private router: Router) { }
  /* Solicitus al servidor */
  registro(user) {
    return this.http.post<any>(this.url + '/new', user);
    /* retornar al sercio de la url un usuario que se va a recibir */
  }

  inicio(user) {
    return this.http.post<any>(this.url + '/login', user);
  }

  /* comprobar de manera simple si el local storage posee un dato llamado token para la navegacion en las rutas privadas */
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  cerrarS() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/inicio-sesion']);
    console.log('Cerrar Sesion');
  }

  private() {
    return this.http.get<any>(this.url + '/private');
  }
}