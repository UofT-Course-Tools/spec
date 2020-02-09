(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,a,s){t.exports=s.p+"assets/img/backend-architecture.a26fc33b.png"},208:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"unified-backend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unified-backend"}},[t._v("#")]),t._v(" Unified Backend")]),t._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("p",[r("img",{attrs:{src:s(202),alt:"Backend Architecture"}})]),t._v(" "),r("p",[t._v("The Course API provides unified access to UofT course data scattered across UofT's web services. The API relies on three main sources "),r("a",{attrs:{href:"#_1-uoft-course-finder"}},[t._v("UofT Course Finder")]),t._v(", "),r("a",{attrs:{href:"#_2-utm-academic-calendar"}},[t._v("UTM Academic Calendar")]),t._v(", "),r("a",{attrs:{href:"#_3-utm-program-selection-guide"}},[t._v("UTM Program Selection Guide")]),t._v(" , and "),r("a",{attrs:{href:"#_4-utm-course-evaluations"}},[t._v("UTM Course Evaluations")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"data-sources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-sources"}},[t._v("#")]),t._v(" Data Sources")]),t._v(" "),r("h3",{attrs:{id:"_1-uoft-course-finder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-uoft-course-finder"}},[t._v("#")]),t._v(" 1. "),r("a",{attrs:{href:"http://coursefinder.utoronto.ca/course-search/search/courseSearch?viewId=CourseSearch-FormView&methodToCall=start",target:"_blank",rel:"noopener noreferrer"}},[t._v("UofT Course Finder:"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Data Provided:")]),t._v(" Information regarding every course in all 3 UofT campuses. Information such as lecture time, professors, pre-requisite etc are provided (refer to "),r("a",{attrs:{href:"#_1-course"}},[r("strong",[t._v("Data Structures 1-3")])]),t._v(" for details).")]),t._v(" "),r("h3",{attrs:{id:"_2-utm-academic-calendar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-utm-academic-calendar"}},[t._v("#")]),t._v(" 2. "),r("a",{attrs:{href:"https://student.utm.utoronto.ca/calendar/program_list.pl",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM Academic Calendar:"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Data Provided:")]),t._v(" Information regarding every program in UTM. Information such as post requirement, required courses, program level (minor, major, specialist) etc are provided (refer to "),r("a",{attrs:{href:"#_4-subject"}},[r("strong",[t._v("Data Structures 4-5")])]),t._v(" for details).")]),t._v(" "),r("h3",{attrs:{id:"_3-utm-program-selection-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-utm-program-selection-guide"}},[t._v("#")]),t._v(" 3. "),r("a",{attrs:{href:"https://www.utm.utoronto.ca/registrar/office-registrar-publications/program-selection-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM Program Selection Guide:"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Data Provided:")]),t._v(" Program type (1, 2, 3) for every UTM program. This information is stored as a attribute in "),r("a",{attrs:{href:"#_5-program"}},[r("strong",[t._v("Data Structures 5, Program")])]),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"_4-utm-course-evaluations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-utm-course-evaluations"}},[t._v("#")]),t._v(" 4. "),r("a",{attrs:{href:"https://course-evals.utoronto.ca/BPI/fbview.aspx?blockid=hjeZ7JJWJupVgjPoyu&userid=tO4GQugFiFULB0AXgInh7idHCU-AnN3pNhvC&lng=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM Course Evaluations:"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("Data Provided:")]),t._v(" Course evaluation results for UTM Mississauga Undergraduate Programs (refer to "),r("a",{attrs:{href:"#_6-course-evaluation"}},[r("strong",[t._v("Data Structure 6")])]),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"scraper-breakdown"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scraper-breakdown"}},[t._v("#")]),t._v(" Scraper Breakdown")]),t._v(" "),r("h3",{attrs:{id:"_1-utm-course-scraper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-utm-course-scraper"}},[t._v("#")]),t._v(" 1. UTM Course Scraper:")]),t._v(" "),r("p",[t._v("The scraper takes data from "),r("a",{attrs:{href:"#_1-uoft-course-finder"}},[r("strong",[t._v("Data Source, UofT Course Finder")])]),t._v(" then every single course with the code "),r("em",[t._v("H5")]),t._v(" is placed into a queue. Each of the threads extract a course and scrape the relevant data (refer to "),r("a",{attrs:{href:"#_1-course"}},[r("strong",[t._v("Data Structures 1-3")])]),t._v(" for details).")]),t._v(" "),r("h3",{attrs:{id:"_2-utm-program-scraper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-utm-program-scraper"}},[t._v("#")]),t._v(" 2. UTM Program Scraper:")]),t._v(" "),r("p",[t._v("The scraper takes data from "),r("a",{attrs:{href:"#_2-utm-academic-calendar"}},[r("strong",[t._v("Data Source, UTM Academic Calendar")])]),t._v(" then the data are placed into 2 objects (refer to "),r("a",{attrs:{href:"#_4-subject"}},[r("strong",[t._v("Data Structures 4-5")])]),t._v(" for details). The data is used for the course guide API to provide recommended courses.")]),t._v(" "),r("h3",{attrs:{id:"_3-course-evaluation-scraper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-course-evaluation-scraper"}},[t._v("#")]),t._v(" 3. Course Evaluation Scraper")]),t._v(" "),r("p",[t._v("The scraper takes data from "),r("a",{attrs:{href:"#_4-utm-course-evaluations"}},[r("strong",[t._v("Data Source, UTM Course Evaluations")])]),t._v(".")]),t._v(" "),r("p",[t._v("Items 1-9 are criteria with responses that range from 1 to 5, with 1 as the lowest rating and 5 as the highest rating.")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("item 1:")]),t._v(" I found the course intellectually stimulating.")]),t._v(" "),r("li",[r("strong",[t._v("item 2:")]),t._v(" The course provided me with a deeper understanding of the subject matter.")]),t._v(" "),r("li",[r("strong",[t._v("item 3:")]),t._v(" The instructor created a course atmosphere that was conducive to my learning.")]),t._v(" "),r("li",[r("strong",[t._v("item 4:")]),t._v(" Course projects, assignments, tests and/or exams improved my understanding of the course material.")]),t._v(" "),r("li",[r("strong",[t._v("item 5:")]),t._v(" Course projects, assignments, tests and/or exams provided opportunity for me to demonstrate an understanding of the course material.")]),t._v(" "),r("li",[r("strong",[t._v("item 6:")]),t._v(" Overall, the quality of my learning experience in this course was: (Scale for Item 6: Poor, Fair, Good, Very Good, Excellent).")]),t._v(" "),r("li",[r("strong",[t._v("item 7:")]),t._v(" Course Workload.")]),t._v(" "),r("li",[r("strong",[t._v("item 8:")]),t._v(" I would recommend this course.")]),t._v(" "),r("li",[r("strong",[t._v("item 9:")]),t._v(" I inspired to learn subject matter.")])]),t._v(" "),r("h2",{attrs:{id:"data-structures"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[t._v("#")]),t._v(" Data Structures")]),t._v(" "),r("h3",{attrs:{id:"_1-course"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-course"}},[t._v("#")]),t._v(" 1. Course")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"division"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"department"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prerequisites"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclusions"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"campus"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"term"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"breadths"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meeting_sections"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n      MeetingSection\n   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"_2-meeting-section"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-meeting-section"}},[t._v("#")]),t._v(" 2. Meeting Section")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"instructors"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"times"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Time"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enrolment"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"_3-time"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-time"}},[t._v("#")]),t._v(" 3. Time")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"day"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"_4-subject"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-subject"}},[t._v("#")]),t._v(" 4. Subject")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"degree"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notes"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"programs"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Program"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"_5-program"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-program"}},[t._v("#")]),t._v(" 5. Program")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"program_type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("int"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notes"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"degree"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"credits"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"courses"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"first"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"second"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"third"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fourth"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"_6-course-evaluation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-course-evaluation"}},[t._v("#")]),t._v(" 6. Course Evaluation")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"department"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"course"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Prof"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"term"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("int"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 1"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 2"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 3"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 4"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 5"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 6"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 7"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 8"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n   "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item 9"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("float"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);