using workout_application_backend.Models;
using workout_application_backend.Repositories;

namespace workout_application_backend.Services
{
    public interface IExerciseServices
    {
        List<string> GetAllExerciseNames();
        List<Exercise> GetAllExercises();
    }
    public class ExerciseServices : IExerciseServices
    {
        private readonly IExerciseRepository exerciseRepository;

        public ExerciseServices(IExerciseRepository exerciseRepository)
        {
            this.exerciseRepository = exerciseRepository;
        }

        public List<Exercise> GetAllExercises()
        {
            return exerciseRepository.GetAllExercises();
        }

        public List<string> GetAllExerciseNames()
        {
            var exercises = exerciseRepository.GetAllExercises();
            List<string> names = new List<string>();

            foreach (Exercise exercise in exercises)
            {
                names.Add(exercise.Name);
            }

            return names;
        }

    }
}
