import { LoginComponent } from './components/login/login.component';
import { DerskonuComponent } from './components/derskonu/derskonu.component';
import { KonuOgrenciComponent } from './components/KonuOgrenci/KonuOgrenci.component';
import { DersOgrenciComponent } from './components/DersOgrenci/DersOgrenci.component';
import { BolumOgrenciComponent } from './components/BolumOgrenci/BolumOgrenci.component';
import { OgrenciSecProjeComponent } from './components/OgrenciSecProje/OgrenciSecProje.component';
import { OgretmenDersComponent } from './components/ogretmen-ders/ogretmen-ders.component';
import { KonularComponent } from './components/konular/konular.component';
import { BolumlerComponent } from './components/bolumler/bolumler.component';
import { OgretmenlerComponent } from './components/Ogretmenler/Ogretmenler.component';
import { YoneticilerComponent } from './components/Yoneticiler/Yoneticiler.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DerslerComponent } from './components/Dersler/Dersler.component';
import { OgrencilerComponent } from './components/ogrenciler/ogrenciler.component';
import { SecProjeComponent } from './components/secProje/secProje.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'yoneticiler',
    component: YoneticilerComponent
  },
  {
    path: 'ogretmenler',
    component: OgretmenlerComponent
  },
  {
    path: 'dersler',
    component: DerslerComponent
  },
  {
    path: 'ogrenciler',
    component: OgrencilerComponent
  },
  {
    path: 'bolumler',
    component: BolumlerComponent
  },
  {
    path: 'konular',
    component: KonularComponent
  },
  {
    path: 'secilenproje',
    component: SecProjeComponent
  },
  {
    path: 'ogretmenliste/:ogretmenId',
    component: OgretmenDersComponent
  },
  {
    path: 'ogrenciseclsite/:ogrId',
    component: OgrenciSecProjeComponent
  },
  {
    path: 'bolumogrenci/:bolumId',
    component: BolumOgrenciComponent
  },
  {
    path: 'dersogrenci/:dersId',
    component: DersOgrenciComponent
  },
  {
    path: 'konuogrenci/:konuId',
    component: KonuOgrenciComponent
  },
  {
    path: 'derskonu/:dersId',
    component: DerskonuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
