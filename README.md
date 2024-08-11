
## Getting Started

First, run the development server:

```
first run npm install, after that add your github personal access token for authentication in the const.js file.

then run npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Flow

At first, the input box would be empty.

- Add some text query whatever you want to search the repo for. Like any stack like java, python, ai orr any other thing.
- Since, debouncing is employed, so after 1s of typing you will get the repos on the UI.
- After the list of cards is coming, you can sort it using the dropdown on various parameters.

## Features Built
- A search field which queries on public repos
- Data fetched from repos
- Card is having these details : Avatar, Repo name, Stars, Description, language , topics , updatedAt, watcher's count
- A sort field is there with the following options to take as a parameter for sorting : Stars, watchers count, score, name,created_at, updated_at.
- An awesome UI similar to the github one.



## Tech Stacks Used
- NextJS
- ReactJS
- Tailwind css
- react-icons
- git


## Concepts Used
- Sorting
- Debouncing
- map
- fetch api call

