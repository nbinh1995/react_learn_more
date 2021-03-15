const app = require("express")();
const httpServer = require("http").createServer(app);
const options = {  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }};
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => { 
    
    socket.on("chat message", (arg) => {
        console.log(arg); // world
    });
 });

httpServer.listen(3001,function(){
    console.log('listening on *:3001')
});
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server
