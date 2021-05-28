const cookieParser= require('cookie-parser');
//create the first server
const express = require('express');
const user = require('./models/user');
require('dotenv').config();
require('./database/mongoose');
const routers = require('./routers/user');
const app = express();
//routers


//use middlewares
app.use(express.json());    
app.use (cookieParser());
app.use('/api', routers)


const PORT = process.env.PORT || 8080

app.listen(PORT,() =>{
     console.log('port is listing to' ,{PORT});
});
