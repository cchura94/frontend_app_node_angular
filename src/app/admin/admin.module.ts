import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from '../primeng/primeng.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { MostrarPedidoComponent } from './components/pedido/mostrar-pedido/mostrar-pedido.component';


@NgModule({
  declarations: [
    PerfilComponent,
    UsuarioComponent,
    CategoriaComponent,
    ProductoComponent,
    ListaPedidoComponent,
    NuevoPedidoComponent,
    MostrarPedidoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
