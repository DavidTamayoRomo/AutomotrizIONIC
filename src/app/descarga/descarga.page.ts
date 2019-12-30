import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Descarga } from '../models/descarga.model';
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.page.html',
  styleUrls: ['./descarga.page.scss'],
})
export class DescargaPage implements OnInit {

  descarga:Descarga

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  guardarDescarga(forma:NgForm){
    this.descarga=forma.value
    localStorage.setItem("descarga",JSON.stringify(this.descarga))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Descarga guardada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.navCtrl.navigateRoot('/procesos');
  }

}
