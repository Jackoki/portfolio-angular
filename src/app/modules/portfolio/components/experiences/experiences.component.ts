import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {
      summary: {
        strong: 'Técnico em eletromecânica',
        p: 'Jul 2020 | Dez 2021',
      },

      text: ' Durante o período contratado, fiquei encarregado de realizar uma pesquisa e um trabalho acadêmico em parceria ao SESI e SENAI a respeito de um problema comunitário a escolha, necessitando efetivar uma apresentação à uma banca de profissionais. O tema do trabalho selecionado foi a respeito do Sistema EaD e de seus Softwares, dando propostas de como otimizá-los.Durante o período contratado, fiquei encarregado de realizar uma pesquisa e um trabalho acadêmico em parceria ao SESI e SENAI a respeito de um problema comunitário a escolha, necessitando efetivar uma apresentação à uma banca de profissionais. O tema do trabalho selecionado foi a respeito do Sistema EaD e de seus Softwares, dando propostas de como otimizá-los.',
    },
  ])
}
