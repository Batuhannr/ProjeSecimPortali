import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Ogrenciler } from './../../models/Ogrenciler';
import { SecProje } from './../../models/SecilenProjeler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-OgrenciSecProje',
  templateUrl: './OgrenciSecProje.component.html',
  styleUrls: ['./OgrenciSecProje.component.css']
})
export class OgrenciSecProjeComponent implements OnInit {
  
  secProjeler : SecProje[];
  ogrId:string;
  secprojeId:string ="";
  secOgrenci: Ogrenciler;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;

  dataSource: any;
  displayedColumns=['secProjeOgrId', 'secProjeDersId','secProjeKonuId','islemler'];
  
    constructor(
      public apiservis : ApiService,
      public route : ActivatedRoute,
      public alert : MyAlertService,
      public matDialog : MatDialog,

    ) { }
  

  ngOnInit() {
    this.SecProjeListe();
    this.route.params.subscribe(p=>{
      if(p){
        this.ogrId = p.ogrId;
        this.OgrenciGetir();
        this.KayitListele();
      }
    });
  }
  OgrenciGetir(){
    this.apiservis.OgrenciById(this.ogrId).subscribe((d:Ogrenciler)=>{
      this.secOgrenci=d;
    })
  }
  KayitListele(){
    this.apiservis.OgrenciSecProjeListe(this.ogrId).subscribe((d:SecProje[])=>{
      this.secProjeler = d;
      this.dataSource= new MatTableDataSource(d);
    })
  }
  SecProjeListe(){
    this.apiservis.SecilenProjeListe().subscribe((d : SecProje[])=>{
      this.secProjeler = d;
    });
  }
  
  SecProjeSec(secprojeId: string){
    this.secprojeId = secprojeId;
  }
  
}
