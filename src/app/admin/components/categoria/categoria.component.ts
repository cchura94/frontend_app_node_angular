import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  titulo: string = "mi titulo"
  categorias:any[] = []  
  
    nombre: string
    detalle: string

    items

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listarCategorias()
  }

  listarCategorias(){
    this.categoriaService.getCategorias().subscribe(
      (res: any) => {
        this.categorias = res
      }
    )
  }
  guardarCategoria(){
    let cat = {
      nombre: this.nombre,
      detalle: this.detalle
    }
    this.categoriaService.guardarCategoria(cat)
      .subscribe(
      (res: any) => {
        this.listarCategorias()
        alert('categoria Registrada')
      }
    )
  }

}
