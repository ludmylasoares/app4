import { Component, OnInit } from '@angular/core';
import { faCog, faCode, faTablet, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faAngular,faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  CogIcon = faCog;
  AngularIcon = faAngular;
  CodeIcon = faCode;
  Css3Icon = faCss3;
  Html5Icon = faHtml5;
  TabletIcon = faTablet;
  SitemapIcon = faSitemap;
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
