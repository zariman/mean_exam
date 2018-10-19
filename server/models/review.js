const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Must enter a name"], minlength: [3, "Name must be at least 3 characters"] },
    stars: { type: Number, required: [true, "Must enter number of stars"], min: [1, "Stars must be between 1-5"], max: [5, "Stars must be between 1-5"] },
    review: { type: String, required: [true, "Must enter a review"], minlength: [3, "Review must be at least 3 characters"] },
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);  