import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vacio } from '../models/vacio.model';
import Swal from 'sweetalert2'
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-vacio',
  templateUrl: './vacio.page.html',
  styleUrls: ['./vacio.page.scss'],
})
export class VacioPage implements OnInit {

  vacio:Vacio

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

 

  guardarVacio(forma:NgForm){
    this.vacio=forma.value
    localStorage.setItem("vacio",JSON.stringify(this.vacio))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Prueba de vacio guardada correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.navCtrl.navigateRoot('/procesos');
  }

}
