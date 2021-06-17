import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ogretmenler } from './../../../models/Ogretmenler';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-Ogretmenler-dialog',
  templateUrl: './Ogretmenler-dialog.component.html',
  styleUrls: ['./Ogretmenler-dialog.component.css']
})
export class OgretmenlerDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: Ogretmenler;
  islem : string;
  frm : FormGroup;
  constructor(
    public dialogRef: MatDialogRef<OgretmenlerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
  ) { 
    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Öğretmen Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Öğretmen Düzenle'
    }
    this.frm = this.FormOlustur();
  }

  ngOnInit() {
  }
  FormOlustur(){
    return this.frmBuild.group({
      ogretmenTc:[this.yeniKayit.ogretmenTc],
      ogretmenAdiSoyadi:[this.yeniKayit.ogretmenAdiSoyadi],


    });
  }

}