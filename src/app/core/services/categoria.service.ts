import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  base_url = environment.servidor

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(`${this.base_url}/categoria`);
  }

  guardarCategoria(datos){
    return this.http.post(`${this.base_url}/categoria`, datos);
  }

  mostrarCategoria(id, datos){
    return this.http.get(`${this.base_url}/categoria/${id}`, datos);
  }

  modificarCategoria(datos, id){
    return this.http.put(`${this.base_url}/categoria/${id}`, datos);
  }

  eliminarCategoria(id){
    return this.http.delete(`${this.base_url}/categoria/${id}`);
  }
}
