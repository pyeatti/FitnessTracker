const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// API ROUTES
app.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then((data) => res.json(data));
});
app.put("/api/workouts/:id", ({ body }, res) => {
  db.Workout.create(exercises)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: _id } },
        { new: true }
      )
    )
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});
// app.post("/submit", ({ body }, res) => {
//   db.Workout.create(exercise)
//     .then(({ _id }) =>
//       db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
//     )
//     .then((dbUser) => {
//       res.json(dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
// HTML ROUTES
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

// Listening At
app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
