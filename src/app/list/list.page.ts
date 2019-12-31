import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';
import { Carga } from '../models/carga.model';
import { Descarga } from '../models/descarga.model';
import { Vacio } from '../models/vacio.model';


import { LoadingController, Platform, NavController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import  domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import html2canvas from 'html2canvas';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

import Swal from 'sweetalert2'



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

  
 
  loading: any;
/*
  constructor(public loadingCtrl: LoadingController,
    private file: File,
    private fileOpener: FileOpener,
    private platform:Platform,
    private ft:FileTransfer,
    private documnet: DocumentViewer) {
    
  }*/

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

  /*
  openLocalPdf(){
    
    let filePAth = this.file.applicationDirectory+'www/assets';
    if (this.platform.is('android')) {
      let fakeName=Date.now()
      this.file.copyFile(filePAth,'automotriz .pdf',this.file.dataDirectory,`${fakeName}.pdf`)
                        .then(result =>{
                          this.fileOpener.open(result.nativeURL, 'application/pdf')
                        })
    }else{
      const options:DocumentViewerOptions={
        title:'Mi pdf'
      }
      this.documnet.viewDocument(`${filePAth}/automotriz .pdf`,'application/pdf',options)
    }
  }


  exportPdf1() {
    
    let filePath = this.file.applicationDirectory+'www/assets';
    const div = document.getElementById("printable-area");
    const options = { background: "white", height: div.clientWidth, width: div.clientHeight };
    domtoimage.toPng(div).then((dataUrl)=> {
  
      var doc = new jsPDF('portrait');
      doc.addImage(dataUrl, 'PNG',10, 10);
  
      //doc.save(`automotriz.pdf`);
      

      let pdfOutput = doc.output();
      
      var blob = new Blob([pdfOutput], { type: "application/pdf" });


    
      
      let options: IWriteOptions = { replace: true };
      
      if (this.platform.is('android')) {
        this.file.createFile(filePath,'automotriz .pdf',true)
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ya no se',
          showConfirmButton: true,
          timer: 10500
        })
        
        
      }
      


      })
    

     
  }
 
  

  */


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

 



  createPdf(){
    var docDefinition ={
      content:[
        {text:'REMINDER',style:'header'},
        {text:new Date().toTimeString(), alignment:'right'},

        {text:'From',style:'subheader'},
        {text:'soy david tamayo'},

        {text:'To',style:'subheader'},
        'soy to',

        {text: 'Marca:'+ this.vehiculo.marca, style:'story',margin:[0,20,0,20]},
        
      ],
      styles:{
        header:{
          fontSize:18,
          bold:true,    
        },
        subheader:{
          fontSize:14,
          bold:true, 
          margin:[0,15,0,0]
        },
        story:{
          italic:true,
          alignment:'center',
          width:'50%'
        }
      }
    }
    this.pdfObj=pdfMake.createPdf(docDefinition);
    console.log(this.pdfObj);

  }

  savePdf(){
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
      this.pdfObj.download()
    }
  }

  
}
