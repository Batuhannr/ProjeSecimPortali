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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class FinalOdeviDBEntities2 : DbContext
    {
        public FinalOdeviDBEntities2()
            : base("name=FinalOdeviDBEntities2")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Bolumler> Bolumler { get; set; }
        public virtual DbSet<Dersler> Dersler { get; set; }
        public virtual DbSet<Konular> Konular { get; set; }
        public virtual DbSet<Ogrenciler> Ogrenciler { get; set; }
        public virtual DbSet<Ogretmenler> Ogretmenler { get; set; }
        public virtual DbSet<secilenProjeler> secilenProjeler { get; set; }
        public virtual DbSet<Uye> Uye { get; set; }
        public virtual DbSet<Yoneticiler> Yoneticiler { get; set; }
    }
}
