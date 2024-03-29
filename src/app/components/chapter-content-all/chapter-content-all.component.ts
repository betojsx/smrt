import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';
import { Subject, Subscription } from 'rxjs';
import { EmitterService } from 'src/app/services/emitter/emitter.service';

@Component({
  selector: 'app-chapter-content-all',
  templateUrl: './chapter-content-all.component.html',
  styleUrls: ['./chapter-content-all.component.scss']
})
export class ChapterContentAllComponent implements OnInit {

  constructor() {}

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;


  private accordionContent = [
    {
      title: 'Alicerce',
      content: 'Oferece um curso preparatório de dois anos de duração no contraturno escolar. O curso acontece em uma escola particular parceira do Ismart. O objetivo é preparar os bolsistas para o ingresso no ensino médio nas escolas em que realizam o curso. Podem se candidatar ao Alicerce alunos matriculados no 7º ano do ensino fundamental, com até 13 anos completos e vindos de famílias com renda per capita de no máximo dois salários mínimos.'
    },
    {
      title: 'Bolsa Talento',
      content: 'Oferece bolsa de estudos para o Ensino médio em colégios particulares parceiros do Ismart. Após os três anos, os estudantes aprovados em cursos e faculdades de excelência podem continuar sendo apoiados pelo Ismart no ensino superior. Para se candidatar ao Bolsa Talento, o jovem deve estar matriculado no 9º ano do ensino fundamental, ter até 15 anos completos e vir de família com renda per capita de no máximo dois salários mínimos.'
    },
    {
      title: 'Ismart Online',
      content: 'Em 2014, o Ismart criou o Projeto Ismart Online para ampliar as oportunidades aos alunos que se destacaram no processo seletivo, mas não ingressaram nos projetos presenciais. Os alunos do Ismart Online têm acesso a uma plataforma de estudos online, realizam atividades em equipe e participam de workshops de formação. Quem se destaca é reconhecido e pode conquistar outras oportunidades de excelência. Para concorrer a uma bolsa do Ismart Online, o candidato deve estar matriculado no 7º ou 9° ano do ensino fundamental, não ter repetido o ano escolar e vir de família com renda per capita de no máximo dois salários mínimos.'
    },
    {
      title: 'Ensino superior',
      content: 'Projeto destinado aos alunos bolsistas do Ismart que concluem o Ensino médio e são aprovados nos vestibulares de cursos e faculdades de excelência, conforme critérios do Instituto. Os estudantes apoiados têm acesso a atividades com foco no desenvolvimento profissional, o que os prepara para o mercado de trabalho – de forma a proporcionar que alcancem posições de destaque – e uma bolsa-auxílio mensal para cobrir os principais custos dessa nova etapa.'
    },
    {
      title: 'Alumni',
      content: 'Projeto criado em 2017 por e para graduados Ismart, com o objetivo de criar uma rede Alumni Ismart engajada e fortalecida por meio de atividades que promovem a troca de experiências, desafios e oportunidades entre a rede. O projeto tem como valores ética, reciprocidade e diversidade.'
    }
  ];

  ngOnInit() {
  }
}
