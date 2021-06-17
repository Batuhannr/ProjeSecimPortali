import { Konular } from './../../../models/Konular';
import { Ogrenciler } from 'src/app/models/Ogrenciler';
import { Dersler } from './../../../models/Dersler';
import { ApiService } from './../../../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecProje } from './../../../models/SecilenProjeler';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-secProje-dialog',
  templateUrl: './secProje-dialog.component.html',
  styleUrls: ['./secProje-dialog.component.css']
})
export class SecProjeDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: SecProje;
  islem : string;
  selectKonu:string;
  selectOgrNo:string;
  selectDers:string;
  frm : FormGroup;
  dersId:string ="";
  dersler : Dersler[];
  ogrId:string ="";
  ogrenciler : Ogrenciler[];
  konuId : string ="";
  konuAd : string ="";
  konular: Konular[];
  constructor(
    public dialogRef: MatDialogRef<SecProjeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
    public apiservis : ApiService,

  ) { 
    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Secilen Proje Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Secilen Proje Düzenle'
    }
    this.frm = this.FormOlustur();
  }

  ngOnInit() {
    this.DersListele();
    this.KonuListe();
    this.OgrenciListe();

  }
  FormOlustur(){
    return this.frmBuild.group({
      secProjeOgrId:[this.yeniKayit.secProjeOgrId],
      secProjeDersId:[this.yeniKayit.secProjeDersId],
      secProjeKonuId:[this.yeniKayit.secProjeKonuId],


    });
  }
  DersListele(){
    this.apiservis.DersListe().subscribe((d : Dersler[])=>{
      this.dersler = d;
    });
  }
  DersSec(dersId: string){
    this.dersId = dersId;
  }
  OgrenciListe(){
    this.apiservis.OgrenciListe().subscribe((d : Ogrenciler[])=>{
      this.ogrenciler = d;
    });
  }
  OgrenciSec(ogrId: string){
    this.ogrId = ogrId;
  }
  KonuListe(){
    this.apiservis.KonuListe().subscribe((d : Konular[])=>{
      this.konular = d;
    });
  }
  KonuSec(konuId: string){
    this.konuId = konuId;
  }

}
