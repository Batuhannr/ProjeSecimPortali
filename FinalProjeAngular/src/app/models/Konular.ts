import { Dersler } from './Dersler';
import { Ogrenciler } from 'src/app/models/Ogrenciler';
export class Konular {
    konuId: string;
    konuBaslik: string;
    konuAciklama: string;
    konuDersId: string;
    konuDersAd : string;
    ogrBilgi: Ogrenciler;
    dersBilgi: Dersler;
    
}