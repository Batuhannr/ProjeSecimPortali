import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Dersler } from './../../models/Dersler';
import { Ogretmenler } from './../../models/Ogretmenler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ogretmen-ders',
  templateUrl: './ogretmen-ders.component.html',
  styleUrls: ['./ogretmen-ders.component.css']
})
export class OgretmenDersComponent implements OnInit {
  dersler : Dersler[];
  ogretmenId:string;
  dersId:string ="";
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;

  secOgretmen: Ogretmenler;
  dataSource: any;
  displayedColumns=['dersKod', 'dersAd','islemler'];
  
    constructor(
      public apiservis : ApiService,
      public route : ActivatedRoute,
      public alert : MyAlertService,
      public matDialog : MatDialog,

      
    ) { }
  

  ngOnInit() {
    this.DersListele();
    this.route.params.subscribe(p=>{
      if(p){
        this.ogretmenId = p.ogretmenId;
        this.OgretmenGetir();
        this.KayitListele();
      }
    });
  }
  OgretmenGetir(){
    this.apiservis.OgretmenById(this.ogretmenId).subscribe((d:Ogretmenler)=>{
      this.secOgretmen=d;
    })
  }
  KayitListele(){
    this.apiservis.OgretmenDersListe(this.ogretmenId).subscribe((d:Dersler[])=>{
      this.dersler = d;
      this.dataSource= new MatTableDataSource(d);
    })
  }
  DersListele(){
    this.apiservis.DersListe().subscribe((d : Dersler[])=>{
      this.dersler = d;
    });
  }
  
}
