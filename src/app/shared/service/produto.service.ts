import { ProdutoSeletor } from 'src/app/shared/model/seletor/produto.seletor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:8080/api/produtos';

  constructor(private httpClient: HttpClient) { }

  //declarar os metodos da API Rest
  listarTodos(): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(this.API);
  }
  listarComSeletor(seletor: ProdutoSeletor) {
    return this.httpClient.post<Array<Produto>>(this.API + '/filtro', seletor);
  }
  salvar(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.API, produto);
  }

}
