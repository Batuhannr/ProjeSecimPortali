import { ApiService } from './../../../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dersler } from './../../../models/Dersler';
import { Component, Inject, OnInit } from '@angular/core';
import { Ogretmenler } from 'src/app/models/Ogretmenler';

@Component({
  selector: 'app-dersler-dialog',
  templateUrl: './dersler-dialog.component.html',
  styleUrls: ['./dersler-dialog.component.css']
})
export class DerslerDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: Dersler;
  islem : string;
  ogretmenId:string ="";
  ogretmenler : Ogretmenler[];
  frm : FormGroup;
  select: string;
  
  constructor(
    public dialogRef: MatDialogRef<DerslerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
    public apiservis : ApiService,
  ) { 

    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Ders Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Ders Düzenle'
    }
    this.frm = this.FormOlustur();
    
  }

  ngOnInit() {
    this.OgretmenListele();
  }
  FormOlustur(){
    return this.frmBuild.group({
      dersKod:[this.yeniKayit.dersKod],
      dersAd:[this.yeniKayit.dersAd],
      dersEgitimGorevlisiId:[this.yeniKayit.dersEgitimGorevlisiId],
      dersEgitimGorevlisiAd:[this.yeniKayit.dersEgitimGorevlisiAd],
      

    });
  }
  OgretmenListele(){
    this.apiservis.OgretmenListe().subscribe((d : Ogretmenler[])=>{
      this.ogretmenler = d;
    });
  }
  OgretmenSec(ogretmenId: string){
    this.ogretmenId = ogretmenId;
  }


}