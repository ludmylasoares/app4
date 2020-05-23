import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'particles.js/particles.js';

declare var particlesJS: any;

@Component({
  selector: 'app-particulas',
  templateUrl: './particulas.component.html',
  styleUrls: ['./particulas.component.css']
})
export class ParticulasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // https://vincentgarreau.com/particles.js/
      particlesJS('particles-js', './assets/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
      });
    } 
  }

