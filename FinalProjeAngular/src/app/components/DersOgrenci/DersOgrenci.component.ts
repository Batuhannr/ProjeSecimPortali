import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Dersler } from './../../models/Dersler';
import { Ogrenciler } from './../../models/Ogrenciler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KayitDersOgrenci } from 'src/app/models/KayitDersOgrenci';

@Component({
  selector: 'app-DersOgrenci',
  templateUrl: './DersOgrenci.component.html',
  styleUrls: ['./DersOgrenci.component.css']
})
export class DersOgrenciComponent implements OnInit {
  kayitlar : KayitDersOgrenci[];
  ogrenciler : Ogrenciler[];
  dersId:string;
  ogrenciId:string ="";
  secDers: Dersler;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;

  dataSource: any;
  displayedColumns=['ogrNo', 'ogrAdSoyad','islemler'];
  
    constructor(
      public apiservis : ApiService,
      public route : ActivatedRoute,
      public alert : MyAlertService,
      public matDialog : MatDialog,

    ) { }
  

  ngOnInit() {
    this.OgrenciListele();
    this.route.params.subscribe(p=>{
      if(p){
        this.dersId = p.dersId;
        this.DersGetir();
        this.KayitListele();
      }
    });
  }
  DersGetir(){
    this.apiservis.DerslerById(this.dersId).subscribe((d:Dersler)=>{
      this.secDers=d;
    })
  }
  KayitListele(){
    this.apiservis.DersOgrenciListe(this.dersId).subscribe((d:KayitDersOgrenci[])=>{
      this.kayitlar = d;
      this.dataSource= new MatTableDataSource(d);
    })
  }
  OgrenciListele(){
    this.apiservis.OgrenciListe().subscribe((d : Ogrenciler[])=>{
      this.ogrenciler = d;
    });
  }
  OgrenciSec(ogrenciId: string){
    this.ogrenciId = ogrenciId;
  }
}
