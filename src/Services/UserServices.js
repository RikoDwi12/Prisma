const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {User} = require('../Models/Dto/Request/UserReq')

async function GetUsers(){
    try{
        let data = await prisma.user.findMany()
    return data;
    }
    catch(err){
        console.log(err)
    }
}

async function CreateUser(req){
  try{
    let user = new User()
    user = {
        email: req.body.email,
        name: req.body.name,
      };
    let data = await prisma.user.create({
        data : user
    })
    return data;
  }catch(err){
    console.log(err)
  }
}

module.exports = { GetUsers,CreateUser };