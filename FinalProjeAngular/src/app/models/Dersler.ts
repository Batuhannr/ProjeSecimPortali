import { Ogrenciler } from './Ogrenciler';
import { Ogretmenler } from './Ogretmenler';
export class Dersler{
    dersId: string;
    dersAd: string;
    dersKod: string;
    dersEgitimGorevlisiId: string;
    dersEgitimGorevlisiAd: string;
    dersEgitimGorevlisiAdSoyad : Ogretmenler;
    ogrBilgi: Ogrenciler;
}