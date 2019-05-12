var Sequelize = require('sequelize')

var sequelize = new Sequelize('softwaricahotel', 'root', '',{
    host:'localhost',
    dialect:'mysql',
    logging:false
});

sequelize.authenticate()
//If authentication is successfull
// then function
    .then(function(){
        console.log ('db successfully connected');
// catch function to catch any error
    })
    .catch(function(errr){

    })

// console.log('Hello');
module.exports = {
    sequelize,
    Sequelize
};
