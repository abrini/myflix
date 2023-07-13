# MyFlix

## Running the project
After cloning the repo, install the dependencies with `npm install` then `npm run dev` to run the project.

## Design and application architecture
While building the app, I paid great attention to delivering an elegant and responsive interface.

I structured my app as follows:
- assets — _Base CSS and images._
- components — _Aall UI components. Eg. ShowsList, ShowDetails.._
- router — _Routes of my app._
- services — _For all operations using the TV Maze API, I created a `tvMazeManager` service and `eventBus` service to emit events between components regardless of their level._
- views — Main views (or pages) of my app._
