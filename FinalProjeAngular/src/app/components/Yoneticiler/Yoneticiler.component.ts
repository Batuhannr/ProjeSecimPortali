import { Sonuc } from './../../models/Sonuc';
import { YoneticiDialogComponent } from './../dialogs/yonetici-dialog/yonetici-dialog.component';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Yonetici } from './../../models/Yonetici';
import { MyAlertService } from './../../services/myAlert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-Yoneticiler',
  templateUrl: './Yoneticiler.component.html',
  styleUrls: ['./Yoneticiler.component.css']
})
export class YoneticilerComponent implements OnInit {

  dialogRef : MatDialogRef<YoneticiDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  yoneticiler : Yonetici[];
  dataSource: any;
  displayedColumns =['yoneticiTC', 'yoneticiAdSoyad','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.YoneticiListele();

  }
  YoneticiListele(){
    this.apiServis.YoneticiListe().subscribe((d:Yonetici[])=>{
      this.yoneticiler=d;
      this.dataSource = new MatTableDataSource(this.yoneticiler);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  YoneticiFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  YoneticiEkle(){
    var yeniKayit : Yonetici = new Yonetici();
    this.dialogRef= this.matDialog.open(YoneticiDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.YoneticiEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.YoneticiListele();
          }
        });
      }
    })
  }
  YoneticiDuzenle(kayit:Yonetici){
    this.dialogRef= this.matDialog.open(YoneticiDialogComponent,{
      width : '400px',
      data:{
        kayit:kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){

        kayit.yoneticiTC = d.yoneticiTC;
        kayit.yoneticiAdSoyad = d.yoneticiAdSoyad ;

        this.apiServis.YoneticiDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.YoneticiListele();
          }
        });
      }
    })

  }
  YoneticiSil(kayit: Yonetici){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.yoneticiAdSoyad + " İsimli  Yönetici Silinecektir Onaylıyor musunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        
        this.apiServis.YoneticiSil(kayit.yoneticiId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.YoneticiListele();
          }
        })
      }
    })
  }
  
}
