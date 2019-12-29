import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  vehiculo:Vehiculo
  autos:string[]=["Abarth",
  "Alfa Romeo",
  "Aro",
  "Asia",
  "Asia Motors",
  "Aston Martin",
  "Audi",
  "Austin",
  "Auverland",
  "Bentley",
  "Bertone",
  "Bmw",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Corvette",
  "Dacia",
  "Daewoo",
  "Daf",
  "Daihatsu",
  "Daimler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Galloper",
  "Gmc",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Innocenti",
  "Isuzu",
  "Iveco",
  "Iveco-pegaso",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land-rover",
  "Ldv",
  "Lexus",
  "Lotus",
  "Mahindra",
  "Maserati",
  "Maybach",
  "Mazda",
  "Mercedes-benz",
  "Mg",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Nissan",
  "Opel",
  "Peugeot",
  "Pontiac",
  "Porsche",
  "Renault",
  "Rolls-royce",
  "Rover",
  "Saab",
  "Santana",
  "Seat",
  "Skoda",
  "Smart",
  "Ssangyong",
  "Subaru",
  "Suzuki",
  "Talbot",
  "Tata",
  "Toyota",
  "Umm",
  "Vaz",
  "Volkswagen",
  "Volvo",
  "Wartburg"]


  marcaC:boolean
  refrigeranteC:boolean
  lubricanteC:boolean
  
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  guardarVehiculo(forma:NgForm){
    this.vehiculo=forma.value
    localStorage.setItem("vehiculo",JSON.stringify(this.vehiculo))
    this.navCtrl.navigateRoot('/procesos');
  }

  inicio(){
    this.navCtrl.navigateRoot('/home');
  }

  

}
