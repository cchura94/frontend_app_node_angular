import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from '../interceptors/http-interceptor.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    }]
})
export class CoreModule { }
