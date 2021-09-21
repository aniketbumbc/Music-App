# Music Videos App 

In this application, user can search their favorite Video information by title and filter by genre.

## Features

- On an application load successfully user will be able to see all videos on UI.
- Users can search videos by typing in the search field and filter by genre.
- Onces filter by genres he/she can see videos information by genre and able to select multiple genres. ( like all rock, country ).
- On search functionality user can search by any letters contain in the title.
- Loader added while loading videos first time.

## Technology

### Frontend

- Frontend stack is **React-typescript, hooks,React-testing library, and Jest, Material UI.**
- Implementation of the application using three components,**Music Videos,Video Card, FallbackError** components.
- Code of separation **UseFetch** custom hooks is implemented.
- Music videos component is **smart component** which takes data from usefetch **Custom Hooks**.
- Video Card component is **dump component** receives data as props from the parent component.
- I also added **FallbackError** component for error handling in case an API call failed.
- I also added **loader** while loading videos request.
- Runs the app in the development mode.
- Open **http://localhost:3000** to view it in the browser.

## Installation

```sh
clone repo
cd music-library 
npm install
npm start
```



## Preview

![Music Library](https://media.giphy.com/media/dsf70QzMGgTkAcgVtk/giphy.gif)


