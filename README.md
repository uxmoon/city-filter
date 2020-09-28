# City search and filter App

**Goal**: Implement a user interface to pick cities from a long list of the major cities in the world.

## Requirements

Download and install NodeJs, LTS version is recommended.

- [NodeJS](https://nodejs.org/en/download/)

## Installation

Open your preferred terminal and follow these steps:

- Clone the repository `git@github.com:uxmoon/city-filter.git`.
- Change directory to project folder `cd city-filter`.
- Run the following commands `npm install && npm start` to start the App.
- The App will open a new tab in your default system browser at `http://localhost:3000`

## Usage

- The user needs to type the name of a city in the input field to begin the search.
- A results list will display all available cities matching the search term.
- The user can click on a result to add it to the Favorite cities list displayed on the right.

## Styling

- I decided to Semantic UI to add some styling based on the wireframes provided, is easy to use, and provides semantic styling.

## UX

- A message will appear to notify the user to make another search when no results are found.
- When an error occurs within the App, a message will notify the user to reload the page.
- The **Favorite cities** list is displayed on the right side instead of above the input field to avoid pushing the input field down.

## Challenges

This is the first time I built something with React. First I started using Class based components and then tried to use Function based component with Hooks.

The first version of the App worked when the user submitted the form to make an Http request with Axios to get a result list, see **SearchBar.js** file.

Then I tried to make an Http request to the API when a change occurred in the input field, to avoid several Http requests I added a setTimeout and added a cleanup function to cancel the previous request, see **Search.js** file.

I also started building multiple components to handle different things, like just render results or making requests with axios. But finallym I ended up making most of the rendering and request in Search.js.

I created a couple of files to test that functionality within Preferences.js and List.js to test the Patch preferences/cities but I got no results.

In relation to the User experience, I wasn't able to add a loader when the request is still pending to notify the user that the search is happening.