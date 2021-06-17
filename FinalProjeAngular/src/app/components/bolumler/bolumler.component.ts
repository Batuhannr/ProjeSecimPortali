import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { Bolum } from './../../models/Bolum';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BolumDialogComponent } from './../dialogs/bolum-dialog/bolum-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bolumler',
  templateUrl: './bolumler.component.html',
  styleUrls: ['./bolumler.component.css']
})
export class BolumlerComponent implements OnInit {
  dialogRef : MatDialogRef<BolumDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  bolumler : Bolum[];
  dataSource: any;
  displayedColumns =['bolumAd','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.BolumListele();
  }
  BolumListele(){
    this.apiServis.BolumlerListe().subscribe((d:Bolum[])=>{
      this.bolumler=d;
      this.dataSource = new MatTableDataSource(this.bolumler);
    })
  }
  BolumFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  BolumEkle(){
    var yeniKayit : Bolum = new Bolum();
    this.dialogRef= this.matDialog.open(BolumDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.BolumEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.BolumListele();
          }
        });
      }
    })
  }
  BolumDuzenle(kayit:Bolum){
    this.dialogRef= this.matDialog.open(BolumDialogComponent,{
      width : '400px',
      data:{
        kayit:kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){

        kayit.bolumAd = d.bolumAd;

        this.apiServis.BolumDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.BolumListele();
          }
        });
      }
    })

  }
  BolumSil(kayit: Bolum){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.bolumAd + " İsimli  Bölüm Silinecektir Onaylıyor musunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        
        this.apiServis.BolumSil(kayit.bolumId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.BolumListele();
          }
        })
      }
    })
  }
  
}
