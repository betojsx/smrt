import { Component, OnInit, HostListener, ViewChild, ElementRef, Inject, } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window.service';
import { EmitterService } from 'src/app/services/emitter/emitter.service';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {

  @ViewChild('header', { static: false }) header: ElementRef;

  public percentage = 0;

  private headerSrollBefore = 0;
  public headerStyle: { top } = { top: '0px' };

  public hasMenuOpened = false;
  public hasChaptersOpened = false;
  public _availableLanguage = '';

  public disableProgressBar = false;

  public get availableLanguage() {
    return this._availableLanguage;
  }
  public set availableLanguage(lang) {
    this._availableLanguage = lang;
  }

  constructor(
    private translate: TranslateService,
    private _eref: ElementRef,
    @Inject(DOCUMENT) private document: any,
    @Inject(WINDOW) private window: Window,
    private progressBar: ProgressBarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.disableProgressBarOnHome();
  }

  private disableProgressBarOnHome() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((value: NavigationEnd) => {
      this.disableProgressBar = Boolean(value.url === '/home');
    });
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe( change => {
      this.availableLanguage = this.setAvailableLanguage( change.lang, this.translate.getLangs() );
    });

    this.listenProgress();
  }

  /**
   * Make inactives languages available to choose from
   * @param { currentLang }:string
   * @param { allLanguages }:string
   * @return { availableLanguages }: string | array
   * */
  setAvailableLanguage(currentLang, allLanguages): string {
    const [
      availableLanguage
    ] = this.translate.getLangs().filter( lang => lang !== this.translate.currentLang );
    return availableLanguage;
  }

  onAvailableLanguageClick() {
    this.translate.use( this.availableLanguage );
    this.availableLanguage = this.setAvailableLanguage( this.translate.currentLang, this.translate.getLangs() );
  }

  toggle($event = null) {
    this.hasChaptersOpened = !this.hasChaptersOpened;
  }

  toggleMenu() {
    this.hasMenuOpened = !this.hasMenuOpened;
  }

  /**
   * Autohide sticky header
   * adapted from article below
   * @author https://osvaldas.info/auto-hide-sticky-header
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element      = this.header.nativeElement;
    let elHeight       = element.offsetHeight,
        dHeight        = this.document.body.offsetHeight,
        wHeight        = this.window.innerHeight,
        wScrollCurrent = this.window.pageYOffset,
        wScrollDiff    = this.headerSrollBefore - wScrollCurrent,
        elTop          = parseInt(this.headerStyle.top) + wScrollDiff;

    if ( wScrollCurrent <= 0 ) {
      this.headerStyle.top = '0px';
      EmitterService.get('headerOpen').emit(false);
    } else if ( wScrollDiff > 0 ) {
      this.headerStyle.top = ( elTop > 0 ? 0 : elTop ) + 'px';
      EmitterService.get('headerOpen').emit(true);
    } else if ( wScrollDiff < 0 ) {
        if ( wScrollCurrent + wHeight >= dHeight - elHeight )  {
            this.headerStyle.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
            EmitterService.get('headerOpen').emit(true);
        } else {
            this.headerStyle.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
            EmitterService.get('headerOpen').emit(false);
        }
    }

    this.headerSrollBefore = wScrollCurrent;
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      if (this.hasMenuOpened == true) {
        this.toggleMenu();
      }
    }
  }

  listenProgress() {
    this.progressBar
        .progressObs()
        .subscribe(
          (value) => this.percentage = value
        );
  }
}
