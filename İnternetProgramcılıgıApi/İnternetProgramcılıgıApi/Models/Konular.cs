//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace İnternetProgramcılıgıApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Konular
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Konular()
        {
            this.secilenProjeler = new HashSet<secilenProjeler>();
        }
    
        public string konuId { get; set; }
        public string konuBaslik { get; set; }
        public string konuAciklama { get; set; }
        public string konuDersId { get; set; }
        public string konuDersAd { get; set; }
    
        public virtual Dersler Dersler { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<secilenProjeler> secilenProjeler { get; set; }
    }
}
