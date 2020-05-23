import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-digitacao',
  templateUrl: './digitacao.component.html',
  styleUrls: ['./digitacao.component.css']
})
export class DigitacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var typed6 = new Typed('#typed6', {
      strings: [
        '<i>"No princípio Deus criou o céu e a terra, porém</i>^1000\n', 
        '<i>na Terra não havia forma nem vida e </i>^1000\n', 
        '<i>uma grande <strong>escuridão</strong> cobria o mar, então Deus disse: </i>^1000\n',
        '<i><strong>"- Haja Luz!"</strong></i>'
    
      ],
      typeSpeed: 40,
      backSpeed: 0,
      loop: true
    })
  }

}
