import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProdutoTabelaComponent } from './components/produto-tabela/produto-tabela.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
{
  path: 'produtotabela',
  component: ProdutoTabelaComponent
},

{
  path:'',
  component:HomeComponent
},

{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
