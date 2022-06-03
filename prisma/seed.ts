import { getPrisma } from "../src/utils/prisma";

main();

async function main() {
    await seedWorkouts();
    await seedExercises();
    await seedRelations();
    await seedExerciseData();
}

async function seedWorkouts(){
    const prisma = await getPrisma();

    console.debug("Seeding workouts...");

    prisma.workout.deleteMany();
    
    try {            
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
                    title: "Dumbells only",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                },
                {
                    id: "4",
                    title: "Stretching the glutes",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                },
            ] 
        })
    } 
    catch {}
}

async function seedExercises() {
    const prisma = await getPrisma();

    console.debug("Seeding exercises...");

    prisma.exercise.deleteMany();

    try {
        await prisma.exercise.createMany({
            data:[
                { 
                    id: "1",
                    title: "Flat Benchpress", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.", 
                    images : "",
                    category : "Bench",
                },
                {
                    id : "2",
                    title : "Narrrow Grip Bench Press",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Bench"
                },
                {
                    id : "3",
                    title : "Incline Benchpress",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Bench"
                },
                {
                    id : "4",
                    title : "Decline Benchpress",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Bench"
                },
                {
                    id : "5",
                    title : "High Bar Back Squat",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Squat"
                },
                {
                    id : "6",
                    title : "Low Bar Back Squat",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Squat"
                },
                {
                    id : "7",
                    title : "Airsquat",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Squat"
                },
                {
                    id : "8",
                    title : "Front Squat",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Squat"
                },
                {
                    id : "9",
                    title : "Bulgarian Split Squat",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna. Nullam nec consequat quam. Donec justo justo, maximus ac magna ac, tempus sodales justo. Sed varius sit amet eros nec volutpat. Mauris sed orci suscipit, consectetur tellus eu, congue erat. Sed est ligula, sollicitudin nec scelerisque in, mollis ac lorem. Maecenas condimentum aliquet tempus. Suspendisse auctor condimentum diam, a imperdiet felis rhoncus in. Donec a erat sollicitudin, eleifend risus nec, posuere ante. Donec placerat pellentesque mauris vel molestie. Maecenas aliquet egestas elit, finibus egestas dui convallis sit amet. Donec velit leo, feugiat eu scelerisque ut, interdum quis sapien. Nam ut tortor eget nulla faucibus consectetur.",
                    images : "",
                    category : "Squat"
                }
            ]
        });
    }
    catch{}
}

async function seedRelations() {
    const prisma = await getPrisma();

    console.debug("Seeding workout exercise relations...");
    await prisma.workout.update({
        where: { id: "1" },
        data: { exercises: { set: [{id: "5"}, {id: "1"}, {id: "7"}, {id: "2"}] }},
    });
    await prisma.workout.update({
        where: { id: "2" },
        data: { exercises: { set: [{id: "2"},{id: "6"}, {id: "8"}, {id: "3"}] } },
    })
    await prisma.workout.update({
        where: { id: "3" },
        data: { exercises: { set: [{id: "9"},{id: "3"}, {id: "2"}, {id: "4"}] } },
    })
    await prisma.workout.update({
        where: { id: "4" },
        data: { exercises: { set: [{id: "2"}, {id: "1"}, {id: "6"}, {id: "3"}] } }
    })
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
    }
    catch{}

}