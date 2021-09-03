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

Last meeting I finished Edit, Delete, Search and Pagination functionalities and features of Friends page.

Today I'll be starting on Jobs page.

No blockers.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 07-July

Last meeting I completed Edit, Update, Search and Paginated List View functionalities of Jobs Page.

Today I'll be working on the Modal feature of view more button of Jobs Page and start on Tech Companies.

No blockers.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 08-July

Last meeting I fixed the bugs on my modal view for my Jobs page. The skills array weren't displaying correctly when the same Job is viewed twice. The problem was the my conditional statements weren't checking all scenarios that when it encounters the same job, that jobs skills list isn't an array anymore. I fixed it though and now it behaves correctly. Also the View More Modal feature doesn't make any extra Ajax calls per the instructions.

Today I'll start on the Tech Company Form setup. I'll finish the adding a company functionality today.

No blockers.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 09-July

Last meeting I completed the GET request to grab all techCompanies and display them on the companies page. I also started on the form page of tech companies. I downloaded and installed the SQL server.

Today I'll finish the create or add a company functionality of Companies page.

No blockers.

# Daily Task

-   [ ]
-   [ ]
-   [ ]

---

## 12-July

Last meeting I completed the create, read, update and view more functionalities of tech companies, however I ran into some bugs while running some test cases; for example, the contactInformation returns null even though its filled out using the form, and the url and tag fields are not being converted into array.

Today my goal is to finish fixing those bugs and have Tech Companies running bug free. And also get started with the layout of the Events page.

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

# Mapping Assessment: Instructions

Instructions
Create a new file for component called Cars.
Display this component as a child component of App.jsx.
Add to the state of this new component the following array:
[
{
make: "Kia",
model: "Sorento",
year: 2020
},
{
make: "Kia",
model: "Optima",
year: 2019
},
{
make: "Tesla",
model: "Model 3",
year: 2021
},
{
make: "Honda",
model: "Civic",
year: 2019
},
{
make: "Honda",
model: "Accord",
year: 2018
},
{
make: "Volkswagen",
model: "Jetta",
year: 2021
},
{
make: "Toyota",
model: "Camry",
year: 2021
},
{
make: "Ford",
model: "Mustang",
year: 2019
},
{
make: "Ford",
model: "F-150",
year: 2019
},
{
make: "Toyota",
model: "Camry",
year: 2020
},
{
make: "Ford",
model: "F-150",
year: 2021
}
]
Render all of the cars on the page. You can use the template below for convenience:

 <div className="card col-md-3 m-1">
            <div className="card-body">
                <h5 className="card-title">Make</h5>
                <h5 className="card-text">Model</h5>
                <h5 className="card-text">Year</h5>
            </div>
        </div>
    Make sure you are optimizing your component by creating a child component based on the template above.
    Create a button called Show Cars that upon clicking on it will hide or show the list of cars.
Filtering
    Create a < select > tag (dropdown box) with options 2021, 2020, 2019 that upon selecting any of these options it should filter the array and only display cars which the year matches the option selected.
    Once you are finished or time is up please execute sabio -sb in the root folder to share your work.
