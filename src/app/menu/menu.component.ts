import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'process';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

nome = environment.nome
foto = environment.foto
id = environment.id




  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {}
  sair(){
    this.router.navigate(['/entrar'])
    environment.foto=''
    environment.nome=''
    environment.id=0
    environment.token=''

  }

}
