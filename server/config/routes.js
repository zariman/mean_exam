let restaurant = require("../controllers/restaurantsController.js");
const path = require('path');

module.exports = (app) => {
    app.get("/api/restaurants", restaurant.all);
    app.get("/api/restaurants/:id", restaurant.findById);
    app.post("/api/restaurants", restaurant.create);
    app.patch("/api/restaurants/:id", restaurant.update);
    app.delete("/api/restaurants/:id", restaurant.destroy);
    app.put("/api/restaurants/:id/review", restaurant.addReview);
    
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}