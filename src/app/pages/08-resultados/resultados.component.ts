import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  
  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;
  
  private title: string = '08. Resultados - Ismart';

  private chapterHatInfo = {
    'image': 'assets/images/8-resultados.jpg',
    'imageMobile': 'assets/images/3-timeline.jpg',
    'imageTablet': 'assets/images/4-trajetorias.jpg',
    'title': 'CHAPTER_8.TITLE',
    'subtitle': 'CHAPTERS.08'
  }
  private relatedInfo = [
    {
      'image': 'assets/images/9-lista-de-parceiros-mobile.jpg',
      'title': '09.',
      'subtitle': 'Lista de parceiros',
      'url': '09-lista-parceiros'
    },
    {
      'image': 'assets/images/10-expediente-mobile.jpg',
      'title': '10.',
      'subtitle': 'Expediente',
      'url': '10-expediente'
    },
    {
      'image': 'assets/images/03-linha-do-tempo.jpg',
      'title': '03.',
      'subtitle': 'Linha do Tempo',
      'url': '03-linha-do-tempo'
    }
  ]
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/8-resultados.jpg' } );
    this.meta.addTag({property: 'og:title', content: '08. Resultados - Ismart'});
  }

}
