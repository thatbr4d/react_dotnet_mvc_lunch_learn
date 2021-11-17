using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using DNR.Data.Models;

namespace reactjsnet.Models
{
    public class DemoViewModel
    {
        [Required]
        public string WorkoutName { get; set; }

        [Required]
        public string Date { get; set; }

        public Exercise[] Exercises {get; set; }
        
        public class Exercise
        {
            [Required]
            public string ExerciseName { get; set; }
            public Set[] Sets { get; set; } 
        }

        public class Set
        {
            [Required]
            public string Reps { get; set; }
        }

        public DemoViewModel(){}
        public DemoViewModel(WorkoutModel workout)
        {
            if(workout == null) {
                Exercises = new []{
                    new Exercise{
                        Sets = new []{
                            new Set{
                                Reps = ""
                            }
                        }
                    }
                };

                return;
            }

            WorkoutName = workout.Name;
            Date = workout.Date.ToShortDateString();

            Exercises = new Exercise[workout.Exercises.Count];
            for(int i = 0; i < workout.Exercises.Count; i++)
            {
                Exercises[i] = new Exercise();
                var exercise = workout.Exercises[i];
                Exercises[i].ExerciseName = exercise.Name;

                Exercises[i].Sets = new Set[exercise.Sets.Count];
                for(int j = 0; j < exercise.Sets.Count; j++)
                {
                    Exercises[i].Sets[j] = new Set();
                    Exercises[i].Sets[j].Reps = exercise.Sets[j].Reps;
                }
            }
            
        }

        public WorkoutModel ToWorkout()
        {
            var model = new WorkoutModel{
                Name = WorkoutName,
                Date = DateTime.Parse(Date),
            };

            model.Exercises = new List<ExerciseModel>();
            foreach(var exercise in Exercises)
            {
                var exerciseModel = new ExerciseModel{
                    Name = exercise.ExerciseName,
                };

                exerciseModel.Sets = new List<SetModel>();
                foreach(var set in exercise.Sets){
                    exerciseModel.Sets.Add(new SetModel{
                        Reps = set.Reps
                    });
                }

                model.Exercises.Add(exerciseModel);
            }
            
            return model;
        }

    }
}