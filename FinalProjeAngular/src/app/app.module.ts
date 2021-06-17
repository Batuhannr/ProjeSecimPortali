import { LoginComponent } from './components/login/login.component';
import { DerskonuComponent } from './components/derskonu/derskonu.component';
import { KonuOgrenciComponent } from './components/KonuOgrenci/KonuOgrenci.component';
import { DersOgrenciComponent } from './components/DersOgrenci/DersOgrenci.component';
import { BolumOgrenciComponent } from './components/BolumOgrenci/BolumOgrenci.component';
import { OgrenciSecProjeComponent } from './components/OgrenciSecProje/OgrenciSecProje.component';
import { OgretmenDersComponent } from './components/ogretmen-ders/ogretmen-ders.component';
import { SecProjeDialogComponent } from './components/dialogs/secProje-dialog/secProje-dialog.component';
import { SecProjeComponent } from './components/secProje/secProje.component';
import { KonularDialogComponent } from './components/dialogs/konular-dialog/konular-dialog.component';
import { KonularComponent } from './components/konular/konular.component';
import { BolumDialogComponent } from './components/dialogs/bolum-dialog/bolum-dialog.component';
import { BolumlerComponent } from './components/bolumler/bolumler.component';
import { OgrencilerComponent } from './components/ogrenciler/ogrenciler.component';
import { OgrenciDialogComponent } from './components/dialogs/ogrenci-dialog/ogrenci-dialog.component';
import { DerslerDialogComponent } from './components/dialogs/dersler-dialog/dersler-dialog.component';
import { DerslerComponent } from './components/Dersler/Dersler.component';
import { OgretmenlerDialogComponent } from './components/dialogs/Ogretmenler-dialog/Ogretmenler-dialog.component';
import { OgretmenlerComponent } from './components/Ogretmenler/Ogretmenler.component';
import { YoneticiDialogComponent } from './components/dialogs/yonetici-dialog/yonetici-dialog.component';
import { YoneticilerComponent } from './components/Yoneticiler/Yoneticiler.component';
import { ApiService } from './services/api.service';

import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { MyAlertService } from './services/myAlert.service';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    MainNavComponent,
    YoneticilerComponent,
    OgretmenlerComponent,
    DerslerComponent,
    OgrencilerComponent,
    BolumlerComponent,
    KonularComponent,
    SecProjeComponent,
    OgretmenDersComponent,
    OgrenciSecProjeComponent,
    BolumOgrenciComponent,
    DersOgrenciComponent,
    KonuOgrenciComponent,
    DerskonuComponent,
    LoginComponent,



    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    YoneticiDialogComponent,
    OgretmenlerDialogComponent,
    DerslerDialogComponent,
    OgrenciDialogComponent,
    BolumDialogComponent,
    KonularDialogComponent,
    SecProjeDialogComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    YoneticiDialogComponent,
    OgretmenlerDialogComponent,
    DerslerDialogComponent,
    OgretmenlerDialogComponent,
    BolumDialogComponent,
    KonularDialogComponent,
    SecProjeDialogComponent,



  ],
  providers: [MyAlertService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
