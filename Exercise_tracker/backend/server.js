const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');


require('dotenv').config(); 

//create express server
const app = express();
const port = process.env.PORT||5000;

//middlewares
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex : true,  useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully");
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


app.use('/exercises', exercisesRouter);
app.use('/users',usersRouter);


app.listen(port,() =>{
    console.log(`server is running on port : ${port}`);
});