/**
 * This is a simple quiz web app. Which validated answers on server side
 * This project uses Express & EJS 
 * Created By Remin T Roy
*/

import Express from 'express'; // importing express libreary 

import { games } from './db.js';

const app = Express(); // initializing express app

const port = process.env.PORT || 6001; // declaring port number

const appInfo = { //  app info which can be used in pages
    name: "Quiz"
};

const __dirname = process.cwd();

app.use(Express.static(`${__dirname}/public`));

app.set('view engine', 'ejs'); // initializing view engine as ejs


// routing and common end points 

// home route
app.get("/", (req, res) => {

    let data = {
        appName: appInfo.name,
        currentPage: "home"
    }

    res.render("home", data);

});


// api end point to check & serve question

app.post("/api", (req, res) => {

    var question = req.query.q; // getting query value | expeted input  /api?q=Q1 

    var check = req.query.ans; // getting query value | expeted input  /api?ans=0 

    if (question && check) { // runs if question and answer is passed in query

        if (games.quiz[question]) { // checks if the question is available of not 

            if (games.quiz[question].answer == check) { // checks if the answer maches the correct index value

                // correct answer

                res.send({ // returns true for correct answer
                    err: false,
                    correct: true,
                    total: Object.keys(games.quiz).length
                });

            } else {

                res.send({ // return false for wrong answer
                    err: false,
                    correct: false,
                    answer: games.quiz[question].answer,
                    total: Object.keys(games.quiz).length
                });

            };

            return 0;

        } else {

            res.send({ // return an err message if quiestion is not available
                err: true,
                message: "Not a valid request",
                total: Object.keys(games.quiz).length
            });

        };

    } else if (question) { // only question is passed in query

        if (games.quiz[question]) { // checks if question is available or not

            res.send({ // sents an object with question and options
                question: games.quiz[question].question,
                option: games.quiz[question].options,
                err: false,
                total: Object.keys(games.quiz).length
            });

        } else { // if question not exist

            res.send({ // return error
                err: true,
                message: "Not a valid request",
                total: Object.keys(games.quiz).length
            });

        };

        return 0;

    } else {

        res.send({ // return error
            err: true,
            message: "Bad request",
            total: Object.keys(games.quiz).length
        });

    }

});



app.use((req, res) => { // runs if user request to a endpoint not hadled above | 404 

    res.render("404");

});
/* 
    Dont write request or endpoint code below this 404 because the routs below wont able to get the request.
    because the response is already set above. no matter what you write below.

    It won't effect code unless you code is not a routing code like app.get(), app.post()...
*/


app.listen(port, (e) => { // starting server

    console.log(`Server is started at port : ${port}`);

});
