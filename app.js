// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// default value for title local
const projectName = "lab-express-cinema";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;
const Movie = require('./views/models/Movie.model')
// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);
app.get("/movies", (req, res) => {
    Movie.find()
    .then(allMovies=>{
        console.log('allMovies',allMovies)
        res.render("movies", {allMovies})
    })
    .catch(err => console.log(err))
    });
    app.get("/movie/:movieid", (req, res) => {
        const {movieid}=req.params;
        Movie.findById(movieid)
        .then(singleMovie=>{
            console.log('singleMovie',singleMovie)
            res.render("movie", {singleMovie})
        })
        .catch(err => console.log(err))
        });
        
//  To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
