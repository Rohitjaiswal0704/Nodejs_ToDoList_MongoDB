var express = require('express');
var router = express.Router();
const User = require("../model/userSchema")

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find()

  .then((tasks)=>{
    res.render('show',{tasks})
  })
   .catch((err)=> res.send(err))  
});

  router.get('/create', function(req, res, next) {
  res.render('create');
});

router.post('/add', function(req, res, next) {
   const {title,desc}=req.body
   User.create({title,desc})
   .then(()=>{

    if (title.length < 4 || desc.length < 15 ) {
      return res.send(
        "<h1>lenght of title and dec must be atleast 4 and.</h1><a href='/create'>Back</a>"
    )} 

    res.redirect("/")
  })
   .catch((err)=>{res.send(err)})
})

router.get("/delete/:id", function (req, res, next) {
  const id = req.params.id;
  User.findByIdAndDelete(id)
  .then(()=>{
    res.redirect("/")
  })
  .catch((err)=> res.send(err))
});

router.get("/edit/:id",function(req,res,next){
  const id = req.params.id
  User.findById(id)
  .then((task)=>{
    res.render("edit",{task})
  })
  .catch((err)=> res.send(err))  
});


router.post("/edit/:id",function(req,res,next){
  const id = req.params.id
  User.findByIdAndUpdate(id,req.body)
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=> res.send(err))  

});
module.exports = router;
