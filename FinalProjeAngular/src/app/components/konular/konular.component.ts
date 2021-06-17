import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { Konular } from './../../models/Konular';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { KonularDialogComponent } from './../dialogs/konular-dialog/konular-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-konular',
  templateUrl: './konular.component.html',
  styleUrls: ['./konular.component.css']
})
export class KonularComponent implements OnInit {
  dialogRef : MatDialogRef<KonularDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  konular : Konular[];
  dataSource: any;
  displayedColumns =['konuBaslik', 'konuAciklama','konuDersAd','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.KonuListele();
  }
  KonuListele(){
    this.apiServis.KonuListe().subscribe((d:Konular[])=>{
      this.konular=d;
      this.dataSource = new MatTableDataSource(this.konular);
    })
  }
  KonuFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  KonuEkle(){
    var yeniKayit : Konular = new Konular();
    this.dialogRef= this.matDialog.open(KonularDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.KonuEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.KonuListele();
          }
        });
      }
    })
  }
  KonuDuzenle(kayit:Konular){
    this.dialogRef= this.matDialog.open(KonularDialogComponent,{
      width : '400px',
      data:{
        kayit:kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){

        kayit.konuBaslik = d.konuBaslik;
        kayit.konuAciklama = d.konuAciklama ;
        kayit.konuDersId = d.konuDersId ;

        this.apiServis.KonuDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.KonuListele();
          }
        });
      }
    })

  }
  KonuSil(kayit: Konular){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.konuBaslik + " İsimli  Konu Silinecektir Onaylıyor musunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        
        this.apiServis.KonuSil(kayit.konuId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.KonuListele();
          }
        })
      }
    })
  }
  
}

