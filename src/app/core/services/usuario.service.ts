import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  base_url = environment.servidor

  constructor(private http: HttpClient) { }

  listarUsuarios(){
    return this.http.get(`${this.base_url}/usuario`);
  }

  guardarUsuario(datos){
    return this.http.post(`${this.base_url}/usuario`, datos);
  }

  mostrarUsuario(id){
    return this.http.get(`${this.base_url}/usuario/${id}`);
  }

  modificarUsuario(id, datos){
    return this.http.put(`${this.base_url}/usuario/${id}`, datos);
  }

  eliminarUsuario(id){
    return this.http.delete(`${this.base_url}/usuario/${id}`);
  }
}
