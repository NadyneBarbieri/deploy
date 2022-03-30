import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  usuario: Usuario = new Usuario
  ConfirmarSenha: String
  TipoUsuario: string

  constructor(private  authService: AuthService,
    private router : Router
    ){}

  ngOnInit(): void {
    window.scroll(0,0)
  }
  confirmSenha(event:any){
    this.ConfirmarSenha = event.target.value

  }
  tipoUser(event: any){
    this.TipoUsuario = event.target.value
  }
  cadastrar(){
    this.usuario.tipo = this.TipoUsuario
    if(this.usuario.senha != this.ConfirmarSenha){
      alert('as senhas estão incorretas.')

    } else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com secusso')
      })
     }

  }

}
