import { Component, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class LivroComponent {

  livro = input.required<Livro>(); //Property Binding (Input Property Binding)

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  };

}
