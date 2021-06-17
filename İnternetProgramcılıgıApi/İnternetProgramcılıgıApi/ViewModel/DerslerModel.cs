using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İnternetProgramcılıgıApi.ViewModel
{
    public class DerslerModel
    {
        public string dersId { get; set; }
        public string dersAd { get; set; }

        public string dersKod { get; set; }
        public string dersEgitimGorevlisiId { get; set; }
        public string dersEgitimGorevlisiAd { get; set; }
        public OgrencilerModel ogrBilgi { get; set; }
        public OgretmenlerModel ogretmenBilgi { get; set; }
    }
}