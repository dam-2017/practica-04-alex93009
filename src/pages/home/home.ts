import { Component, Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  resultado:number;
  @Input () numero1;
  @Input () numero2;

  constructor(public navCtrl: NavController, params:NavParams) {
    
  }

  suma($event,val1,val2){
    this.resultado = parseInt(val1)+parseInt(val2);
    console.log(this.resultado);
  }

  resta($event,val1,val2){
    this.resultado = parseInt(val1)-parseInt(val2);
    console.log(this.resultado);
  }

  division($event,val1,val2){
    this.resultado = parseInt(val1)/parseInt(val2);
    console.log(this.resultado);
  }

  multiplicacion($event,val1,val2){
    this.resultado = parseInt(val1)*parseInt(val2);
    console.log(this.resultado);
  }

  porcentaje($event,val1,val2){
    this.resultado = parseInt(val1)%parseInt(val2);
    console.log(this.resultado);
  }

}
