---
sidebar: auto
---

# Timetable Planner

## Vision
This component helps UofT students plan their courses to generate their optimal timetable. 

The timetable planner allows students to enter their course load and get back a timetable that fits their needs. The vision for the timetable planner includes taking student preferences into account such as: 

- How early students wish to start and end classes
- What days students would like to take off
- What times students would prefer gap time and breaks


## Overview

![timetable-journey](./Timetable-journey.png)

Once the user selects the courses from the Course Guide, the user views the timetable. 

The timetable will display whether or not if the selected courses have a valid time, that is no conflict for all courses.

 - Valid:
 
![timetable](./timetable.png)

 - Invalid:
 
![error1](./error1.png)

There are serveral preferences that the user can select to optimize the timetable:

![timetableconstraint](./timetableconstraint.png)


 - Minimize/Maximize idle time: The user can maximize or minimize the gap time between courses.
 - Days off: The user can select the day(s) off so there will be no course appear on that day.
 - Avoid Morning/Evening Class: The user can choose whether if they want to have courses in the morning or evening.
 
The timetable will return invalid and displays a message if the constraints are unreachable.

![error2](./error2.png)

The user can also choose to lock certain course times. 

When preferences are made, those times will not be changed.

![lock1](./lock1.png)

after some preferences made:

![lock2](./lock2.png)