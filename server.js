let http = require("http");
let express = require("express");

let app = express();
let PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let tables = [];

app.get("/", function(require, response){
    response.sendFile(path.join(__dirname,""));
});

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});