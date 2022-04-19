import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';
import { UsuarioLogar } from '../model/UsuarioLogar';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string
  fotoUsuario: string
  senhaAdm: string
  okAdm = false

  constructor(

    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService

  ) { }

  ngOnInit(){
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  validarFoto(event: any) {
    this.fotoUsuario = event.target.value
  }

  receberSenhaAdm(event:any) {
    this.senhaAdm = event.target.value
  }

  validarSenhaAdm() {
    if(this.senhaAdm == "123") {
      this.okAdm = true
      this.alertas.showAlertSuccess("Senha admin autenticada")
    }
    else {
      this.alertas.showAlertDanger("Senha administrador incorreta")
      this.okAdm = false
    }
    return this.okAdm
  }

  cadastrar() {

    if (this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('As senhas estão incorretas!')
    } else if (this.tipoUsuario != "Profissional" && this.tipoUsuario != "Recrutadora" && this.tipoUsuario != "Admin") {
      this.alertas.showAlertDanger('Selecione o tipo de perfil!')
    } else if (this.tipoUsuario == "Admin" && this.okAdm == false ) {
      this.alertas.showAlertDanger('Insira a senha de admin!')
    }

    else {

      if (this.fotoUsuario == null) {
        this.fotoUsuario = "https://i.imgur.com/wBsUWjq.png"
      }

      this.usuario.tipo = this.tipoUsuario
      this.usuario.foto = this.fotoUsuario
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
        this.router.navigate(['/logar'])
      },

        erro => {
          if (erro.status == 500 || erro.status == 401 || erro.status == 400) {
            this.alertas.showAlertDanger('Campos incorretos ou usuário já cadastrado')
          }
        }

      )
    }

  }

}
