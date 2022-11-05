const asyncHandler = require('express-async-handler');
const Course = require('../models/courseModel');

const getCourses = asyncHandler(async (req, res, next) => {
    // find all courses
    const courses = await Course.find({});
    res.status(200).json(courses);
});

const getCourse = asyncHandler(async (req, res, next) => {
    // console.log(req.params.id)
    const _id = req.params.id;
    // find one course
    const course = await Course.findById(_id);
    res.status(200).json(course);
});

const addCourse = asyncHandler(async (req, res, next) => {
    const course = req.body;
    // add course
    const result = await Course.create(course);
    res.status(200).json(result);
})

const updateCourse = asyncHandler(async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    const updateCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateCourse);
})

const deleteCourse = asyncHandler(async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    await course.remove();
    res.status(200).json({ _id: req.params.id });
})
module.exports = {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
}