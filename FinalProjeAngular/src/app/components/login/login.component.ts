import { Sonuc } from './../../models/Sonuc';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public apiServis: ApiService,
    public alert: MyAlertService,
  ) { }

  ngOnInit() {
  }
  OturumAc(KullaniciAdi: string, parola: string){
    this.apiServis.tokenAl(KullaniciAdi,parola).subscribe(d=>{
      console.log();
    },err=>{
      var s:Sonuc = new Sonuc();
      s.islem=false;
      s.mesaj="Kullanıcı Adı Veya Parola Geçersiz";
      this.alert.AlertUygula(s);
    })
  }
}
