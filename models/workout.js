const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: Date,
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: number,
        weight: number,
        reps: number,
        sets: number,
      },
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: number,
        weight: number,
        reps: number,
        sets: number,
      },
      {
        type: "resistance",
        name: "Push Press",
        duration: number,
        weight: number,
        reps: number,
        sets: number,
      },
      {
        type: "resistance",
        name: "Bench Press",
        duration: number,
        weight: number,
        reps: number,
        sets: number,
      },
      {
        type: "resistance",
        name: "Quad Press",
        duration: number,
        weight: number,
        reps: number,
        sets: number,
      },
      {
        type: "resistance",
        name: "Military Press",
        duration: number,
        weight: number,
        reps: number,
        sets: number,
      },
      {
        type: "cardio",
        name: "Running",
        duration: number,
        distance: number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return (
    this.exercises.reduce((accumulator, exercise) => {
      return accumulator + exercise.duration;
    }),
    0
  );
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
