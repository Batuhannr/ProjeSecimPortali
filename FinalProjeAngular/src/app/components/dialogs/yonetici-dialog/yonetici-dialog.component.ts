import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Yonetici } from './../../../models/Yonetici';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-yonetici-dialog',
  templateUrl: './yonetici-dialog.component.html',
  styleUrls: ['./yonetici-dialog.component.css']
})
export class YoneticiDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: Yonetici;
  islem : string;
  frm : FormGroup;
  constructor(
    public dialogRef: MatDialogRef<YoneticiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
  ) { 
    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Yönetici Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Yönetici Düzenle'
    }
    this.frm = this.FormOlustur();
  }
  

  ngOnInit() {
  }
  FormOlustur(){
    return this.frmBuild.group({
      yoneticiTC:[this.yeniKayit.yoneticiTC],
      yoneticiAdSoyad:[this.yeniKayit.yoneticiAdSoyad],


    });
  }

}