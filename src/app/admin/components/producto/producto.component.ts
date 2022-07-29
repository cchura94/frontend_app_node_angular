import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProductoService } from 'src/app/core/services/producto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class ProductoComponent implements OnInit {

    base_url_img = environment.asset_url

    product: any;

    products: any[]

    selectedProducts: any[];

    submitted: boolean;

    productDialog: boolean;
    statuses: any[]
    categorias: any[]

    productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      stock: new FormControl(0),
      estado: new FormControl(true),
      descripcion: new FormControl(''),
      categoriaId: new FormControl('', [Validators.required])
    });

    uploadedFiles: any[] = []
    producto_imagen_id: number = 0
    displayModalImagen: boolean


  constructor(private productoService: ProductoService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private categoriaService: CategoriaService) { }

  totalRecords: number;
  loading: boolean;

  ngOnInit(): void {
    this.loading = true;

    this.statuses = [
            {label: 'ACTIVO', value: true},
            {label: 'INACTIVO', value: false}
        ];

    this.getProductos()
    this.getCategorias()
  }

  getProductos(event?: LazyLoadEvent){
    this.loading = true;
    let page = 1
    let limit = 10
    if(event){
      page = (event.first / event.rows) +1
      limit = event.rows
    }

    this.productoService.getProductosPaginacion(page, limit).subscribe(
      (res: any) => {
        this.products = res.rows
        this.totalRecords = res.count
      }
    )

    this.loading = false;
  }

  mostrarModalDialogImagen(producto: any){
    this.producto_imagen_id = producto.id
    this.displayModalImagen = true
  }

  onBeforeUploadListener(event, uploader:any){
    console.log("ID: ", this.producto_imagen_id)
    console.log(uploader.files)
    this.uploadedFiles = uploader.files

    // form data
    let formData = new FormData;
    formData.append("imagen", this.uploadedFiles[0])
    this.productoService.actualizarImagen(formData, this.producto_imagen_id).subscribe(
      (res: any) => {
        this.displayModalImagen = false;
        this.getProductos();
      }
    )

  }

  getCategorias(){
    this.categorias = []
    this.categoriaService.getCategorias().subscribe(
      (res: any) => {
        this.categorias = res
      }
    )
  }

  openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    saveProduct() {
      this.submitted = true;

     
          if (this.product.id) {
              // this.products[this.findIndexById(this.product.id)] = this.product;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          }
          else {
              this.productoService.guardarProducto(this.productoForm.value).subscribe(
                (res: any) => {
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
                  this.getProductos()
                }, (error: any) => {
                  this.messageService.add({severity:'error', summary: 'Error al guardar', detail: 'Producto Creado', life: 3000});
                }
              )
              
              // this.product.id = this.createId();
              // this.product.image = 'product-placeholder.svg';
              // this.products.push(this.product);
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
  }

    deleteSelectedProducts() {
      /*this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => !this.selectedProducts.includes(val));
              this.selectedProducts = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
          }
      });
      */
  }

}
