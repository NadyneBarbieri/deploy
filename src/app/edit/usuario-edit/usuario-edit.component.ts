import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  idUsuario: number
  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoUsuario: string


  constructor(
    private authService: AuthService,
     private router: Router,
     private route : ActivatedRoute
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.idUsuario= this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
  }
  confirmSenha(event:any){
    this.confirmarSenha = event.target.value
  }
  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }
  
  atualizar(){
    this.usuario.tipo = this.tipoUsuario
    if(this.usuario.senha != this.confirmarSenha){
      alert('as senhas estão incorretas.')

    } else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/inicio'])
        alert('Usuario atualizado com secesso, faça o login lovamente!')
        environment.token = ''
        environment.nome = ''
        environment.foto= ''
        environment.id= 0
        
        this.router.navigate(['/entrar'])
      })
     }

  }
  findByIdUser(id: number){
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }
}
