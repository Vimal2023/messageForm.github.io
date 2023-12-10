import express from 'express';
import path from 'path';

const app = express();

const users = [];

// Using Middlewares
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({ extended: true }));

// Setting up View engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {

    res.render("index");
    // const pathlocation = path.resolve();
    // res.sendFile(path.join(pathlocation, './index.html'));

    // res.sendFile("index");
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.post("/contact", (req, res) => {
    // console.log(req.body);
    // pushing array in this api to collect the dummy data !
    users.push({username: req.body.name, email: req.body.email});
    // res.render("success");
    res.redirect("/success");
});


app.get("/users", (req, res) => {
    res.json ({
        users,
    });
});
app.listen(5000, () =>{
    console.log("app is worling");
});



// import http from "http";


// import {generateLovePercent} from "./features.js";
// console.log(generateLovePercent());

// const server = http.createServer((req, res)=>{
//     if(req.url === "/about"){
//         res.end(`<h1>Love is ${generateLovePercent()} </h1>`);
//     } else {
//         res.end("<h1> Page Not Found </h1>");
//     }
// });

// server.listen(5000,()=>{
//     console.log("server is working");
// });

