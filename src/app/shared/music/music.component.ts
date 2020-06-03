import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Setup the new Howl.
    const sound = new Howl({
      src: ['assets/audios/Jimmy Cliff - I Can See Clearly Now With.mp3']
    });

    // Inicia o som.
    sound.play();

    // Alterar volume global.
    Howler.volume(0.5);
  }

}
