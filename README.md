# PandoChart

This is an app with a chart view that shows job views and random predictions.
the app using the current technologies:

client side
  - reactjs
  - redux with thunk
  - react-google-charts
  - styled-components
 
server side
- .net core webapi
- mvc
- mssql service base database (internal mdf/ldf)


# How to run

  - download the repo
  
  RUN THE SERVER API
  - under - `webapi\PandDB`
    rename the db files by removing the `.txt`
- run the main project - `PandoChartApi` with VS iisexpress or other microsoft web platform.
- pay attention to change the api url on the client (on the next section)
 
  RUN THE CLIENT APP
- under the root folder run `yarn` or `npm install`
```sh
$ npm install 
```
- under `src\config` set the webapi service url 
  [export const serviceUrl = 'https://localhost:PORT/pandochart/api']
- run the app with `yarn start` or `npm start`
```sh
$ npm start 
```

# Installation instructions video
https://www.youtube.com/watch?v=FqUsYS5d1FI&feature=youtu.be

[![Alt text](https://i9.ytimg.com/vi/0WV6EDb5QAU/maxresdefault.jpg?time=1593325927301&sqp=COjx4PcF&rs=AOn4CLCiPAAkzeOw6Bb_-JYfTC-72vT6eQ)](https://www.youtube.com/watch?v=FqUsYS5d1FI&feature=youtu.be)


### Tech

* [React JS] - Javascript enhanced libary for web apps!
* [Redux] - awesome web-based state management
* [Redux Thunk] - Fast and easy to consume async actions via redux.
* [Styled Components] - State of the art UI framework.
* [Google Charts] - google's open  source libary for designing charts.


### Libaries

| Plugin | README |
| ------ | ------ |
| Google Charts | [https://github.com/rakannimer/react-google-charts/blob/master/README.md] |
| Styled Components | [https://github.com/styled-components/styled-components] |

### Todos
 - Write  Tests

License
MIT
