using System;
using System.ComponentModel.DataAnnotations;

namespace CategoryProduct.Entities.Abstracts
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
