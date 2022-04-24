using Microsoft.AspNetCore.Mvc;
using workout_application_backend.Services;

namespace workout_application_backend.Controllers
{
    public class ExerciseController : Controller
    {
        private readonly IExerciseServices exerciseServices;

        public ExerciseController(IExerciseServices exerciseServices)
        {
            this.exerciseServices = exerciseServices;
        }

        [HttpGet("exercise")]
        public ActionResult<HttpResponseMessage> GetAllExercises()
        {
            Console.WriteLine("Recieved request");
            var result = exerciseServices.GetAllExercises();

            if (result.Any())
            {
                return Ok(result);
            }
            if (!result.Any())
            {
                return NotFound();
            }
            return BadRequest();
        }
        [HttpGet("exercise/name")]
        public ActionResult<HttpResponseMessage> GetAllExerciseNames()
        {
            var result = exerciseServices.GetAllExerciseNames();

            if (result.Any())
            {
                return Ok(result);
            }
            if (!result.Any())
            {
                return NotFound();
            }
            return BadRequest();
        }
    }
}
