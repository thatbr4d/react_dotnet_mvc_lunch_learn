using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DNR.Business.DataModels
{
    [Table("Test")]
    public class TestModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string TestValueOne { get; set; }

        public string TestValueTwo { get; set; }

    }
}