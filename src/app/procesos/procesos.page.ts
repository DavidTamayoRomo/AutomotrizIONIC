import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage implements OnInit {

  
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  carga(){
    this.navCtrl.navigateRoot('/carga');
  }


  descarga(){
    this.navCtrl.navigateRoot('/descarga');
  }

  vacio(){
    this.navCtrl.navigateRoot('/vacio');
  }
  

}
