import { KayitDersOgrenci } from './../models/KayitDersOgrenci';
import { SecProje } from './../models/SecilenProjeler';
import { Konular } from './../models/Konular';
import { Bolum } from './../models/Bolum';
import { Dersler } from './../models/Dersler';
import { Ogretmenler } from './../models/Ogretmenler';
import { Yonetici } from './../models/Yonetici';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ogrenciler } from '../models/Ogrenciler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://localhost:44375/api/";

  constructor(
    public http: HttpClient
  ) { }

  YoneticiListe(){
    return this.http.get(this.apiUrl+"yoneticiliste");
  }
  YoneticiEkle(yonetici : Yonetici){
    return this.http.post(this.apiUrl+"yoneticiekle", yonetici);
  }
  YoneticiDuzenle(yonetici : Yonetici){
    return this.http.put(this.apiUrl+"yoneticiduzenle",yonetici);
  }
  YoneticiSil(yoneticiId: string){
    return this.http.delete(this.apiUrl + "yoneticisil/"+ yoneticiId);
  }
  OgretmenListe(){
    return this.http.get(this.apiUrl+"ogretmenliste")
  }
  OgretmenById(ogretmenId : string){
    return this.http.get(this.apiUrl+"ogretmenliste/" + ogretmenId)
  }
  OgretmenEkle(ogretmen : Ogretmenler){
    return this.http.post(this.apiUrl+"ogretmenekle", ogretmen);
  }
  OgretmenDuzenle(ogretmen : Ogretmenler){
    return this.http.put(this.apiUrl+"ogretmenduzenle",ogretmen);
  }
  OgretmenSıl(ogretmenId: string){
    return this.http.delete(this.apiUrl + "ogretmensil/"+ ogretmenId);
  }
  DersListe(){
    return this.http.get(this.apiUrl+"dersliste")
  }
  DerslerById(dersId : string){
    return this.http.get(this.apiUrl+"dersliste/" + dersId)
  }
  KonuByDers(dersId : string){
    return this.http.get(this.apiUrl+"derskonulistele/" + dersId)
  }
  BolumdekiOgrenci(bolumId : string){
    return this.http.get(this.apiUrl+"ogrencibolum/" + bolumId)
  }
  BolumById(bolumId : string){
    return this.http.get(this.apiUrl+"bolumliste/" + bolumId)
  }
  DersEkle(ders : Dersler){
    return this.http.post(this.apiUrl+"dersekle", ders);
  }
  DersDuzenle(ders : Dersler){
    return this.http.put(this.apiUrl+"dersduzenle",ders);
  }
  DersSil(dersId: string){
    return this.http.delete(this.apiUrl + "derssil/"+ dersId);
  }
  OgrenciListe(){
    return this.http.get(this.apiUrl+"ogrenciliste")
  }
  OgrenciById(ogrId : string){
    return this.http.get(this.apiUrl+"ogrenciliste/"+ ogrId) 
  }
  OgrenciEkle(ogrenci : Ogrenciler){
    return this.http.post(this.apiUrl+"ogrenciekle", ogrenci);
  }
  OgrenciDuzenle(ogrenci : Ogrenciler){
    return this.http.put(this.apiUrl+"ogrenciduzenle",ogrenci);
  }
  OgrenciSil(ogrId: string){
    return this.http.delete(this.apiUrl + "ogrencisil/"+ ogrId);
  }
  BolumlerListe(){
    return this.http.get(this.apiUrl+"bolumliste")
  }
  BolumEkle(bolum : Bolum){
    return this.http.post(this.apiUrl+"bolumekle", bolum);
  }
  BolumDuzenle(bolum : Bolum){
    return this.http.put(this.apiUrl+"bolumduzenle",bolum);
  }
  BolumSil(bolumId: string){
    return this.http.delete(this.apiUrl + "bolumsil/"+ bolumId);
  }
  KonuListe(){
    return this.http.get(this.apiUrl+"konulistele")
  }
  KonuEkle(konu : Konular){
    return this.http.post(this.apiUrl+"konuekle", konu);
  }
  KonuDuzenle(konu : Konular){
    return this.http.put(this.apiUrl+"konuduzenle",konu);
  }
  KonuSil(konuId: string){
    return this.http.delete(this.apiUrl + "konusil/"+ konuId);
  }
  SecilenProjeListe(){
    return this.http.get(this.apiUrl+"secilenprojelistele")
  }
  SecilenProjeEkle(secProje : SecProje){
    return this.http.post(this.apiUrl+"secilenprojeekle", secProje);
  }
  SecilenProjeSil(secProjeId){
    return this.http.delete(this.apiUrl + "secilenprojesil/"+ secProjeId);
  }
  OgretmenDersListe(ogretmenId: string){
    return this.http.get(this.apiUrl + "dersbyogretmen/" + ogretmenId)
  }
  OgrenciSecProjeListe(ogrId: string){
    return this.http.get(this.apiUrl + "secilenprojelistelebyogrenci/" + ogrId)
  }
  SecProjeByKonular(konuId: string){
    return this.http.get(this.apiUrl + "secilenprojelistelebykonular/" + konuId)
  }
  BolumOgrenciListe(bolumId: string){
    return this.http.get(this.apiUrl + "bolumogrenciliste/" + bolumId)
  }
  DersOgrenciListe(dersId: string){
    return this.http.get(this.apiUrl + "dersogrenciliste/" + dersId)
  }
  KonuOgrenciListe(konuId: string){
    return this.http.get(this.apiUrl + "konuogrenciliste/" + konuId)
  }
  DersinKonuları(dersId: string){
    return this.http.get(this.apiUrl + "dersinkonularıliste/" + dersId)
  }
  tokenAl(kullaniciadi: string,parola:string){
    var data="username=" + kullaniciadi + "&password=" + parola + "&grant_type=passord";
    var reqHeader = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
    return this.http.post(this.apiUrl+"token",data,{headers: reqHeader});
  }
}
