import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  base_url = environment.servidor

  constructor(private http: HttpClient) { }

  getProductosPaginacion(page=1, limit=10){
    return this.http.get(`${this.base_url}/producto?page=${page}&limit=${limit}`);
  }

  guardarProducto(datos){
    return this.http.post(`${this.base_url}/producto`, datos)
  }

  actualizarImagen(datos, id){
    return this.http.post(`${this.base_url}/producto/${id}/actualiza-imagen`, datos)
  }

}
