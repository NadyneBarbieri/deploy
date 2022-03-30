import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  private router: Router

  constructor(private auth: AuthService) { }

  ngOnInit(){
    window.scroll(0,0)
  }
  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((res: UsuarioLogin) => {
      this.usuarioLogin = res 
      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id

      console.log( environment.token)
      console.log(environment.nome)
      console.log(environment.id)

      this.router.navigate(['/inicio'])
    }, erro=>{
      if(erro.status == 500){
        alert('Usuario ou senha incorretos')
      }
    })
  }

}
