import { Component, OnInit, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TestimonialsService } from "../../services/testimonials/testimonials.service";
import { ModalComponent } from "../../components/modal/modal.component";
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter-intern',
  templateUrl: './chapter-intern.component.html',
  styleUrls: ['./chapter-intern.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChapterInternComponent implements OnInit {

  @ViewChild('sidebar', {static: true, read: ElementRef}) sidebarComponent: ElementRef;
  @ViewChild('testimonial', {static: true, read: ElementRef}) testimonialComponent: ElementRef;
  @ViewChild('article', {static: true}) article: ElementRef;
  @ViewChild('modal', {static: true}) modal: ModalComponent;

  private title: string = '04. Trajetórias Ismart: Contato - Ismart';

  private chapterHatInfo = {
    'imageMobile': 'assets/images/hats/4-trajetorias-hat.jpg',
    'imageTablet': 'assets/images/hats/4-trajetorias-tablet.jpg',
    'image': 'assets/images/4-trajetorias.jpg',
    'title': 'Capítulo 04',
    'subtitle': 'Trajetórias Ismart'
  }
  private relatedInfo = [
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Seleção',
      'url': '04-trajetorias-ismart-selecao'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Prática',
      'url': '04-trajetorias-ismart-praticas'
    },
    {
      'image': 'assets/images/04-trajetorias-mobile.jpg',
      'title': '04. Trajetórias Ismart',
      'subtitle': 'Suporte',
      'url': '04-trajetorias-ismart-suporte'
    },
  ]
  
  constructor(
    private titleService: Title,
    private meta: Meta,
    private testimonials: TestimonialsService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({property: 'og:image', content: 'assets/images/hats/4-trajetorias-hat.jpg' } );
    this.meta.addTag({property: 'og:title', content: '04. Trajetórias Ismart: Contato - Ismart'});
  }


}
