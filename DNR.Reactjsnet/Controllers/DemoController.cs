using DNR.Business.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using reactjsnet.Models;

namespace reactjsnet.Controllers
{
    public class DemoController : Controller
    {
        private readonly IWorkoutService _workoutService;

        public DemoController(IWorkoutService workoutService)
        {
            _workoutService = workoutService;
        }

        public IActionResult Index()
        {
            return View(new DemoViewModel(_workoutService.GetWorkout()));
        }

        [HttpPost]
        public IActionResult Index(DemoViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            _workoutService.SaveWorkout(model.ToWorkout());
            return RedirectToAction("Index");
        }

    }
}
