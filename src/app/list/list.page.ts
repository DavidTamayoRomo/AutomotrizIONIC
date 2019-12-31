import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';
import { Carga } from '../models/carga.model';
import { Descarga } from '../models/descarga.model';
import { Vacio } from '../models/vacio.model';


import {  Platform, NavController } from '@ionic/angular';
import  domtoimage from 'dom-to-image';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


import Swal from 'sweetalert2'


//para generar el pdf
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs=pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  vehiculo:Vehiculo
  carga:Carga
  descarga:Descarga
  vacio:Vacio
  hora:any=this.fechaActual()

  pdfObj=null
  imagen1:any=null
  
 


  constructor(public navCtrl:NavController,
              private plt:Platform,
              private file:File,
              private fileOpener:FileOpener){}


  ngOnInit() {
    this.vehiculo = JSON.parse(localStorage.getItem('vehiculo'))
    this.carga = JSON.parse(localStorage.getItem('carga'))
    this.descarga = JSON.parse(localStorage.getItem('descarga'))
    this.vacio = JSON.parse(localStorage.getItem('vacio'))
  }

 


  fechaActual(){
    var fecha = new Date();
    let fechaCompleta=""
            let mes1= fecha.getMonth() + 1;
            if(fecha.getMonth()<10){
                if(fecha.getDate()<10){
                  fechaCompleta=fecha.getFullYear()+"-0" +mes1 + "-0"+fecha.getDate()+"  "+fecha.getHours()+":"+fecha.getMinutes();
                }else{
                  fechaCompleta=fecha.getFullYear()+"-0" +mes1 + "-"+fecha.getDate()+"  "+fecha.getHours()+":"+fecha.getMinutes();
                }
        
                
                
            }else{
                if(fecha.getDate()<10){
                  fechaCompleta=fecha.getFullYear()+"-" +mes1 + "-0"+fecha.getDate()+"  "+fecha.getHours()+":"+fecha.getMinutes();
                }else{
                  fechaCompleta=fecha.getFullYear()+"-" +mes1 + "-"+fecha.getDate()+"  "+fecha.getHours()+":"+fecha.getMinutes();
                }
                
                
            }
    return fechaCompleta
  }

 

  generarPdf(){
    const div = document.getElementById("printable-area");
    domtoimage.toPng(div).then((dataUrl)=> {
      this.imagen1=dataUrl
      localStorage.setItem('imagen1',this.imagen1)
      
      Swal.fire({
        position: 'top-end',
        timerProgressBar: true,
        title: 'Generando PDF',
        timer: 1000,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })
    })
    this.imagen1=localStorage.getItem('imagen1')
  }

  createPdf(){
    this.imagen1=localStorage.getItem('imagen1')
    this.generarPdf()
    let img= localStorage.getItem('imagen1')
    var docDefinition ={
      content: [
        {
          image: this.imagen1
        } 
      ]
    }
    
    this.pdfObj=pdfMake.createPdf(docDefinition);
    
  }

  savePdf(){
    this.createPdf()
    if(this.plt.is('cordova')){
      this.pdfObj.getBuffer((buffer)=>{
        var utf8 = new Uint8Array(buffer)
        var binaryArray = utf8.buffer
        var blob = new Blob([binaryArray], {type:'application/pdf'})

        this.file.writeFile(this.file.dataDirectory, 'mipdf.pdf',blob, {replace:true})
            .then(fileEntry =>{
              this.fileOpener.open(this.file.dataDirectory+ 'mipdf.pdf','application/pdf' )
            })
      })
    }else{
      //en pc
      this.pdfObj.download()
    }
  }

  
}
