import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DataUser } from '../models/data.user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:4000"
  data: DataUser;
  constructor(private http: HttpClient, private router: Router) { }

  findById(id: any) {
    return this.http.get<any>(this.url+'/findById/' + id);
  }

  upgradeData(Id, nuevosDatos1) {
    let params = JSON.stringify(nuevosDatos1);
    /* convertir datos en un json */
    let options = {
        headers: new HttpHeaders({ 
            'Content-type': 'application/json' }) 
        };
    /* Se crea una contante la cual sirve para indicar que la informacion que se enviara es de tipo json */
    return this.http.put(
        this.url + '/actualizar/' + Id,
        params, // se indica que son datos en forma de json
        options // se indica que son datos en forma de json
    ).pipe(res => res)
    /* se trae el metodo put, se crea la ruta mas su id */
};

}
