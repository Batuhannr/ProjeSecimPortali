import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Dersler } from './../../models/Dersler';
import { Ogretmenler } from './../../models/Ogretmenler';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OgretmenlerDialogComponent } from '../dialogs/Ogretmenler-dialog/Ogretmenler-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-Ogretmenler',
  templateUrl: './Ogretmenler.component.html',
  styleUrls: ['./Ogretmenler.component.css']
})
export class OgretmenlerComponent implements OnInit {

  dialogRef : MatDialogRef<OgretmenlerDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  ogretmenler : Ogretmenler[];
  dersler : Dersler[];
  dataSource: any;
  displayedColumns =['ogretmenTc', 'ogretmenAdiSoyadi','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.OgretmenListele();
  }
  OgretmenListele(){
    this.apiServis.OgretmenListe().subscribe((d:Ogretmenler[])=>{
      this.ogretmenler=d;
      this.dataSource = new MatTableDataSource(this.ogretmenler);
      this.dataSource.sort = this.sort;

    })
  }
  OgretmenFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  
  OgretmenEkle(){
    var yeniKayit : Ogretmenler = new Ogretmenler();
    this.dialogRef= this.matDialog.open(OgretmenlerDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.OgretmenEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.OgretmenListele();
          }
        });
      }
    })
  }
  OgretmenDuzenle(kayit:Ogretmenler){
    this.dialogRef= this.matDialog.open(OgretmenlerDialogComponent,{
      width : '400px',
      data:{
        kayit:kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){

        kayit.ogretmenTc = d.ogretmenTc;
        kayit.ogretmenAdiSoyadi = d.ogretmenAdiSoyadi ;

        this.apiServis.OgretmenDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.OgretmenListele();
          }
        });
      }
    })

  }
  OgretmenSil(kayit: Ogretmenler){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.ogretmenAdiSoyadi + " İsimli  Eğitim Görevlisi Silinecektir Onaylıyor musunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.OgretmenSıl(kayit.ogretmenId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.OgretmenListele();
          }
        })
      }
    })
  }
}



