import { tap, switchMap, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';

const EXPERA_DIGITACAO = 300;

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {


  acoesInput = new FormControl();
  todasAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => {
      console.log('Fluxo inicial');
    })
  );

  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(

    tap(() => {
      console.log('Fluxo do filtro');
    }),
    tap(console.log),
    filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
    tap(console.log),
    debounceTime(EXPERA_DIGITACAO),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
    tap(console.log),
  );

  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);
  // acoes$ = this.acoesInput.valueChanges.pipe(
  //   tap(console.log),
  //   switchMap(
  //     (valorDigitado) => this.acoesService.getAcoes(valorDigitado)
  //   ),
  //   tap(console.log)
  // );
  // acoes: Acoes;
  // private $subscription: Subscription;
  // acoes$ = this.acoesService.getAcoes();

  constructor(private acoesService: AcoesService) { }

  //ngOnInit(): void {
  // this.$subscription = this.acoesService.getAcoes().subscribe((acoes) => {
  //   this.acoes = acoes;
  // });    
  //}

  // ngOnDestroy() {
  //   this.$subscription.unsubscribe();
  // }

}
