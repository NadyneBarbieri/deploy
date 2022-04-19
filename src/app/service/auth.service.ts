
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogar } from '../model/UsuarioLogar';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  logar(usuarioLogar: UsuarioLogar): Observable<UsuarioLogar>{
    return this.http.post<UsuarioLogar>('https://blognadynebarbieri.herokuapp.com/usuarios/logar', usuarioLogar)


  }

  cadastrar(Usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blognadynebarbieri.herokuapp.com/usuarios/cadastrar', Usuario)

  }

  atualizar(usuario: Usuario): Observable<Usuario> {

    return this.http.put<Usuario>('https://blognadynebarbieri.herokuapp.com/usuarios/atualizar',usuario);

   }


getByIdUsuario(id: number): Observable<Usuario>{
  return this.http.get<Usuario>(`https://blognadynebarbieri.herokuapp.com/usuarios/${id}`)
}


  logado(){
    let ok = false
    if(environment.token !=''){
      ok = true
    }
    return ok
  }

  adm(){
    let ok = false
    if(environment.tipo == 'Admin'){
      ok = true
    }
    return ok
  }

}
