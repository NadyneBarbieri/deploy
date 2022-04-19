import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { environment } from "src/environments/environment.prod"
import { UsuarioLogar } from "../model/UsuarioLogar"
import { AlertasService } from "../service/alertas.service"
import { AuthService } from "../service/auth.service"


@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

    usuarioLogar: UsuarioLogar = new UsuarioLogar()
  
    constructor(

        private auth: AuthService,
        private router: Router,
        private alertas: AlertasService

    ) { }

    ngOnInit() {
        window.scroll(0,0)
    }

    logar() {
        this.auth.logar(this.usuarioLogar).subscribe((resp: UsuarioLogar)=>{
            this.usuarioLogar = resp
            environment.id = this.usuarioLogar.id
            environment.token = this.usuarioLogar.token
            environment.nome = this.usuarioLogar.nome
            environment.foto = this.usuarioLogar.foto
            environment.tipo = this.usuarioLogar.tipo

            console.log(environment.id)
            console.log(environment.token)
            console.log(environment.nome)
            console.log(environment.foto)
            console.log(environment.tipo)

            this.router.navigate(['/inicio'])
            }
            , erro => {
                if(erro.status == 500 || erro.status == 401) {
                    this.alertas.showAlertDanger('Email ou senha incorretos!')
                }
            }
        )
    }

}