---
sidebar: auto
---

# Course Guide

## Vision
This web feature is designed to work with the UofT Course Tool. 
The Course Guide component is destinate to help any freshman students to have a better understanding of how to select the right course.

The Course Guide feature is able to generate a list of recommend courses based on the given years and programs from students.
This feature helps the student to effectively engage to the other features we have for the UofT Course Tool web app.

## Overview

This is a brief demonstration of how the user journey will be like when students try our web app, It shows how student need to start entering their year until finishing with a well optimized time table.

![high-level-demonstration](./High_level_demonstration.png)


The course guide is construct by two feature:

First: 
 - Program Selecting tool
![program-selecting-chart](./Program_Choosing_state.png)

It allows the students to search their subject and browse through the detail of the program, ultimately added to their program cart.

Here is a better demonstration of the app.

![program-selecting-figma](./figma_pic.png)

As the picture showed, we are able to give the information on academic calendar and help the user to access it more conveniently.  

Second:

 - Course Selecting tool

 ![course-selecting-chart](./Course_Selecting_State.png)

Based on the previous program selected, we can collaborate with the backend to generate a list of recommend courses to select.

![course-selecting-figma](./figma_course_pic.png)

So far we are unable to have any recommendation for higher years due to the messiness of the academic calendar, we can scrap the right information.
## Components

### Course Search Bar 

__Data__ 

Query: The current search query 

__Methods__ 

_search(query)_:  

Searches the course DB for courses that match the query 

Triggered on every input event (with a small debounce value) 

__Sub-Components__

Course Card 