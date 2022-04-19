import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { SobreAdatechComponent } from './sobre-adatech/sobre-adatech.component';
import { LogarComponent } from './logar/logar.component';




const routes: Routes = [

  {path:'',redirectTo:'sobre-adatech',pathMatch:'full'}, 
  {path:'logar', component: LogarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'contato', component: ContatoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'tema', component: TemaComponent},
  {path:'tema-edit/:id', component: TemaEditComponent},
  {path:'tema-delete/:id', component: TemaDeleteComponent},
  {path:'usuario-edit/:id',component: UsuarioEditComponent},
  {path:'postagem-edit/:id', component: PostagemEditComponent},
  {path:'postagem-delete/:id', component: PostagemDeleteComponent},
  {path:'minhas-postagens/:id', component: MinhasPostagensComponent},
  {path: 'sobre-adatech', component: SobreAdatechComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
