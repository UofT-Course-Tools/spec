# Timetable Planner

A web app that helps UofT students plan their courses to generate their optimal timetable. 

The timetable planner allows students to enter their course load and get back a timetable that fits their needs. The vision for the timetable planner includes taking student preferences into account such as: 

- How early students wish to start and end classes
- What days students would like to take off
- What times students would prefer gap time and breaks


## Overview

![courseguide_to_timetable](courseguide_to_timetable.png)

## Data Sources

### 1. Course Selection API:

__Data Provided:__  *course code* and *meeting section* data from course selection. (refer to **Data Structures 1-2** for details). 


## Data Structures:

### 1. Course Code: 

``` json
{
    "code": string
}
```

### 2. Meeting Section: 

```json
{
    "times": [Time],
    "size": Number,
    "enrolment": Number
}
```