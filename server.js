const express = require("express");

const app = express();
const port = 3000;

// Assignment 1 & Assignment 3
app.get("/student/:id", (req, res) => {
    const id = req.params.id;
    const { name, course } = req.query;

    // Assignment 3: Query parameters are provided
    if (name || course) {
        return res.send(`
            Student ID: ${id}\n
            Name: ${name}\n
            Course: ${course}
        `);
    }

    // Assignment 1: Only route param
    res.send(`Student ID: ${id}`);
});

// Assignment 2
app.get("/search", (req, res) => {
    const { name, course } = req.query;

    if (!name && !course) {
        return res.send("No search data provided.");
    }

    res.send(`
        Name: ${name} \n 
        Course: ${course}
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

