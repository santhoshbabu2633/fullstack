package com.java.bec.service;

import com.java.bec.model.Course;

import java.util.List;

public interface CourseService {
    List<Course> getAllCourses();

    Course getCourseById(Long courseId);

    Course createCourse(Course course);

    Course updateCourse(Long courseId, Course course);

    void deleteCourse(Long courseId);
}
