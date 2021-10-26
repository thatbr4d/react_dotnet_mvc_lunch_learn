using System.Linq;
using DNR.Business.Services.Interfaces;
using DNR.Data;
using DNR.Data.Models;

namespace DNR.Business.Services
{
    public class WorkoutService : IWorkoutService
    {
        private readonly ApplicationDbContext _db;

        public WorkoutService(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }

        public WorkoutModel GetWorkout()
        {
            _db.Workouts.RemoveRange(_db.Workouts.ToList());
            _db.SaveChanges();

            return _db.Workouts.FirstOrDefault();
        }

        public bool SaveWorkout(WorkoutModel model)
        {
            // Always delete old records, just for demo purpsoses
            _db.Workouts.RemoveRange(_db.Workouts.ToList());

            //_db.Workouts.Add(model);
            //_db.SaveChanges();

            return true;
        }
    }
}