

const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');


const { ObjectId } = mongoose.Types;



const getRecipes = async (req,res)=> {
  
try{

  const recipes = await Recipe.find();
 res.send({
   success:true,
   data:recipes,
   msg: 'show all recipes'
 })

}catch(err){
  console.log(err)

}

  
}

const getRecipe =async (req,res)=> {

 
  try{

    const {id} = req.params;
    const recipes = await Recipe.findById(id);
   res.send({
     success:true,
     data:recipes,
     msg: 'show recipe with id'
   })
  
  }catch(err){
    console.log(err)
  
  }
}
const createRecipe = async (req, res) => {
  try {
    const { title,url,fileName, description, preparation } = req.body;
    const recipe = await Recipe.create({ title, file : {url,fileName},description, preparation });

    res.json({
      msg: `user with id ${recipe.id}`,
      success: true,
      data: recipe
    })
  } catch(err) {
    console.log(err)
  }
}






const deleteRecipe =  async (req, res) => {

  try{

    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);

  res.json({ msg: `user with id ${recipe.id}`,
  success: true,
  data: recipe});
  }catch(err){
    console.log(err)
  } 
}





const updateRecipe = async (req, res) => {
  try {
  const { id } = req.params;
   const { title, description, preparation } = req.body;

  const recipe = await Recipe.findByIdAndUpdate(id,
     {title,description,preparation},
     {new:true})
     
  res.json({
    msg: `update user with id ${id}`,
    success: true,
  data: recipe

   });

}
catch(err){
  console.log(err);
}

  
}










module.exports={
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  
}