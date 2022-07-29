import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [MessageService]
})
export class CategoriaComponent implements OnInit {

  titulo: string = "mi titulo"
  categorias:any[] = []  
  
    nombre: string
    detalle: string

    items

  constructor(private categoriaService: CategoriaService, private messageService: MessageService) { }

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
        this.messageService.add({severity:'success', summary: 'Categoria Registrada', detail: 'La categoria ha sido registrada'});
        // alert('categoria Registrada')
      },
      (error: any) => {
        this.messageService.add({severity:'error', summary: 'Error al registrar', detail: 'Ocurio un error al registrar la categoria'});
      }
    )
  }

}
