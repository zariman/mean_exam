const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: [true, "Must enter a name"], minlength: [3, "Name must be at least 3 characters"] },
    cuisine: { type: String, required: [true, "Must enter a type of cuisine"], minlength: [3, "Cuisine must be at least 3 characters"] },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, { timestamps: true });

RestaurantSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Restaurant', RestaurantSchema);  