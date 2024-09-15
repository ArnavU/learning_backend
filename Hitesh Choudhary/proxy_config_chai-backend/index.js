const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

app.get("/api/jokes", (req, res) => {
    return res.status(200).json([
        {
            id: 1,
            joke: "This is joke 1",
        }, 
        {
            id: 2, 
            joke: "This is joke 2",
        }
    ])
})

app.listen(4000, () => {
    console.log("Listening at port 4000");
})