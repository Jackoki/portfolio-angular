import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/Knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de JavaScript',
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de Java',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de NodeJS',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de Angular',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Icone de React',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'Icone de MySQL',
    },
  ])
}
