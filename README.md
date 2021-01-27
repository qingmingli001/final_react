# SD260 Final Project: MITTFlix React

This is your final project from SD260 Intro to React. Your grade on this project will make-up 60% of your final grade in this course.

Read these instructions and watch the demo video carefully. While this project may look very similar to past MITTFlix projects, it is quite different in terms of functionality.

If there are differences between the instructions and the demo, the instructions are to be considered correct.

## Submissions and Deadline

Submit a ZIP file containing all the files necessary to run your solution. Ensure you DO NOT include the node_modules folder in your ZIP file.

Final Projects are due Thursday, January 28th, 2020 @ 3:15 PM.

Projects that are submitted late are subject to an immediate 20% penalty, plus additional 20% for every additional 24-hour period that elapses prior to submission.

## Demo and Instructions

View the [demonstration video](https://web.microsoftstream.com/video/4e29ef9a-e0fb-4d9f-aa29-6fefed732a7b) of this app.

To begin, clone the app from [this repository](https://github.com/cmacmitt/sd260-final.git)

All the HTML and CSS is already included in App.js and index.css files. You'll need to perform an npm install to install all the packages necessary to run the application. Performing this includes the installation of React Router, so you won't have to do that separately.

#### To start this app

To start this app, you will need to run 2 separate commands.

- `npm run db`

This will start the database so your app actually has movies to query. The database runs on port 3001 just in case you need that info.

- `npm start`

This starts up the actual app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Requirements

The app is provided to you in a static state, but it needs to be changed to a fully dynamic React app. It has variety of functionality demonstrated in the provided video and outlined below.

### Main Page

Located at /, this page has the following functionality:

- movies are grouped by genre.
- genre headings only show up if there are movies that belong to that genre.
- movies can belong to 1 or more genres and show up multiple times on the page.
- genres are displayed in alphabetical order.
- all the genres that have movies are displayed.

### Search (Filter)

Located on all pages, search has the following functionality:

- The search will apply to the list of movies displayed on any of the pages the user is currently visiting.
- The search filters the results down based on the input provided
- The results are filtered based on the finding matching text either within the title or the overview
- Whenever the text content of the input changes, a new filter is performed. This is dependent upon keystrokes, not submit events.
- The amount of results found are displayed below the search field.
- The search query being used is displayed below the search field.
- Don't worry about the filter NOT working on backspace.

### My List

Located at /my-list, this page has the following functionality:

- Users can see all the movies that have been added to their list
- Movies are not sorted by genres or any other specification

#### This feature is not demonstrated in the video

- Users can choose to view and interact with their list in a table view that includes the title, rating, and genres of each movie. It should be possible to remove items from the list in this view as well.
- Add appropriate navigation and styles such that the list view fits well with the aesthetic of the rest of the app.

### Adding to My List

Located on all pages, Adding to My List has the following functionality:

- Users can hover over a movie and see a + sign. Clicking on this button will add a movie to their List.
- Once a movie is added to the user's list, it will show up under the My List section
- This update must be made in a way so that the information persists even if the browser is reloaded. This means you'll have to update the API.
- If a movie is added to the user's list, it must include a red check mark icon.
- Clicking on the check mark icon of a movie that is in the user's list will remove it from that list.

## MovieAPI

Provided to you, there is a MovieAPI, in a MovieAPI.js file, which is already imported for you by default in App.js.

The MovieAPI has the following methods available:

- `MovieAPI.getAll()`: This will return to you all the movies in the database.
- `MovieAPI.genre()`: This will return to you all the genres in the database.
- `MovieAPI.addToList(movie)`: Accepts 1 parameter, a movie object. It will update a movies my_list attribute to true and save it to the database for you.
- `MovieAPI.removeFromList(movie)`: Accepts 1 parameter, a movie object. It will update a movies my_list attribute to false and save it to the database for you.

All API endpoints return promises, so you can freely chain a `.then()` on to them. They already provide you the results in a JSON format, so you'll simply have to accept a parameter into your `then()`.

### TIPS:

This project is composed of many small problems, and while it can seem overwhelming, remember to divide and conquer. Break down the problem into small pieces and focus.

Here are some examples of smaller problems that you could look at solving, in an order that makes a lot of sense:

- Retrieving Movies from the API and placing them into state
- Displaying Movies from state
- Adding movies to My List and saving them back to the API
- Adding React Router to Display My List separately
- Filtering Movies
- Adding special info to filter based on the results
- Breaking down the list of movies into Genres and displaying them accordingly

- Ask questions if you are uncertain or something is unclear to you.
- Start early, take breaks, celebrate small wins.
