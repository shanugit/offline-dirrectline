const dotenv = require("dotenv").config();
const directline = require("offline-directline");
const express = require("express");
const cors = require("cors");;
//Load environmental variables
const port = process.env.port;
const chatEndpoint = process.env.chat_URL;
const botServerEndpoint = process.env.bot_server_url;
// Instance of Express Class
const app = express();
// middleware functions
app.use(express.static('public'));
app.use(cors());
const charPORT = 9999;
// directline root setup (from webchat to server/backend code)
try{
    directline.initializeRoutes(app, chatEndpoint, botServerEndpoint);
}catch(err){
    console.log('Error in connecting Server: '+err);
}
// start the express server
app.listen(port , ()=>{
    console.log('Server is listening to port %s', port)
});