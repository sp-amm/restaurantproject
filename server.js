let http = require("http");

let PORT = 3000;

function handleRequest(request, response){
    response.end("working: path hit"+ request.url);
}

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})