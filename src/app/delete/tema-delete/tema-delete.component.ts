import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from './../../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
 

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.idTema =this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)
    })
  }

findByIdTema(id:number){
  this.temaService.getIdTema(id).subscribe((resp: Tema)=>{
    this.tema= resp
  }) 
}

apagar(){
  this.temaService.deleteTema(this.idTema).subscribe(()=>{
    alert('Tema Apagado com sucesso!')
    this.router.navigate(['/tema'])
  })
}

  
