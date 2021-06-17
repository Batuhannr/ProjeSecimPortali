using İnternetProgramcılıgıApi.Models;
using İnternetProgramcılıgıApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace İnternetProgramcılıgıApi.Controllers
{
    public class ServisController : ApiController
    {
        FinalOdeviDBEntities2 db = new FinalOdeviDBEntities2();
        SonucModel sonuc = new SonucModel();
        #region Yonetici
        //YONETİCİLERİN LİSTELENMESİ
        [HttpGet]
        [Route("api/yoneticiliste")]
        public List<YoneticilerModel> YoneticiListele()
        {
            List<YoneticilerModel> liste = db.Yoneticiler.Select(x => new YoneticilerModel()
            {
                yoneticiId = x.yoneticiId,
                yoneticiAdSoyad = x.yoneticiAdSoyad,
                yoneticiTC = x.yoneticiTC,

            }).ToList();
            return liste;
        }
        //YONETİCİLERDE TC YE GÖRE ARAMA
        [HttpGet]
        [Route("api/yoneticiliste/{yoneticiTC}")]

        public YoneticilerModel YoneticiByTc(string yoneticiTC)

        {
            YoneticilerModel liste = db.Yoneticiler.Where(s => s.yoneticiTC == yoneticiTC).Select(x => new YoneticilerModel()
            {
                yoneticiId = x.yoneticiId,
                yoneticiAdSoyad = x.yoneticiAdSoyad,
                yoneticiTC = x.yoneticiTC,

            }).FirstOrDefault();
            return liste;
        }

        //YONETİCİ EKLEME

        [HttpPost]
        [Route("api/yoneticiekle")]
        public SonucModel YoneticiEkle(YoneticilerModel model)
        {
            if (db.Yoneticiler.Count(s => s.yoneticiTC == model.yoneticiTC) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Yonetici Kayıtlıdır";
                return sonuc;
            }
            Yoneticiler yoneticiler = new Yoneticiler();
            yoneticiler.yoneticiId = Guid.NewGuid().ToString();
            yoneticiler.yoneticiTC = model.yoneticiTC;
            yoneticiler.yoneticiAdSoyad = model.yoneticiAdSoyad;
            db.Yoneticiler.Add(yoneticiler);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Yonetici Başarıyla Eklendi";
            return sonuc;

        }
        //YONETİCİ Düzenleme
        [HttpPut]
        [Route("api/yoneticiduzenle")]
        public SonucModel KategoriDuzenle(YoneticilerModel model)
        {
            Yoneticiler kayit = db.Yoneticiler.Where(s => s.yoneticiId == model.yoneticiId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı";
                return sonuc;
            }
            kayit.yoneticiTC = model.yoneticiTC;
            kayit.yoneticiAdSoyad = model.yoneticiAdSoyad;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Yonetici Düzenlendi";
            return sonuc;
        }
        //YONETİCİ SİL
        [HttpDelete]
        [Route("api/yoneticisil/{yoneticiId}")]
        public SonucModel KategoriSil(string yoneticiId)
        {
            Yoneticiler kayit = db.Yoneticiler.Where(s => s.yoneticiId == yoneticiId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Yonetici Bulunamadı";
                return sonuc;
            }
            db.Yoneticiler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Yonetici Silindi";
            return sonuc;
        }
        #endregion
        #region Ogretmenler
        //Öğretmen Listeleme
        [HttpGet]
        [Route("api/ogretmenliste")]
        public List<OgretmenlerModel> OgretmenListele()
        {
            List<OgretmenlerModel> liste = db.Ogretmenler.Select(x => new OgretmenlerModel()
            {
                ogretmenId = x.ogretmenId,
                ogretmenTc = x.ogretmenTc,
                ogretmenAdiSoyadi = x.ogretmenAdiSoyadi,

            }).ToList();
            return liste;
        }
        //Öğretmenlerde TC YE GÖRE ARAMA
        [HttpGet]
        [Route("api/ogretmenliste/{ogretmenId}")]
        public OgretmenlerModel OgretmenById(string ogretmenId)
        {
            OgretmenlerModel liste = db.Ogretmenler.Where(s => s.ogretmenId == ogretmenId).Select(x => new OgretmenlerModel()
            {
                ogretmenId = x.ogretmenId,
                ogretmenTc = x.ogretmenTc,
                ogretmenAdiSoyadi = x.ogretmenAdiSoyadi,

            }).FirstOrDefault();
            return liste;
        }
        [HttpGet]
        [Route("api/secilenprojelistelebyogrenci/{ogrId}")]
        public List<OgretmenlerModel> OgretmenByDers(string ogretmenId)
        {
            List<OgretmenlerModel> liste = db.Ogretmenler.Where(s => s.ogretmenId == ogretmenId).Select(x => new OgretmenlerModel()
            {
                ogretmenId = x.ogretmenId,
                ogretmenAdiSoyadi = x.ogretmenAdiSoyadi,
                ogretmenTc = x.ogretmenTc,


            }).ToList();
            foreach (var kayit in liste)
            {

            }

            return liste;
        }

        //Ogretmen EKLEME

        [HttpPost]
        [Route("api/ogretmenekle")]
        public SonucModel OgretmenEkle(OgretmenlerModel model)
        {
            if (db.Ogretmenler.Count(s => s.ogretmenTc == model.ogretmenTc) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Ogretmen Kayıtlıdır";
                return sonuc;
            }
            Ogretmenler ogretmenler = new Ogretmenler();
            ogretmenler.ogretmenId = Guid.NewGuid().ToString();
            ogretmenler.ogretmenTc = model.ogretmenTc;
            ogretmenler.ogretmenAdiSoyadi = model.ogretmenAdiSoyadi;
            db.Ogretmenler.Add(ogretmenler);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Öğretmen Başarıyla Eklendi";
            return sonuc;

        }
        //Ogretmen Düzenleme
        [HttpPut]
        [Route("api/ogretmenduzenle")]
        public SonucModel OgretmenDuzenle(OgretmenlerModel model)
        {
            Ogretmenler kayit = db.Ogretmenler.Where(s => s.ogretmenId == model.ogretmenId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı";
                return sonuc;
            }
            kayit.ogretmenTc = model.ogretmenTc;
            kayit.ogretmenAdiSoyadi = model.ogretmenAdiSoyadi;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ogretmen Düzenlendi";
            return sonuc;
        }
        //Ogretmen SİL
        [HttpDelete]
        [Route("api/ogretmensil/{ogretmenId}")]
        public SonucModel OgretmenSıl(string ogretmenId)
        {
            Ogretmenler kayit = db.Ogretmenler.Where(s => s.ogretmenId == ogretmenId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Ogretmen Bulunamadı";
                return sonuc;
            }
            db.Ogretmenler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ogretmen Silindi";
            return sonuc;
        }
        #endregion
        #region Dersler

        //Dersler Listeleme
        [HttpGet]
        [Route("api/dersliste")]
        public List<DerslerModel> DersListele()
        {
            List<DerslerModel> liste = db.Dersler.Select(x => new DerslerModel()
            {
                dersId = x.dersId,
                dersKod = x.dersKod,
                dersAd = x.dersAd,
                dersEgitimGorevlisiId = x.dersEgitimGorevlisiId,
                dersEgitimGorevlisiAd = x.dersEgitimGorevlisiAd

            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.ogretmenBilgi = OgretmenById(kayit.dersEgitimGorevlisiId);
            }
            return liste;
        }
        //Ders Koduna göre arama
        [HttpGet]
        [Route("api/dersliste/{dersId}")]
        public DerslerModel DerslerById(string dersId)
        {
            DerslerModel liste = db.Dersler.Where(s => s.dersId == dersId).Select(x => new DerslerModel()
            {
                dersKod = x.dersKod,
                dersAd = x.dersAd,
                dersEgitimGorevlisiId = x.dersEgitimGorevlisiId,
                dersEgitimGorevlisiAd = x.dersEgitimGorevlisiAd


            }).FirstOrDefault();
            return liste;
        }
        [HttpGet]
        [Route("api/dersliste/{dersEgitimGorevlisiId}")]
        public DerslerModel DerslerByOgretmen(string dersEgitimGorevlisiId)
        {
            DerslerModel liste = db.Dersler.Where(s => s.dersEgitimGorevlisiId == dersEgitimGorevlisiId).Select(x => new DerslerModel()
            {
                dersKod = x.dersKod,
                dersAd = x.dersAd,
                dersEgitimGorevlisiId = x.dersEgitimGorevlisiId,
                dersEgitimGorevlisiAd = x.dersEgitimGorevlisiAd


            }).FirstOrDefault();
            return liste;
        }

        //Ders Ekleme

        [HttpPost]
        [Route("api/dersekle")]
        public SonucModel DersEkle(DerslerModel model)
        {
            if (db.Dersler.Count(s => s.dersKod == model.dersKod) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Ders Kayıtlıdır";
                return sonuc;
            }
            Dersler dersler = new Dersler();
            dersler.dersId = Guid.NewGuid().ToString();
            dersler.dersKod = model.dersKod;
            dersler.dersAd = model.dersAd;
            dersler.dersEgitimGorevlisiId = model.dersEgitimGorevlisiId;
            dersler.dersEgitimGorevlisiAd = model.dersEgitimGorevlisiAd;
            db.Dersler.Add(dersler);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ders Başarıyla Eklendi";
            return sonuc;

        }
        //Ders Düzenleme
        [HttpPut]
        [Route("api/dersduzenle")]
        public SonucModel DersDuzenle(DerslerModel model)
        {
            Dersler kayit = db.Dersler.Where(s => s.dersId == model.dersId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı";
                return sonuc;
            }
            kayit.dersKod = model.dersKod;
            kayit.dersAd = model.dersAd;
            kayit.dersEgitimGorevlisiId = model.dersEgitimGorevlisiId;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ders Düzenlendi";
            return sonuc;
        }
        //DERS SİL
        [HttpDelete]
        [Route("api/derssil/{dersId}")]
        public SonucModel DersSil(string dersId)
        {
            Dersler kayit = db.Dersler.Where(s => s.dersId == dersId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Ders Bulunamadı";
                return sonuc;
            }
            db.Dersler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ders Silindi";
            return sonuc;
        }
        #endregion
        #region Bolum

        //Bölün Listeleme
        [HttpGet]
        [Route("api/bolumliste")]
        public List<BolumlerModel> BolumListe()
        {
            List<BolumlerModel> liste = db.Bolumler.Select(x => new BolumlerModel()
            {
                bolumId = x.bolumId,
                bolumAd = x.bolumAd
            }).ToList();
            return liste;
        }
        //Id'ye göre arama
        [HttpGet]
        [Route("api/bolumliste/{bolumId}")]
        public BolumlerModel BolumListeById(string bolumId)
        {
            BolumlerModel liste = db.Bolumler.Where(s => s.bolumId == bolumId).Select(x => new BolumlerModel()
            {
                bolumId = x.bolumId,
                bolumAd = x.bolumAd

            }).FirstOrDefault();
            return liste;
        }
        //Bölüm Ekleme

        [HttpPost]
        [Route("api/bolumekle")]
        public SonucModel BolumEkle(BolumlerModel model)
        {
            if (db.Bolumler.Count(s => s.bolumAd == model.bolumAd) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Bölüm Kayıtlıdır";
                return sonuc;
            }
            Bolumler bolumler = new Bolumler();
            bolumler.bolumId = Guid.NewGuid().ToString();
            bolumler.bolumAd = model.bolumAd;
            db.Bolumler.Add(bolumler);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Bölüm Başarıyla Eklendi";
            return sonuc;

        }
        //Bölüm Düzenleme
        [HttpPut]
        [Route("api/bolumduzenle")]
        public SonucModel BolumDuzenle(BolumlerModel model)
        {
            Bolumler kayit = db.Bolumler.Where(s => s.bolumId == model.bolumId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı";
                return sonuc;
            }
            kayit.bolumAd = model.bolumAd;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Bölüm Düzenlendi";
            return sonuc;
        }
        //BOLUM SİL
        [HttpDelete]
        [Route("api/bolumsil/{bolumId}")]
        public SonucModel BolumSıl(string bolumId)
        {
            Bolumler kayit = db.Bolumler.Where(s => s.bolumId == bolumId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Bolum Bulunamadı";
                return sonuc;
            }
            db.Bolumler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Bolum Silindi";
            return sonuc;
        }

        #endregion
        #region Ogrenciler

        //Ogrenci Listeleme
        [HttpGet]
        [Route("api/ogrenciliste")]
        public List<OgrencilerModel> OgrenciListe()
        {
            List<OgrencilerModel> liste = db.Ogrenciler.Select(x => new OgrencilerModel()
            {
                ogrId = x.ogrId,
                ogrAdSoyad = x.ogrAdSoyad,
                ogrBolumId = x.ogrBolumId,
                ogrNo = x.ogrNo,
                ogrBolumAd = x.ogrBolumAd
            }).ToList();
            return liste;
        }
        //Ogr NO ya göre arama
        [HttpGet]
        [Route("api/ogrenciliste/{ogrId}")]
        public OgrencilerModel OgrenciListeById(string ogrId)
        {
            OgrencilerModel liste = db.Ogrenciler.Where(s => s.ogrId == ogrId).Select(x => new OgrencilerModel()
            {
                ogrId = x.ogrId,
                ogrAdSoyad = x.ogrAdSoyad,
                ogrBolumId = x.ogrBolumId,
                ogrNo = x.ogrNo,
                ogrBolumAd = x.ogrBolumAd


            }).FirstOrDefault();
            return liste;
        }
        //Ogrenci Ekleme

        [HttpPost]
        [Route("api/ogrenciekle")]
        public SonucModel OgrenciEkle(OgrencilerModel model)
        {
            if (db.Ogrenciler.Count(s => s.ogrNo == model.ogrNo) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Öğrenci Numarası Kayıtlıdır";
                return sonuc;
            }
            Ogrenciler ogrenciler = new Ogrenciler();
            ogrenciler.ogrId = Guid.NewGuid().ToString();
            ogrenciler.ogrAdSoyad = model.ogrAdSoyad;
            ogrenciler.ogrBolumId = model.ogrBolumId;
            ogrenciler.ogrNo = model.ogrNo;
            ogrenciler.ogrBolumAd = model.ogrBolumAd;
            db.Ogrenciler.Add(ogrenciler);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ogrenci Başarıyla Eklendi";
            return sonuc;

        }
        //OGRENCİ Düzenleme
        [HttpPut]
        [Route("api/ogrenciduzenle")]
        public SonucModel OgrenciDuzenle(OgrencilerModel model)
        {
            Ogrenciler kayit = db.Ogrenciler.Where(s => s.ogrId == model.ogrId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı";
                return sonuc;
            }
            kayit.ogrAdSoyad = model.ogrAdSoyad;
            kayit.ogrBolumId = model.ogrBolumId;
            kayit.ogrNo = model.ogrNo;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Öğrenci Düzenlendi";
            return sonuc;
        }
        //OGRENCİ SİL
        [HttpDelete]
        [Route("api/ogrencisil/{ogrId}")]
        public SonucModel OgrenciSil(string ogrId)
        {
            Ogrenciler kayit = db.Ogrenciler.Where(s => s.ogrId == ogrId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Ogrenci Bulunamadı";
                return sonuc;
            }
            db.Ogrenciler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Ogrenci Silindi";
            return sonuc;
        }

        #endregion
        #region Konular

        //Konu Listeleme
        [HttpGet]
        [Route("api/konulistele")]
        public List<KonularModel> KonuListele()
        {
            List<KonularModel> liste = db.Konular.Select(x => new KonularModel()
            {
                konuId = x.konuId,
                konuBaslik = x.konuBaslik,
                konuAciklama = x.konuAciklama,
                konuDersId = x.konuDersId,
                konuDersAd =x.konuDersAd,
            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.dersBilgi = DerslerById(kayit.konuDersId);
            }
            return liste;
        }
        [HttpGet]
        [Route("api/derskonulistele/{dersId}")]
        public List<KonularModel> KonuByDers(string dersId)
        {
            List<KonularModel> liste = db.Konular.Where(s => s.konuDersId == dersId).Select(x => new KonularModel()
            {
                konuId = x.konuId,
                konuBaslik = x.konuBaslik,
                konuAciklama = x.konuAciklama,
                konuDersId = x.konuDersId,
                konuDersAd = x.konuDersAd,
            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.dersBilgi = DerslerById(kayit.konuDersId);
            }
            return liste;
        }
        [HttpGet]
        [Route("api/ogrencibolum/{bolumId}")]
        public List<OgrencilerModel> OgrenciBolum(string bolumId)
        {
            List<OgrencilerModel> liste = db.Ogrenciler.Where(s => s.ogrBolumId == bolumId).Select(x => new OgrencilerModel()
            {
                ogrId = x.ogrId,
                ogrNo = x.ogrNo,
                ogrAdSoyad = x.ogrAdSoyad,
                ogrBolumId = x.ogrBolumId,
            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.bolumBilgi = BolumListeById(kayit.ogrBolumId);
            }
            return liste;
        }
        //Derse gore konu listeleme
        [HttpGet]
        [Route("api/konulistele/{konuId}")]
        public KonularModel KonuListeById(string konuID)
        {
            KonularModel liste = db.Konular.Where(s => s.konuId == konuID).Select(x => new KonularModel()
            {
                konuId = x.konuId,
                konuBaslik = x.konuBaslik,
                konuAciklama = x.konuAciklama,
                konuDersId = x.konuDersId,
                konuDersAd = x.konuDersAd,

            }).FirstOrDefault();
            return liste;
        }
        //Konu Ekleme

        [HttpPost]
        [Route("api/konuekle")]
        public SonucModel KonuEkle(KonularModel model)
        {
            if (db.Konular.Count(s => s.konuBaslik == model.konuBaslik) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = " Girilen Konu Başlığı Kayıtlıdır";
                return sonuc;
            }
            Konular konular = new Konular();
            konular.konuId = Guid.NewGuid().ToString();
            konular.konuBaslik = model.konuBaslik;
            konular.konuAciklama = model.konuAciklama;
            konular.konuDersId = model.konuDersId;
            konular.konuDersAd = model.konuDersAd;
            db.Konular.Add(konular);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Konu Başarıyla Eklendi";
            return sonuc;

        }
        //KONU Düzenleme
        [HttpPut]
        [Route("api/konuduzenle")]
        public SonucModel KonuDuzenke(KonularModel model)
        {
            Konular kayit = db.Konular.Where(s => s.konuId == model.konuId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı";
                return sonuc;
            }
            kayit.konuBaslik = model.konuBaslik;
            kayit.konuAciklama = model.konuAciklama;
            kayit.konuDersId = model.konuDersId;
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Konu Düzenlendi";
            return sonuc;
        }
        //KONU SİL
        [HttpDelete]
        [Route("api/konusil/{konuId}")]
        public SonucModel KonuSil(string konuId)
        {
            Konular kayit = db.Konular.Where(s => s.konuId == konuId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Konu Bulunamadı";
                return sonuc;
            }
            db.Konular.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Konu Silindi";
            return sonuc;
        }

        #endregion
        #region SecilenProjeler

        //Seçilen Projeler Listeleme
        [HttpGet]
        [Route("api/secilenprojelistele")]
        public List<secilenProjelerModel> SecilenProjeListele()
        {
            List<secilenProjelerModel> liste = db.secilenProjeler.Select(x => new secilenProjelerModel()
            {
                secProjeId = x.secProjeId,
                secProjeOgrId = x.secProjeOgrId,
                secProjeDersId = x.secProjeDersId,
                secProjeKonuId = x.secProjeKonuId,
            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.ogrBilgi = OgrenciListeById(kayit.secProjeOgrId);
                kayit.konuBilgi = KonuListeById(kayit.secProjeKonuId);
                kayit.dersBilgi = DerslerById(kayit.secProjeDersId);
            }

            return liste;
        }
        //Ders Koduna gore Secilen Proje listeleme
        [HttpGet]
        [Route("api/secilenprojelistele/{secProjeId}")]
        public secilenProjelerModel SecilenProjeById(string secProjeId)
        {
            secilenProjelerModel liste = db.secilenProjeler.Where(s => s.secProjeId == secProjeId).Select(x => new secilenProjelerModel()
            {
                secProjeOgrId = x.secProjeOgrId,
                secProjeDersId = x.secProjeDersId,
                secProjeKonuId = x.secProjeKonuId,

            }).FirstOrDefault();
            return liste;
        }
        [HttpGet]
        [Route("api/secilenprojelistelebyogrenci/{ogrId}")]
        public List<secilenProjelerModel> SecProjeByOgrenci(string ogrId)
        {
            List<secilenProjelerModel> liste = db.secilenProjeler.Where(s => s.secProjeOgrId == ogrId).Select(x => new secilenProjelerModel()
            {
                secProjeOgrId = x.secProjeOgrId,
                secProjeDersId = x.secProjeDersId,
                secProjeKonuId = x.secProjeKonuId,


            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.ogrBilgi = OgrenciListeById(kayit.secProjeOgrId);
                kayit.konuBilgi = KonuListeById(kayit.secProjeKonuId);
                kayit.dersBilgi = DerslerById(kayit.secProjeDersId);
            }

            return liste;
        }
        [HttpGet]
        [Route("api/secilenprojelistelebykonular/{konuId}")]
        public List<secilenProjelerModel> SecProjeByKonular(string konuId)
        {
            List<secilenProjelerModel> liste = db.secilenProjeler.Where(s => s.secProjeKonuId == konuId).Select(x => new secilenProjelerModel()
            {
                secProjeOgrId = x.secProjeOgrId,
                secProjeDersId = x.secProjeDersId,
                secProjeKonuId = x.secProjeKonuId,


            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.ogrBilgi = OgrenciListeById(kayit.secProjeOgrId);
                kayit.konuBilgi = KonuListeById(kayit.secProjeKonuId);
                kayit.dersBilgi = DerslerById(kayit.secProjeDersId);
            }

            return liste;
        }
        [HttpGet]
        [Route("api/dersbyogretmen/{ogretmenId}")]
        public List<DerslerModel> DersByOgretmen(string ogretmenId)
        {
            List<DerslerModel> liste = db.Dersler.Where(s => s.dersEgitimGorevlisiId == ogretmenId).Select(x => new DerslerModel()
            {
                dersAd = x.dersAd,
                dersKod = x.dersKod,
                dersEgitimGorevlisiId =x.dersEgitimGorevlisiId,


            }).ToList();
            foreach (var kayit in liste)
            {

                kayit.ogretmenBilgi = OgretmenById(kayit.dersEgitimGorevlisiId);
            }

            return liste;
        }
        [HttpGet]
        [Route("api/dersinkonularıliste/{dersId}")]
        public List<KonularModel> DersinKonuları(string dersId)
        {
            List<KonularModel> liste = db.Konular.Where(s => s.konuDersId == dersId).Select(x => new KonularModel()
            {

                konuId = x.konuId,
                konuDersId = x.konuDersId,
            }).ToList();

            foreach (var kayit in liste)
            {

                kayit.dersBilgi = DerslerById(kayit.konuDersId);
            }

            return liste;
        }



        //SecilenProje Ekleme

        [HttpPost]
        [Route("api/secilenprojeekle")]
        public SonucModel SecilenProjeEkle(secilenProjelerModel model)
        {

            secilenProjeler secilenProjeler = new secilenProjeler();
            secilenProjeler.secProjeId = Guid.NewGuid().ToString();
            secilenProjeler.secProjeOgrId = model.secProjeOgrId;
            secilenProjeler.secProjeDersId = model.secProjeDersId;
            secilenProjeler.secProjeKonuId = model.secProjeKonuId;

            db.secilenProjeler.Add(secilenProjeler);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Proje Başarıyla Seçildi";
            return sonuc;

        }
        //Seçilen Proje Düzenleme Olmayacak öğrenci yanlış konu seçtiğinde eğitim görevlisi tamamen silicek ve tekrardan seçmesi gerekicek

        //Seçilen Proje SİL
        [HttpDelete]
        [Route("api/secilenprojesil/{secProjeId}")]
        public SonucModel SecilenProjeSil(string secProjeId)
        {
            secilenProjeler kayit = db.secilenProjeler.Where(s => s.secProjeId == secProjeId).FirstOrDefault();
            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Konu Bulunamadı";
                return sonuc;
            }
            db.secilenProjeler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Konu Silindi";
            return sonuc;
        }
        #endregion
        
    }
}