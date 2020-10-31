const express = require("express");
const path = require("path");


const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// roputes for html pages
app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/tables", (req,res)=> {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reservation", (req,res)=> {
    res.sendFile(path.join(__dirname, "reservation.html"));
})


app.listen(PORT, ()=> {
    console.log(`Server listening on: http://localhost: ${PORT}`);
})


/*

function handleRequest(request, response){
    response.end("working: path hit"+ request.url);
}

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})
*/
//tables.html
//index.html
//reservation.html