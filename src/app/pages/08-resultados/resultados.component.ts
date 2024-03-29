import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title = 'Resultados > Ismart - RA 2018-2019';

  public chapterHatInfo = {
    image: 'assets/images/8-resultados.jpg',
    imageMobile: 'assets/images/3-timeline.jpg',
    imageTablet: 'assets/images/4-trajetorias.jpg',
    title: 'CHAPTER_8.TITLE',
    subtitle: 'CHAPTERS.08'
  };
  public relatedInfo: Array<any> = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/8-resultados.jpg' } );
    this.meta.addTag({property: 'og:title', content: 'Resultados > Ismart - RA 2018-2019'});
    this.meta.addTag({property: 'og:keywords', content: 'ismart20anos, ead, ensino médio, ensino fundamental, faculdade, bolsa de estudos, alumni, protagonista, processo seletivo, educação'});
    this.meta.addTag({property: 'og:description', content: 'Um trabalho que envolve a dedicação da equipe Ismart e parceiros com foco, propósito e determinação.'});

    this.translate.get('CHAPTER_8').subscribe( (data: any) => {
      this.relatedInfo = data.RELATED;
    });
  }

}
