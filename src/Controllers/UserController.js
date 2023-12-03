const { GetUsers,CreateUser } = require('../Services/UserServices');
const ResBase = require('../Models/Dto/Response/ResBase');

async function GetUsersController(res) {
  try {
    let data = await GetUsers();
    res.json(
        new ResBase(200,"Success",data)
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

async function CreateUserController(req,res){
  try{
    let data = await CreateUser(req)
    res.json(
      new ResBase(200,"Success",data)
    )
  }catch(err){
    console.log(err)
  }
}

module.exports = { GetUsersController,CreateUserController };