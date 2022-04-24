using Microsoft.EntityFrameworkCore;
using workout_application_backend.Models;

namespace workout_application_backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            Database.EnsureCreated();

            if (!Exercises.Any())
            {
                SeedExercises();
            }
        }
        public DbSet<Exercise> Exercises { get; set; }

        private void SeedExercises()
        {
            Exercises.AddRange(
                 new Exercise() { 
                     Id = Guid.NewGuid(), 
                     Name = "Flat Benchpress", 
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.", 
                     Images = "",
                     Category = "Bench"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Narrrow Grip Bench Press",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Bench"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Incline Benchpress",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Bench"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Decline Benchpress",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Bench"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "High Bar Back Squat",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Squat"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Low Bar Back Squat",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Squat"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Airsquat",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Squat"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Front Squat",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Squat"
                 },
                 new Exercise()
                 {
                     Id = Guid.NewGuid(),
                     Name = "Bulgarian Split Squat",
                     Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                     Images = "",
                     Category = "Squat"
                 }
            );
            SaveChanges();
        }
    }
}

