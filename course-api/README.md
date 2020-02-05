# Course API

The Course API provides unified access to UofT course data scattered across UofT's web services. Apps published by UofT Course Tools will use 

## Overview

![Backend Architecture](./backend-architecture.png)

## Data Sources

### Data Source Name (e.g UTM Academic Calendar)

__Data Provided:__

__Link:__  

## Data Structures

### Course

```json
{ 
   "id":String,
   "code":String,
   "name":String,
   "description":String,
   "division":String,
   "department":String,
   "prerequisites":String,
   "exclusions":String,
   "level":Number,
   "campus":String,
   "term":String,
   "breadths":String,
   "meeting_sections":[ 
      MeetingSection
   ]
}
```

### Program

### Meeting Section