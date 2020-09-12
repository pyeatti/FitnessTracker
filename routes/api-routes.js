const Workout = require("../models/workout");

module.exports = function (app) {
  // GET WORKOUTS
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
  // POST WORKOUTS
  app.post("/api/workouts", (req, res) => {
    Workout.create({}).then((data) => {
      res.json(data);
    });
  });
  // PUT WORKOUTS
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )

      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  // GET STATS
  app.get("/api/workouts/range", (req, res) => {
    Workout.find()
      .limit(7)
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};
