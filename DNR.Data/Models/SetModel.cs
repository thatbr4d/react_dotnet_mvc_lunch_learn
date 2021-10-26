using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DNR.Data.Models
{
    [Table("Sets")]
    public class SetModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Reps{get;set;}
    
        [ForeignKey("ExerciseId")]
        public Guid ExerciseId{get;set;}
        public virtual ExerciseModel Exercise{get;set;}

    }
}