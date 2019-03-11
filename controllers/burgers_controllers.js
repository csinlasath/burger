const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (request, response) => {
    burger.readAll((data) => {
        var handlebarsObject = {
            burgers: data
        };

        response.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", (request, response) => {
    burger.createOne(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], (result) => {
        response.json({
            id: result.insertId
        });
        console.log("Burger Added.  ID: " + result.insertId);
    });
});

router.put("/api/burgers/:id", (request, response) => {
    var condition = "id = " + request.params.id;

    console.log("condition", condition);
    console.log(request.params);
    burger.updateOne(
        {
            devoured: request.body.devoured
        },
        condition, (result) => {
            if (result.changedRows === 0) {
                return response.status(404).end();
            }
            else {
                response.status(200).end();
            }
        });
});

module.exports = router;