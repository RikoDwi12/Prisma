const express = require('express');
const app = express();
const userRoutes = require('./Routes/UserRoute')
// Middleware untuk mengizinkan penggunaan JSON
app.use(express.json());

app.use('/api', userRoutes);









// // Definisikan rute
// app.get('/users', async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.post('/users', async (req, res) => {
//  try{
//   const { name, email } = req.body;
//   const newUser = await prisma.user.create({
//     data: { name, email },
//   });
//   res.json(newUser);
//  }catch(err){
//   console.log(err);
//  }
// });

// app.put('/users/:id', async (req,res)=>{
//   const { id } = req.params;
//   try{
//     const {name , email} = req.body;
//     const newUser = await prisma.user.update({
//       where: {id : parseInt(id)},
//       data : 
//       {
//         name : name,
//         email : email
//       }
//     }) 
//     res.json({
//       message : "Updated Successfully"
//     })
//   }catch(err){
//      console.log(err)
//   }
// })

// app.delete('/users/:id', async (req,res)=>{
//   const {id} = req.params;
//   try{
//     const data = await prisma.user.delete({
//       where : {id : parseInt(id)}
//     })
//     return res.json({
//       message: "Deleted Successfully"
//     })
//   }catch(err){
//     console.log(err)
//   }
// })


// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});