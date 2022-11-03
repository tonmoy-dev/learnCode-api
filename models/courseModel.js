const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const courseSchema = Schema({
    title: String,
    subTitle: String,
    description: String,
    thumbnail: String,
    duration: Number,
    lectures: Number,
    instructor: String,
    rating: Number,
    enrolled: Number,
    originalPrice: Number,
    currentPrice: Number,
    status: String
});

module.exports = model('Course', courseSchema);
