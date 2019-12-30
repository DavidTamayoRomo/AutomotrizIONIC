import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';
import { NgForm } from '@angular/forms';
import { Carga } from '../models/carga.model';
import Swal from 'sweetalert2'
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  vehiculo:Vehiculo
  carga:Carga
  ngOnInit() {
    this.vehiculo = JSON.parse(localStorage.getItem('vehiculo'))
  }


  guardarCarga(forma:NgForm){
    this.carga=forma.value
    localStorage.setItem("carga",JSON.stringify(this.carga))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Carga guardada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.navCtrl.navigateRoot('/procesos');
  }
 

}
