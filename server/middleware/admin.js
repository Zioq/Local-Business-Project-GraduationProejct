const {User} =require("../models/user");

let auth =(req,res,next) => {
    let token = req.cookies.x_auth;

    // Check user has authentication or not by token
    User.findByToken(token, (err, user)=> {
        if(err) throw(err);
        if(!user) return res.json({
            isAuth: false,
            error: true
        }); 

        req.token = token;
        req.user = user;
        next();
    });
};

module.exports  = { auth };