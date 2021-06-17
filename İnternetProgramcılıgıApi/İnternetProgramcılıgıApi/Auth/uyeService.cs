using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using İnternetProgramcılıgıApi.Models;
using İnternetProgramcılıgıApi.ViewModel;
namespace İnternetProgramcılıgıApi.Auth
{
    public class uyeService
    {
        FinalOdeviDBEntities2 db = new FinalOdeviDBEntities2();
        public UyeModel UyeOturumAc(string KullaniciAdi, string parola)
        {
            UyeModel uye = db.Uye.Where(s => s.KullaniciAdi == KullaniciAdi && s.Sifre == parola).Select(x => new UyeModel()
            {
                uyeId = x.uyeId,
                AdSoyad = x.AdSoyad,
                KullaniciAdi = x.KullaniciAdi,
                Email = x.Email,
                Sifre = x.Sifre,
                UyeAdmin = x.UyeAdmin

            }).SingleOrDefault();
            return uye;
        }
    }
}