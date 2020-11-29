const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//Flag for the config mode
const config  = require("./config/key");

const { User } = require("./models/user");
const { auth } = require("./middleware/auth");

//Connect Back-end Local host 5000 with MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Use body-parser & cookie-parser as MIDDLE-WARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routing test
app.get("/", (req, res) => {
    res.json("Test Rounting");
  });
  


// ROUTING FOR AUTH (use Middle-ware for allowing only login user can upload file task)
app.get("/api/user/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
  });
});
  

//REGISTER USER IN FRONT-END (request user info from client to server and server give response by use a `ROUTING`)
// ROUTING FOR REGISTER
app.post("/api/users/register", (req, res) => {
  //Put data into mongodb
  const user = new User(req.body);

  //
  //Save it into mongo db
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      userData: doc,
    });
  });
});

/*
app.post("/api/tables/register", (req,res) => {
  const table  = new Table(req,body);

  table.save((err) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true });
  });


})
*/
// ROUTING FOR LOGIN
app.post("/api/users/login", (req, res) => {
  //find a the email
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    //Compare password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: "wrong password" });
      }
    });

    //Generate token
    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      res.cookie("x_auth", user.token).status(200).json({
        loginSuccess: true,
      });
    });
  });
});

//ROUTING FOR LOG OUT
app.get("/api/users/logout", auth,(req,res)=> {
  User.findOneAndUpdate({ _id:req.user._id }, { token:""}, (err,doc)=> {
      if(err) return res.json({success:false, err});
      return res.status(200).send({
          success:true
      });
  });
});

//Use Router to seperate a lot of request (check 'routes' folder)
app.use('/api/product', require('./routes/product'));
app.use('/api/table', require("./routes/table"));
app.use('/api/makereservation', require("./routes/reservation"));
app.use('/api/order', require("./routes/order"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));



//Instead of localhost 5000, use heroku
//app.listen(5000);
const port = process.env.PORT||5000
app.listen(port,()=> {
  console.log(`Server Running at ${port}`);
});
