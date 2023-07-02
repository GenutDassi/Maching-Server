//BD_URL="mongodb+srv://dassigenut1234:Dg0504119627@maching.vdxeiah.mongodb.net/"
const mongoose = require('mongoose');

const connect = async () =>{
    console.log("connect to db")
    await mongoose.connect("mongodb+srv://dassigenut1234:Dg0504119627@maching.vdxeiah.mongodb.net/maching");
}
const disconnect = () => { }
module.exports = {connect, disconnect};
