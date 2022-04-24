using workout_application_backend.Data;
using workout_application_backend.Models;

namespace workout_application_backend.Repositories
{
    public interface IExerciseRepository
    {
        List<Exercise> GetAllExercises();
    }
    public class ExerciseRepository : IExerciseRepository
    {
        private readonly ApplicationDbContext dbContext;

        public ExerciseRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;

        }

        public List<Exercise> GetAllExercises()
        {
            return dbContext.Exercises.ToList();
        }


    }
}
