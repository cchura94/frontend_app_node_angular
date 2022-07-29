import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from '../app.main.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { MostrarPedidoComponent } from './components/pedido/mostrar-pedido/mostrar-pedido.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'producto',
        component: ProductoComponent
      },
      {
        path: 'pedido',
        component: ListaPedidoComponent
      },
      {
        path: 'pedido/nuevo',
        component: NuevoPedidoComponent
      },
      {
        path: 'pedido/:id',
        component: MostrarPedidoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
