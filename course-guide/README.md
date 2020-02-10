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
![high-level-demonstration](./High_level_demonstration.png)

This is a brief demonstration of how the user journey will be like when students try our web app.

It shows how student need to start entering their year until finishing with a well optimized time table.

![program-selecting-chart](./Program_Choosing_state.png)

The course guide is construct by two feature first is the program selecting tool, which helps students choose their desire programs

It allows the students to search their subject and browse through the detail of the program, ultimately added to their program cart.

![course-selecting-chart](./Course_Selecting_State.png)

Another component is the course selecting tool, based on the previous program selected, we are can collaborate with the backend to generate a list of recommend courses to select.

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