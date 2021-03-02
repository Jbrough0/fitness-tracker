const { Router } = require("express");
var db = require("../models");
var router=require("express").Router();



    router.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    router.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log("error: Trouble occurred while  creating an exercise roution: ", err)
        }
    })


    router.put("/api/workouts/:id", (req, res) => {

        const workoutId = req.params.id;



        db.Workout.findOneAndUpdate({ _id: workoutId }, { $push: { exercises: request.body } }, { new: true })
            .then((dbWorkout) => {
                res.json(dbWorkout)
            })
            .catch((err) => {
                res.json(err);
            });


    });

router.get("/api/workout/range", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
 module.exports=router;