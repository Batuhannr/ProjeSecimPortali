import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Bolum } from './../../../models/Bolum';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolum-dialog',
  templateUrl: './bolum-dialog.component.html',
  styleUrls: ['./bolum-dialog.component.css']
})
export class BolumDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: Bolum;
  islem : string;
  frm : FormGroup;
  constructor(
    public dialogRef: MatDialogRef<BolumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
  ) { 
    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Bölüm Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Bölüm Düzenle'
    }
    this.frm = this.FormOlustur();
  }

  ngOnInit() {
  }
  FormOlustur(){
    return this.frmBuild.group({
      bolumAd:[this.yeniKayit.bolumAd],
    });
  }

}

