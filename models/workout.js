const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    day: Date,
    exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
      },
    ],
  },
  {
    toJSON: {
      virtual: true,
    },
  }
);
workoutSchema.virtual("totalDuration").get(function () {
  return (
    this.exercises.reduce((accumulator, exercise) => {
      return accumulator + exercise.duration;
    }),
    0
  );
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
