using DNR.Data.Models;

namespace DNR.Business.Services.Interfaces
{
    public interface IWorkoutService
    {
        public WorkoutModel GetWorkout();
        public bool SaveWorkout(WorkoutModel model);
    }
}