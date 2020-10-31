const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req,res)=> {
    res.send("Server Ready");
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