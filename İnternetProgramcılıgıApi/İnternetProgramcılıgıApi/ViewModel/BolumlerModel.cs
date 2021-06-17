using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İnternetProgramcılıgıApi.ViewModel
{
    public class BolumlerModel
    {
        public string bolumId { get; set; }
        public string bolumAd { get; set; }
        public OgrencilerModel ogrBilgi { get; set; }
    }
}