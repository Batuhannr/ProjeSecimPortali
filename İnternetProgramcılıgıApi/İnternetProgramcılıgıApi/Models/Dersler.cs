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
    
    public partial class Dersler
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Dersler()
        {
            this.Konular = new HashSet<Konular>();
            this.secilenProjeler = new HashSet<secilenProjeler>();
        }
    
        public string dersId { get; set; }
        public string dersAd { get; set; }
        public string dersKod { get; set; }
        public string dersEgitimGorevlisiId { get; set; }
        public string dersEgitimGorevlisiAd { get; set; }
    
        public virtual Ogretmenler Ogretmenler { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Konular> Konular { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<secilenProjeler> secilenProjeler { get; set; }
    }
}
