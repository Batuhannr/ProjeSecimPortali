import { MatTableDataSource } from '@angular/material/table';
import { Konular } from './../../models/Konular';
import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Dersler } from './../../models/Dersler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derskonu',
  templateUrl: './derskonu.component.html',
  styleUrls: ['./derskonu.component.scss']
})
export class DerskonuComponent implements OnInit {
  dersId:string;
  ogrenciId:string ="";
  secKonu: Konular[];
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;

  dataSource: any;
  displayedColumns=['konuBaslik', 'dersAd','islemler'];
  
    constructor(
      public apiservis : ApiService,
      public route : ActivatedRoute,
      public alert : MyAlertService,
      public matDialog : MatDialog,

    ) { }
  

  ngOnInit() {
    this.route.params.subscribe(p=>{
      if(p){
        this.dersId = p.dersId;
        this.KonuGetir();
      }
    });
  }
  KonuGetir(){
    this.apiservis.KonuByDers(this.dersId).subscribe((d:Konular[])=>{
      this.secKonu=d;
      this.dataSource= new MatTableDataSource(d);

    })
  }
}
