const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./config/mongo');
const app = express();
const userModel = require('./models/user');
app.use(express.json());
const { mainSystemUserCategories } = require('./config/defaultCategory');

mainSystemUserCategories();




const systemUserRouter = require("./router/systemUserRouter")
app.use("/systemUser", systemUserRouter);

const organizationRouter = require("./router/organizationRouter")
app.use("/organization", organizationRouter);

app.listen(8000,()=>{
    connectDB();
    console.log("server is running on port 8000")
})
