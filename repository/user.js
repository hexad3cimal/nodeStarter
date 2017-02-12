/**
 * Created by hexad3cimal on 12/2/17.
 */
var db=require('../db');

var User={

    getAllUsers:function(callback){

        return db.query("Select * from user",callback);

    },
    getUserById:function(id,callback){

        return db.query("select * from user where Id=?",[id],callback);
    },
    addUser:function(User,callback){
        return db.query("Insert into user values(?,?,?)",[User.Id,User.username,User.password],callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from user where Id=?",[id],callback);
    },
    updateUser:function(id,User,callback){
        return db.query("update user set password=?,user_name=? where Id=?",[User.password,User.username,id],callback);
    }

};
module.exports=User;