import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from '../models/vehiculo.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  vehiculo:Vehiculo = null

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.obtenerLocalStorage()
  }
  
  iniciar(){
    console.log("Inicie");
    this.navCtrl.navigateRoot('/vehiculo');
  }

  obtenerLocalStorage(){
    this.vehiculo=JSON.parse(localStorage.getItem('vehiculo'))
  }
}
