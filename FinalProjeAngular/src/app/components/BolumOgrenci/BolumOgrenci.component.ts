import { Ogrenciler } from 'src/app/models/Ogrenciler';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Bolum } from './../../models/Bolum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-BolumOgrenci',
  templateUrl: './BolumOgrenci.component.html',
  styleUrls: ['./BolumOgrenci.component.css']
})
export class BolumOgrenciComponent implements OnInit {
  kayitlar : Bolum[];
  ogrenciler : Ogrenciler[];
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;

  bolumId:string;
  ogrId:string;
  secBolum: Bolum;
  dataSource: any;
  displayedColumns=['ogrNo', 'ogrAdSoyad','bolumAd','islemler'];
  
    constructor(
      public apiservis : ApiService,
      public route : ActivatedRoute,
      public alert : MyAlertService,
      public matDialog : MatDialog,

    ) { }
  

  ngOnInit() {
    this.route.params.subscribe(p=>{
      if(p){
        this.bolumId = p.bolumId;
        this.KayitListele();
      }
    });
  }
  KayitListele(){
    this.apiservis.BolumdekiOgrenci(this.bolumId).subscribe((d:Ogrenciler[])=>{
      this.ogrenciler = d;
      this.dataSource= new MatTableDataSource(d);
    })
  }
}