import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule,
  ]
})
export class AdminModule { }
