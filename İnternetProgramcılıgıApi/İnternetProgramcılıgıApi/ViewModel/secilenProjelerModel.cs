using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace İnternetProgramcılıgıApi.ViewModel
{
    public class secilenProjelerModel
    {
        public string secProjeId { get; set; }
        public string secProjeOgrId { get; set; }
        public string secProjeDersId { get; set; }
        public string secProjeKonuId { get; set; }

        public OgrencilerModel ogrBilgi { get; set; }
        public DerslerModel dersBilgi { get; set; }
        public KonularModel konuBilgi { get; set; }
    }
}