var mysequelize= require('../config/dbconfig')


var myUsers = mysequelize.sequelize.define('myUsers',{

        id:  {

            type: mysequelize.Sequelize.BIGINT(10),
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
        },

        username: {
            type: mysequelize.Sequelize. STRING,
            allowNull: false
        },

        password:{
            type: mysequelize.Sequelize. STRING,
            allowNull: false
        },
        address:{
            type: mysequelize.Sequelize. STRING,
            allowNull: false
        },

    },
    {
        freezeTableName: true,
        tableName:'my_users'

    })


myUsers.sync({force:false})
    .then(function(){
        console.log('users table created')

    })

    .catch(function(err){
        console.log('error creating table')
        console.log(err);

    })



module.exports={
    myUsers


}
