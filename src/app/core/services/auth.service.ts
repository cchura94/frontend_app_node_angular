import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) {}

  ingresarLogin(datos: any){
    return this.http.post(`${this.base_url}/api/auth/login`, datos)
  }

  getPerfil(){
    return this.http.get(`${this.base_url}/api/auth/perfil`)
  }


}
