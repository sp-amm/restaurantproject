const express = require("express");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customers = [
    {
      customerID: 1,
      customerName: "John",
      customerEmail:"John's email",
      customerPhone: 123456
    },
    {
        customerID: 2,
        customerName: "Mark",
        customerEmail:"Mark's email",
        customerPhone: 123456
    },
    {
        customerID: 3,
        customerName: "Jack",
        customerEmail:"Jack's email",
        customerPhone: 123456
    }
  ];
  

// roputes for html pages
app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/index.html", (req,res)=> {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/tables.html", (req,res)=> {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reservation.html", (req,res)=> {
    res.sendFile(path.join(__dirname, "reservation.html"));
})

app.get("/api/tables", (req,res)=> {
    return res.send(customers);
})

app.post("/api/addreservation", function(req, res){
    let newCustomer = req.body;

    customers.push(newCustomer);
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