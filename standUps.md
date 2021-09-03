## 22-June

I completed the Sports, Presidents, and Cakes activities and gotten my code reviewed. I also setup the form page for the AJAX-Custom Entity activity I'm currently working on.

For today, I'll finish implementing the proper endpoints with the corresponding buttons on that page and render the correct content.

As for blockers, I haven't ran into any errors yet, but I need to review the materials on rendering or displaying content on the DOM, instead of console logging the info.

# Daily Task

-   [x] Develop getFormData() and associated functionalities
-   [x] Make buttons functional and link buttons properly
-   [x] Get a Code Review

---

## 23-June

I completed the Custom Entity Endpoints and have gotten my code reviewed. I also removed the "entityId" that was declared in the global scope that Brijesh pointed out and instead assigned the "Update" button the entityId that corresponds to the correct item to be edited.

For today, I'll start the starter project and read through the documentation and materials. My goal is to get to the first coding part of the starter project and finish it.

As for blockers, (none at the moment except for) lack of knowledge. So reading through the materials and documentations and understanding it is a way to get past the blocker.

# Daily Task

-   [x] Read through Starter Project materials, documentations, and instructions
-   [x] Exercise /api/users and /api/friends endpoints using Postman
-   [x] Start on setting up on Registration Page (i.e. forms, buttons, links)

---

## 24-June

I finished the Registration and Log In pages and linked both successfully. I also got started with the Home Page and got the logout functionality finished.

For today, I'll finish the Home page and get started with the Friends page.

Blockers, I have a destist's appointment later on at 2:30pm which can take-up 2 hours of my day. I'll try and get as much as I can done early on.

# Daily Task

-   [x] Handle logging out and logged out scenarios
-   [x] Display proper logged in user's content on Home Page
-   [x] Finish Home Page

---

## 25-June

I finished the Home Page and successfully redirects the user when they log off. I also started on the Friends page and I'm half way done with in.

For today, I'll finish the Friends page and get started with the Jobs page.

No blockers right now.

# Daily Task

-   [x] .map() and .filter() assessment
-   [x] Friends Page: Delete functionality
-   [x] Friends Page: Search functionality
-   [x] Start on Jobs Page

---

## 26-June

I finished the Friends Page and all of its button functionalities.

For today, I'll keep working on the Jobs page and finish the job creation, and update task, then work on the job listing task.

No blockers right now.

# Daily Task

-   [x] Job Page: Add Job
-   [x] Job Page: Update Job
-   [x] Job Page: List Jobs

---

## 28-June

I finished the Add/Update functionality of Jobs page and also it's list view. I'm currently working on the Edit a job portion of jobs page.

For today, my goal is to be completely done with jobs page and move on to Tech Companies.

No blockers right now.

# Daily Task

-   [x] Job Page: Fill in Tech Company Field on Edit
-   [x] Finish Job Page with quality check
-   [ ] Start on Tech Company Page

---

## 29-June

I got halfway with the edit feature of job page, then started on the React Basics.

For today, I'll focus on finishing React Basics.

No blockers right now.

# Daily Task

---

## 30-June

I finished React Basics. I completed the componentize for each section of the App react page. Also finished adding a click handler and react router.

For today, I'll finish the remaining tasks under ReadMe then get a Code Review.

No blockers right now.

# Daily Task

---

## 01-July

I finished the Componentize tasks and the Registration and User LogIn pages of the starter task using react.

For today, I'll start on the Home page and hopefully finish that today.

No blockers right now.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 02-July

Last stand-up I finished the Home Page. I'm still a bit confused with how and where to initialize state which I'll go on Q for.

For today, I'll start on the Friends page.

And for blockers, just my confusion regarding state.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 03-July

Last stand-up I fixed my SiteNav bugs. I'm able to render it dynamically now based on if the user is logged in or not. Buttons will render and behave accordingly. I also started on the Friends page and got them to populate the component as it mounts.

For today, I'll work on the add and edit features of Friends page.

No blockers.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 06-July

Last I finished Edit, Delete, Search and Pagination functionalities and features of Friends page.

Today I'll be starting on Jobs page.

No blockers.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

### Current Bugs

-   [ ] TechCompany Selector (OnGetTechCompaniesSuccess) populates AFTER onGetJobByIdSuccess: this means dropDown Selector is empty
    > Solution: Populate techCompanies selector first then writeDataForm
    -   [ ] However, on edit, form is not filled because "if" statement on onGetTechCompaniesSuccess is always false.

I'm on the Updating a Job: How do I pass in the JobId to my addAJob.html page url? I need it to select the proper option under my Tech Company selector.

### Queue

How do I pass in the JobId to my addAJob.html page url? I need it to select the proper option under my Tech Company selector; For Example /jobs/form?jobId=123 (Where 123 is the JobId and "form" is the addAJob.html page)

I have read the wiki/State.md but I'm still not able to accomplish what I want to do.

https://stackoverflow.com/questions/47840791/how-can-i-pass-a-query-string-to-window-location-replace

-   [ ] pass in ?jobId=`${jobId}` on the url
-   [ ] use the `${jobId}` to execute jobsService.getJobById(`${jobId}`)
-   [ ] loop through option.length array and select the correct Tech Company based on matching techCompanyId === option[i].attr("id")

https://stackoverflow.com/questions/19491336/how-to-get-url-parameter-using-jquery-or-plain-javascript

### React Install --> React Basic once done --> code review --> React Componentize --> Code Review
