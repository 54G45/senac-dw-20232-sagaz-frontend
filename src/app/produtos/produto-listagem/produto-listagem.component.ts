import { ProdutoService } from './../../shared/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoSeletor } from 'src/app/shared/model/seletor/produto.seletor';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit {


  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    //similar ao metodo main do JAva
    this.buscarProdutos();
  }

  buscarProdutos(){

    this.produtoService.listarTodos().subscribe(
      resultado=>{
        this.produtos = resultado;
      },
      erro => {
        console.log('erro', erro);
      }
    )


  }

  editar(id: number){

  }

}
