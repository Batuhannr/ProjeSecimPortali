import { ApiService } from './../../../services/api.service';
import { Dersler } from './../../../models/Dersler';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Konular } from './../../../models/Konular';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-konular-dialog',
  templateUrl: './konular-dialog.component.html',
  styleUrls: ['./konular-dialog.component.css']
})
export class KonularDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayit: Konular;
  islem : string;
  dersId:string ="";
  dersler : Dersler[];
  frm : FormGroup;
  select: string;
  constructor(
    public dialogRef: MatDialogRef<KonularDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public frmBuild: FormBuilder,
    public apiservis : ApiService,

  ) { 
    this.islem = data.islem
    this.yeniKayit = data.kayit;
    if(this.islem=='ekle'){
      this.dialogBaslik='Konu Ekle'
    }
    if(this.islem=='duzenle'){
      this.dialogBaslik='Konu Düzenle'
    }
    this.frm = this.FormOlustur();
  }

  ngOnInit() {
    this.DersListele();
  }
  FormOlustur(){
    return this.frmBuild.group({
      konuBaslik:[this.yeniKayit.konuBaslik],
      konuAciklama:[this.yeniKayit.konuAciklama],
      konuDersId:[this.yeniKayit.konuDersId],
      konuDersAd:[this.yeniKayit.konuDersAd],


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
}

