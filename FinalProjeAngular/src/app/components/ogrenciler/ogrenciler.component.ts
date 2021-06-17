import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Ogrenciler } from './../../models/Ogrenciler';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OgrenciDialogComponent } from '../dialogs/ogrenci-dialog/ogrenci-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ogrenciler',
  templateUrl: './ogrenciler.component.html',
  styleUrls: ['./ogrenciler.component.css']
})
export class OgrencilerComponent implements OnInit {
  dialogRef : MatDialogRef<OgrenciDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  ogrenci : Ogrenciler[];
  dataSource: any;
  displayedColumns =['ogrNo','ogrAdSoyad', 'ogrBolumAd','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.OgrenciListele();
  }
  OgrenciListele(){
    this.apiServis.OgrenciListe().subscribe((d:Ogrenciler[])=>{
      this.ogrenci=d;
      this.dataSource = new MatTableDataSource(this.ogrenci);
      this.dataSource.sort = this.sort;
    })
  }
  OgrenciFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  OgrenciEkle(){
    var yeniKayit : Ogrenciler = new Ogrenciler();
    this.dialogRef= this.matDialog.open(OgrenciDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.OgrenciEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.OgrenciListele();
          }
        });
      }
    })
  }
  OgrenciDuzenle(kayit:Ogrenciler){
    this.dialogRef= this.matDialog.open(OgrenciDialogComponent,{
      width : '400px',
      data:{
        kayit:kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){

        kayit.ogrNo = d.ogrNo;
        kayit.ogrAdSoyad = d.ogrAdSoyad ;
        kayit.ogrBolumId = d.ogrBolumId ;

        this.apiServis.OgrenciDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.OgrenciListele();
          }
        });
      }
    })

  }
  OgrenciSil(kayit: Ogrenciler){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.ogrAdSoyad + " İsimli  Öğrenci Silinecektir Onaylıyor musunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        
        this.apiServis.OgrenciSil(kayit.ogrId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.OgrenciListele();
          }
        })
      }
    })
  }
  
}
