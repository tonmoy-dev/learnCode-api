const asyncHandler = require('express-async-handler');
const Course = require('../models/courseModel');

const getCourses = asyncHandler(async (req,res,next) => {
    // find all courses
    const courses = await Course.find({});
    
    res.status(200).send(courses);
})

module.exports = {
    getCourses
}