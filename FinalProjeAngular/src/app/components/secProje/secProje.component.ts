import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { SecProjeDialogComponent } from './../dialogs/secProje-dialog/secProje-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SecProje } from 'src/app/models/SecilenProjeler';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-secProje',
  templateUrl: './secProje.component.html',
  styleUrls: ['./secProje.component.css']
})
export class SecProjeComponent implements OnInit {
  dialogRef : MatDialogRef<SecProjeDialogComponent>;
  confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;
  secilenProje : SecProje[];
  dataSource: any;
  displayedColumns =['secProjeOgrNo','secProjeDersAd', 'secProjeKonuAd','islemler']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public apiServis : ApiService,
    public matDialog : MatDialog,
    public alert : MyAlertService
  ) { }

  ngOnInit() {
    this.SecilenProjeListe();
  }
  SecilenProjeListe(){
    this.apiServis.SecilenProjeListe().subscribe((d:SecProje[])=>{
      this.secilenProje=d;
      this.dataSource = new MatTableDataSource(this.secilenProje);
    })
  }
  SecilenProjeFiltrele(e){
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  SecilenProjeEkle(){
    var yeniKayit : SecProje = new SecProje();
    this.dialogRef= this.matDialog.open(SecProjeDialogComponent,{
      width : '400px',
      data:{
        kayit:yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{
      if(d){
        this.apiServis.SecilenProjeEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.SecilenProjeListe();
          }
        });
      }
    })
  }
  SecilenProjeSil(kayit: SecProje){
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent,{
      width : '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj=kayit.secProjeOgrId + " Numarılı Öğrencinin" + kayit.secProjeDersId + " Kodlu Dersinden Aldığı Proje Silinecektir Onaylıyormusunuz ?"
    this.confirmDialogRef.afterClosed().subscribe(d=>{
      if(d){
        
        this.apiServis.SecilenProjeSil(kayit.secProjeId).subscribe((s:Sonuc) =>{
          this.alert.AlertUygula(s);
          if (s.islem){
            this.SecilenProjeListe();
          }
        })
      }
    })
  }
  
}

