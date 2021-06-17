import { Ogrenciler } from './Ogrenciler';
import { Dersler } from './Dersler';
export class KayitDersOgrenci{
    kayitId : string;
    kayitDersId : string;
    kayitOgrId : string;
    dersBilgi: Dersler;
    ogrBilgi: Ogrenciler;
}