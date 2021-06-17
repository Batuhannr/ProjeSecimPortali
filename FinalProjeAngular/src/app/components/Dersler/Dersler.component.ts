import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Dersler } from './../../models/Dersler';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DerslerDialogComponent } from '../dialogs/dersler-dialog/dersler-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-Dersler',
  templateUrl: './Dersler.component.html',
  styleUrls: ['./Dersler.component.css']
})
export class DerslerComponent implements OnInit {
  dialogRef : MatDialogRef<DerslerDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  dataSource: any;
  dersler : Dersler[];
  
  displayedColumns =['dersKod','dersAd','ogretmenAdiSoyadi','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.DersListele();
  }
  DersListele(){
    this.apiServis.DersListe().subscribe((d:Dersler[])=>{
      this.dersler=d;
      this.dataSource = new MatTableDataSource(this.dersler);
      this.dataSource.sort = this.sort
    })
  }
  DersFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  DersEkle(){
    var yeniKayit : Dersler = new Dersler();
    
    this.dialogRef= this.matDialog.open(DerslerDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        
        this.apiServis.DersEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.DersListele();
          }
        });
      }
    })
  }
  DersDuzenle(kayit:Dersler){
    this.dialogRef= this.matDialog.open(DerslerDialogComponent,{
      width : '400px',
      data:{
        kayit:kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        kayit.dersKod = d.dersKod;
        kayit.dersAd = d.dersAd;
        kayit.dersEgitimGorevlisiId = d.dersEgitimGorevlisiId ;

        this.apiServis.DersDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.DersListele();
          }
        });
      }
    })

  }
  DersSil(kayit: Dersler){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.dersAd + " İsimli  Ders Silinecektir Onaylıyor musunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.DersSil(kayit.dersId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.DersListele();
          }
        })
      }
    })
  }
  
}