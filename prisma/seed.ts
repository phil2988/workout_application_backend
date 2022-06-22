import { getPrisma } from "../src/utils/prisma";

main();

async function main() {
    await seedWorkouts();
    await seedExercises();
    await seedRelations();
    // await seedExerciseData();
}

async function seedWorkouts(){
    const prisma = await getPrisma();


    console.debug("Seeding workouts...");
    try {            
        await prisma.exerciseData.deleteMany();
        await prisma.workout.deleteMany();
        await prisma.exercise.deleteMany();

        await prisma.workout.createMany({
            data:[
                {
                    id: "1",
                    title: "Chest focused workout",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    default: true,
                },
                {
                    id: "2",
                    title: "Kill the legs",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                },
                {
                    id: "3",
                    title: "Big Guns",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                },
                {
                    id: "4",
                    title: "I like big backs",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                },
            ] 
        })
    } 
    catch(error) { console.log(error); }
}

async function seedExercises() {
    const prisma = await getPrisma();
    
    console.debug("Seeding exercises...");
    try {
        await prisma.exercise.createMany({
            data:[
                { 
                    id: "1",
                    title: "Benchpress", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.", 
                    images : "Benchpress.png",
                    category : "Chest",
                },
                {
                    id : "2",
                    title : "Calf Raises",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Calf Raises.png",
                    category : "Legs"
                },
                {
                    id : "3",
                    title : "Chinups",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Chinups.png",
                    category : "Back"
                },
                {
                    id : "4",
                    title : "Crunches",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Crunches.png",
                    category : "Stomach"
                },
                {
                    id : "5",
                    title : "Dips",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Dips.png",
                    category : "Triceps"
                },
                {
                    id : "6",
                    title : "Dumbell Curls",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Dumbell Curls.png",
                    category : "Biceps"
                },
                {
                    id : "7",
                    title : "Front Raises",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Front Raises.png",
                    category : "Chest"
                },
                {
                    id : "8",
                    title : "Lateral Pulldown",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Lateral Pulldown.png",
                    category : "Back"
                },
                {
                    id : "9",
                    title : "Lateral Raises",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Lateral Raises.png",
                    category : "Back"
                },
                {
                    id : "10",
                    title : "Overhead Press",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Overhead Press.png",
                    category : "Shoulders"
                },
                {
                    id : "11",
                    title : "Pullups",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Pullups.png",
                    category : "Biceps"
                },
                {
                    id : "12",
                    title : "Pushdowns",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Pushdowns.png",
                    category : "Triceps"
                },
                {
                    id : "13",
                    title : "Regular Squats",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Regular Squats.png",
                    category : "legs"
                },
                {
                    id : "14",
                    title : "Seated Rows",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Seated Rows.png",
                    category : "Back"
                },
                {
                    id : "15",
                    title : "Upright Rows",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Upright Rows.png",
                    category : "Back"
                },
                {
                    id : "16",
                    title : "Wrist Curls",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "Wrist Curls.png",
                    category : "Forearm"
                }
            ]
        });
    }
    catch(error) { console.log(error); }
}

async function seedRelations() {
    const prisma = await getPrisma();

    console.debug("Seeding workout exercise relations...");
    try {
        await prisma.workout.update({
            // Chest focused workout
            where: { id: "1" },
            data: { exercises: { set: [{id: "1"}, {id: "7"}, {id: "5"}, {id: "12"}] } },
        });
        await prisma.workout.update({
            // Kill the legs
            where: { id: "2" },
            data: { exercises: { set: [{id: "13"},{id: "16"}, {id: "10"}, {id: "2"}] } },
        });
        await prisma.workout.update({
            // Big Guns
            where: { id: "3" },
            data: { exercises: { set: [{id: "5"},{id: "6"}, {id: "11"}, {id: "13"}] } },
        });
        await prisma.workout.update({
            // I like big backs
            where: { id: "4" },
            data: { exercises: { set: [{id: "3"}, {id: "8"}, {id: "15"}, {id: "14"}] } }
        });
    } catch(error) { console.log(error); }
}

async function seedExerciseData(){

    const prisma = await getPrisma();
    
    console.debug("Seeding exercise data");

    prisma.exerciseData.deleteMany();

    try{
        await prisma.exerciseData.createMany({
            data: [
                {
                    id: "1",
                    exerciseId: "1",
                    reps: 10,
                    weight: 20,
                    sets: 3
                },  
                {
                    id: "2",
                    exerciseId: "2",
                    reps: 12,
                    weight: 30,
                    sets: 3
                },  
                {
                    id: "3",
                    exerciseId: "3",
                    reps: 7,
                    weight: 60,
                    sets: 3
                },  
                {
                    id: "4",
                    exerciseId: "4",
                    reps: 8,
                    weight: 30,
                    sets: 3
                },  
                {
                    id: "5",
                    exerciseId: "5",
                    reps: 5,
                    weight: 55,
                    sets: 3
                },  
                {
                    id: "6",
                    exerciseId: "6",
                    reps: 15,
                    weight: 31.5,
                    sets: 3
                },  
                {
                    id: "7",
                    exerciseId: "7",
                    reps: 13,
                    weight: 22,
                    sets: 3
                },  
                {
                    id: "8",
                    exerciseId: "8",
                    reps: 11,
                    weight: 5.5,
                    sets: 3
                },  
                {
                    id: "9",
                    exerciseId: "9",
                    reps: 12,
                    weight: 19,
                    sets: 3
                },  
            ]
        });
    } catch(error) { console.log(error); }
}