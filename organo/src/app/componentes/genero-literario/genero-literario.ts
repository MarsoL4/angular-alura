import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css'
})
export class GeneroLiterario {
  livro = livros[0]; 
}
