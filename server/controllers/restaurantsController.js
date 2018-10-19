const Restaurant = require("mongoose").model("Restaurant");
const Review = require("mongoose").model("Review");

class RestaurantController {

    create(req, res) {
        Restaurant.create(req.body, (e, data) => {
            if (e) return res.json(e);
            return res.json(data);
        });
    }

    all(req, res) {
        Restaurant.find({}, (e, data) => {
            if (e) return res.json(e);
            return res.status(200).json(data);
        })
    }

    findById(req, res) {
        Restaurant.findOne({ _id: req.params.id })
            .populate('reviews')
            .exec((e, data) => {
                if (e) return res.status(404).json(e);
                return res.status(200).json(data);
            })
    }

    update(req, res) {
        Restaurant.findOne({ _id: req.params.id }, (e, restaurant) => {
            if (e) return res.status(404).json(e);
            if (!restaurant) return res.status(404).json("Pet not found");
            restaurant.name = req.body.name;
            restaurant.cuisine = req.body.cuisine;
            restaurant.reviews = req.body.reviews;

            restaurant.save(e => {
                if(e) return res.json(e);
                return res.status(200).json(restaurant);
            })
        })
    }

    addReview(req, res) {
        Review.create(req.body, (e, data) => {
            if (e) return res.json(e);
            Restaurant.findOneAndUpdate({ _id: req.params.id }, { $push: { reviews: data } }, (e, data) => {
                if (e) return res.status(404).json(e);
                return res.status(200).json(data);
            })
        })
    }

    destroy(req, res) {
        Restaurant.findOneAndDelete({ _id: req.params.id }, (e, data) => {
            if (e) return res.status(404).json(e);
            return res.status(200).json(data);
        })
    }
}

module.exports = new RestaurantController();