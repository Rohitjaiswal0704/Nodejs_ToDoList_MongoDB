const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/todolist")
.then(()=> console.log("connectted!!!"))
.catch((err)=> console.log(err))