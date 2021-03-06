import { getPrisma } from "../src/utils/prisma";

main();

enum ExerciseCategory{
    chest = "Chest",
    back = "Back",
    biceps = "Biceps",
    triceps = "Triceps",
    legs = "Legs",
    stomach = "Stomach",
    shoulders = "Shoulders",
    forearm = "Forearm",
}

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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    default: true,
                },
                {
                    id: "2",
                    title: "Kill the legs",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                },
                {
                    id: "3",
                    title: "Big Guns",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                },
                {
                    id: "4",
                    title: "I like big backs",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.", 
                    images : "Benchpress.png",
                    category : ExerciseCategory.chest,
                },
                {
                    id : "2",
                    title : "Calf Raises",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Calf Raises.png",
                    category : ExerciseCategory.legs,
                },
                {
                    id : "3",
                    title : "Chinups",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Chinups.png",
                    category : ExerciseCategory.back,
                },
                {
                    id : "4",
                    title : "Crunches",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Crunches.png",
                    category : ExerciseCategory.stomach
                },
                {
                    id : "5",
                    title : "Dips",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Dips.png",
                    category : ExerciseCategory.triceps,
                },
                {
                    id : "6",
                    title : "Dumbell Curls",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Dumbell Curls.png",
                    category : ExerciseCategory.biceps,
                },
                {
                    id : "7",
                    title : "Front Raises",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Front Raises.png",
                    category : ExerciseCategory.chest,
                },
                {
                    id : "8",
                    title : "Lateral Pulldown",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Lateral Pulldown.png",
                    category : ExerciseCategory.back,
                },
                {
                    id : "9",
                    title : "Lateral Raises",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Lateral Raises.png",
                    category : ExerciseCategory.back,
                },
                {
                    id : "10",
                    title : "Overhead Press",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Overhead Press.png",
                    category : ExerciseCategory.shoulders,
                },
                {
                    id : "11",
                    title : "Pullups",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Pullups.png",
                    category : ExerciseCategory.biceps,
                },
                {
                    id : "12",
                    title : "Pushdowns",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Pushdowns.png",
                    category : ExerciseCategory.triceps,
                },
                {
                    id : "13",
                    title : "Regular Squats",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Regular Squats.png",
                    category : ExerciseCategory.legs,
                },
                {
                    id : "14",
                    title : "Seated Rows",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Seated Rows.png",
                    category : ExerciseCategory.back,
                },
                {
                    id : "15",
                    title : "Upright Rows",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Upright Rows.png",
                    category : ExerciseCategory.back,
                },
                {
                    id : "16",
                    title : "Wrist Curls",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.",
                    images : "Wrist Curls.png",
                    category : ExerciseCategory.forearm,
                },
                { 
                    id: "17",
                    title: "Decline Benchpress", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.", 
                    images : "Benchpress.png",
                    parentExercise : "Benchpress",
                    category : ExerciseCategory.chest,
                },
                { 
                    id: "18",
                    title: "Incline Benchpress", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.", 
                    images : "Benchpress.png",
                    parentExercise : "Benchpress",
                    category : ExerciseCategory.chest,
                },
                { 
                    id: "19",
                    title: "Floor Benchpress", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo eget urna vehicula tempor. Donec congue turpis nisi, ac luctus orci condimentum et. In justo nibh, dapibus sit amet faucibus at, porttitor at magna.", 
                    images : "Benchpress.png",
                    parentExercise : "Benchpress",
                    category : ExerciseCategory.chest,
                },
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