import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: any[] = [];
  usuario: any = {}
  displayModal: boolean;

   usuarioForm = new FormGroup({
     username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.listarUsuarios().subscribe(
      (res: any) => {
        this.usuarios = res;
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  showModalDialog() {
      this.resetForm()
      this.displayModal = true;
  }

  showEditModalDialog() {
      this.displayModal = true;
  }

  showModalEditarUsuarioDIalog(u){
    this.usuario = u
    this.prepararFormulario()
    this.showEditModalDialog()
  }

  resetForm(){
    this.usuario = {}
    this.usuarioForm.reset()
  }

  enviarUsuario(){
    if(this.usuario.id){
      this.usuarioService.modificarUsuario(this.usuario.id, this.usuarioForm.value).subscribe(
        (res: any) => {
          this.getUsuarios()
          this.displayModal = false
          this.resetForm()
        },
        (error: any) => {
          console.log(error)
          this.resetForm()
        }
      )
    }else{

      this.usuarioService.guardarUsuario(this.usuarioForm.value).subscribe(
        (res: any) => {
          this.getUsuarios()
          this.displayModal = false
          this.resetForm()
        },
        (error: any) => {
          console.log(error)
          this.resetForm()
        }
      )
    }
   
  }

  prepararFormulario(){
    this.usuarioForm = new FormGroup({
      username: new FormControl(this.usuario.username, [Validators.required]),
     email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
     password: new FormControl(this.usuario.password, [Validators.required])
   });
  }

}
