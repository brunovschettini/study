import { Animais } from './../animais';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css'],
})
export class GradeFotosAnimaisComponent {
  @Input() public animais!: Animais;
}
