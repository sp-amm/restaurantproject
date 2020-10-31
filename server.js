let path = require("path");
let express = require("express");

let app = express();
let PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let tables = [];

app.get("/", (req,res)=> {
    res.send("Server Ready");
})

app.listen(PORT, ()=> {
    console.log(`Server listening on: http://localhost: ${PORT}`);
})