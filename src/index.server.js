const express =require('express');
const env= require('dotenv')
const app =express();
const bodyParser =require('body-parser');
const mongoose=require('mongoose')


env.config();


// routes

const userRoutes = require('../routes/user');

mongoose.connect('mongodb://localhost/flipkart', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Database Connected'));


app.use(express.json())
app.use(bodyParser.json())


app.use('/api' , userRoutes);


app.listen(process.env.PORT , ()=>console.log(`Server is running on port ${process.env.PORT}`));


  