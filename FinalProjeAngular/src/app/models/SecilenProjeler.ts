import { Konular } from './Konular';
import { Dersler } from './Dersler';
import { Ogrenciler } from './Ogrenciler';
export class SecProje{
    secProjeId :string;
    secProjeOgrId :string;
    secProjeDersId :string;
    secProjeKonuId :string;
    ogrBilgi: Ogrenciler;
    dersBilgi: Dersler;
    konuBilgi: Konular;

}