import { Bolum } from './../../../models/Bolum';
import { ApiService } from './../../../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Ogrenciler } from 'src/app/models/Ogrenciler';

@Component({
  selector: 'app-ogrenci-dialog',
  templateUrl: './ogrenci-dialog.component.html',
  styleUrls: ['./ogrenci-dialog.component.css']
})
export class OgrenciDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: Ogrenciler;
  islem : string;
  frm : FormGroup;
  bolumId:string ="";
  select:string;
  bolumler : Bolum[];
  constructor(
    public dialogRef: MatDialogRef<OgrenciDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
    public apiservis : ApiService,

  ) { 
    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Öğrenci Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Öğrenci Düzenle'
    }
    this.frm = this.FormOlustur();
  }

  ngOnInit() {
    this.BolumListele();

  }
  FormOlustur(){
    return this.frmBuild.group({
      ogrNo:[this.yeniKayit.ogrNo],
      ogrAdSoyad:[this.yeniKayit.ogrAdSoyad],
      ogrBolumId:[this.yeniKayit.ogrBolumId],
      ogrBolumAd:[this.yeniKayit.ogrBolumAd],


    });
  }
  BolumListele(){
    this.apiservis.BolumlerListe().subscribe((d : Bolum[])=>{
      this.bolumler = d;
    });
  }
  BolumSec(bolumId: string){
    this.bolumId = bolumId;
  }
}