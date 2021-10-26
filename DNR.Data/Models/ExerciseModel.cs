using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DNR.Data.Models
{
    [Table("Exercises")]
    public class ExerciseModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Name {get;set;}

        [ForeignKey("WorkoutId")]
        public Guid WorkoutId{get;set;}
        public virtual WorkoutModel Workout{get;set;}

        public virtual List<SetModel> Sets{get;set;}

    }
}