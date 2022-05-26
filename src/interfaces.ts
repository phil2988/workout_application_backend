export type Workout = {
    id: String;
    title: String;
    description: String;
    exercises: Exercise[];
}

export interface Exercise {
    id: String;
    title: String;
    description:  String;
    images: String;
    category: String;
}