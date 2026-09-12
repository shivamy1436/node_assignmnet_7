const express = require("express");

const app = express();
const router = express.Router();
const port = 3000;

function getDateTime() {
    return new Date().toISOString().slice(0, 19).replace("T", " ");
}

// Assignment 2: global request logger.
function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} ${getDateTime()}`);
    next();
}

// Assignment 3: response time logger.
function responseTimeLogger(req, res, next) {
    const startTime = Date.now();

    res.on("finish", () => {
        const responseTime = Date.now() - startTime;
        console.log(`${req.method} ${req.originalUrl} - ${responseTime} ms`);
    });

    next();
}

// Assignment 1: router-level middleware.
function routerLogger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} ${getDateTime()}`);
    next();
}

app.use(logger);
app.use(responseTimeLogger);

router.use(routerLogger);

router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Information");
});

app.get("/products", (req, res) => {
    res.send("Product List");
});

app.get("/users", (req, res) => {
    res.send("User List");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
