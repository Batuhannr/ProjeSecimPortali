import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SecProje } from './../../models/SecilenProjeler';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-KonuOgrenci',
  templateUrl: './KonuOgrenci.component.html',
  styleUrls: ['./KonuOgrenci.component.css']
})
export class KonuOgrenciComponent implements OnInit {
  konuId:string;
  secProjeler : SecProje[];
  dataSource: any;
  displayedColumns=['secProjeOgrId', 'secProjeDersId','secProjeKonuId','islemler'];
  constructor(
    public apiservis : ApiService,
    public route : ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(p=>{
      if(p){
        this.konuId = p.konuId;
        this.KayitListele();
      }
    });
  }

  KayitListele(){
    this.apiservis.SecProjeByKonular(this.konuId).subscribe((d:SecProje[])=>{
      this.secProjeler = d;
      this.dataSource= new MatTableDataSource(d);
    })
  }
}
