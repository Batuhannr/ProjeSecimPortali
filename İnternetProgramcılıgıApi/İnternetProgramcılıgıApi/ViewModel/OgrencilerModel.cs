using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İnternetProgramcılıgıApi.ViewModel
{
    public class OgrencilerModel
    {
        public string ogrId { get; set; }
        public string ogrNo { get; set; }
        public string ogrAdSoyad { get; set; }
        public string ogrBolumId { get; set; }
        public string ogrBolumAd { get; set; }
        public secilenProjelerModel secProjeBilgi { get; set; }
        public BolumlerModel bolumBilgi { get; set; }

    }
}