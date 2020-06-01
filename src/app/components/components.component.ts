import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { ParticlesConfig } from 'particles.js/particles.js';
import Typed from 'typed.js';

declare var particlesJS: any;

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor( private renderer : Renderer2, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');

        particlesJS('particles-js', ParticlesConfig, function() {
            console.log('callback - particles.js config loaded');
            });

        var typed3 = new Typed('#typed3', {
            strings: ['<strong>Analista</strong> administrativo,', 
                      '<strong>Analista</strong> de sistemas e', 
                      '<strong>Analista</strong> de dados!'],
            typeSpeed: 30,
            backSpeed: 0,
            smartBackspace: true, // this is a default
            loop: true
            });

        var typed6 = new Typed('#typed6', {
            strings: ['<i>"Procuro experiências inovadoras em minha carreira e a participação em projetos que façam a diferença na vida das pessoas. Acredito que só assim podemos continuar em constante evolução!"</i>'],
            typeSpeed: 20,
            cursorChar: '_',  
            backSpeed: 0,
            loop: false
            });
           }
    
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
