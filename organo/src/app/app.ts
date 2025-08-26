import { Component, signal } from '@angular/core';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { LivroComponent } from './componentes/livro/livro.component';

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho, 
    Rodape,
    LivroComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
