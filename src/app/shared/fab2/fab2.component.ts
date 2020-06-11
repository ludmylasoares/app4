import { Component, OnInit } from '@angular/core';
import { MatFabMenu, MatFabMenuDirection } from '@angular-material-extensions/fab-menu';
import { ThemePalette } from '@angular/material/core';
import { faCog, faCode, faTablet, faSitemap, faTimes, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faAngular,faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-fab2',
  templateUrl: './fab2.component.html',
  styleUrls: ['./fab2.component.scss']
})
export class Fab2Component implements OnInit {

  TimesIcon = faTimes;
  BoxOpenIcon = faBoxOpen;
  CogIcon = faCog;
  AngularIcon = faAngular;
  CodeIcon = faCode;
  Css3Icon = faCss3;
  Html5Icon = faHtml5;
  TabletIcon = faTablet;
  SitemapIcon = faSitemap;
  
  title = 'fab-menu';
  direction: MatFabMenuDirection = 'top';
  color: ThemePalette = 'primary';
  layout = 'end end';

  fabButtonsRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create'
    },
    {
      id: 2,
      icon: 'mail'
    },
    {
      id: 3,
      icon: 'file_copy'

    },
    {
      id: 4,
      icon: 'phone'
    },
  ];

  fabProfessions: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/professions/svg/001-accountant.svg'
    },
    {
      id: 2,
      imgUrl: 'assets/professions/svg/005-accountant.svg'
    },
    {
      id: 3,
      imgUrl: 'assets/professions/svg/013-biochemist.svg'
    },
    {
      id: 4,
      imgUrl: 'assets/professions/svg/017-engineer.svg'
    },
  ];

  fabCountries: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/img/angular.png',
      tooltip: 'Projeto Angular 9',
      tooltipPosition: 'before'
    },
    {
      id: 2,
      imgUrl: 'assets/img/css3.png',
      tooltip: 'CSS3 nos padrões W3C',
      tooltipPosition: 'before'
    },
    {
      id: 3,
      imgUrl: 'assets/img/html5.png',
      tooltip: 'HTML5 nos padrões W3C',
      tooltipPosition: 'before'
    },
    {
      id: 4,
      imgUrl: 'assets/img/google.png',
      tooltip: 'Compatível com dispositivos móveis nos padrões Google',
      tooltipPosition: 'before'
    },
  ];

  fabNumbers: MatFabMenu[] = [
    {
      id: 1,
      imgUrl: 'assets/img/whats.png'
    },
    {
      id: 2,
      imgUrl: 'assets/img/github.png'
    },
    {
      id: 3,
      imgUrl: 'assets/img/linkedin.png'
    },
    {
      id: 4,
      imgUrl: 'assets/img/facebook.png'
    }
  ];

  ngOnInit(): void {
    
 }
}