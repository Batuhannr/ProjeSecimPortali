using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İnternetProgramcılıgıApi.ViewModel
{
    public class OgretmenlerModel
    {
        public string ogretmenId { get; set; }
        public string ogretmenTc { get; set; }
        public string ogretmenAdiSoyadi { get; set; }
        public DerslerModel dersBilgi { get; set; }
    }
}