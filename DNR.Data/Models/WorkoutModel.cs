using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DNR.Data.Models
{
    [Table("Workouts")]
    public class WorkoutModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Name {get;set;}

        [Required]
        public DateTime Date{get;set;}

        public List<ExerciseModel> Exercises{get;set;}

    }
}