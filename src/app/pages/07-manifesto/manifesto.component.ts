import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManifestoComponent implements OnInit {
  
  @ViewChild('share', {static: true, read: ElementRef}) shareComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  private title: string = '07. Manifesto Ismart - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/7-manifesto-hat.jpg',
    'imageTablet': 'assets/images/hats/7-manifesto-ismart-tablet.jpg',
    'image': 'assets/images/7-manifesto.jpg',
    'title': 'CHAPTER_7.TITLE',
    'subtitle': 'CHAPTERS.07'
  }
  
  private relatedInfo = [
    {
      'image': 'assets/images/08-resultados-mobile.jpg',
      'title': '08.',
      'subtitle': 'Resultados 2018',
      'url': '08-resultados'
    },
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
    }
  ]

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/7-manifesto-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '07. Manifesto Ismart - Ismart'});
  }

}
