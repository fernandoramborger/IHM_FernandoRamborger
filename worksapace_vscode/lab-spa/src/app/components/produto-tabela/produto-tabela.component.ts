import { ProdutoDTO } from './../../dtos/produto.dtos';
import { ProdutoService } from './../../services/service/produto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent {
  produtos: ProdutoDTO[] = [];

  constructor(private service: ProdutoService) {
        this.service.findAll()
        .subscribe({
              next: (data) => this.produtos = data
              ,
              error: (e) => console.error( e )
             });
          }
}
