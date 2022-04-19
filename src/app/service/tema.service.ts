import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema'

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  apagarTema(idTema: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blognadynebarbieri.herokuapp.com/temas', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://blognadynebarbieri.herokuapp.com/temas/${id}`, this.token)
  }

  getByDescricaoTema(descricao: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`https://blognadynebarbieri.herokuapp.com/descricao/${descricao}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blognadynebarbieri.herokuapp.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blognadynebarbieri.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://blognadynebarbieri.herokuapp.com/temas/${id}`, this.token)
  }

}