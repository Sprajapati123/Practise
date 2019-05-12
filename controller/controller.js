var usermodel =require('../models/usermodel');


function registerUser(req,res,next) {


    usermodel.myUsers.create({
        username: req.body.username,
        address: req.body.address,
        password: req.body.password

    })

        .then(function (result) {
            console.log(result);

        })
        .catch(function (err) {
            next({"status":500,"message":"DB error"})
        })

}



module.exports={
    registerUser
}