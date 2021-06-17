using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İnternetProgramcılıgıApi.ViewModel
{
    public class KonularModel
    {
        public string konuId { get; set; }
        public string konuBaslik { get; set; }
        public string konuAciklama { get; set; }
        public string konuDersId { get; set; }
        public string konuDersAd { get; set; }
        public OgrencilerModel ogrBilgi { get; set; }
        public DerslerModel dersBilgi { get; set; }

    }
}