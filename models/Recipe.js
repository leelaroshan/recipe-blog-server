const mongoose = require('mongoose');

const {Schema} = mongoose;

const RecipeSchema = new Schema({
    title:{
        type: String,
        required:[true, 'please add title'],
        maxlength: [50,'max 50 characteres allowed for firstname']
    },
    url: {
        type: String,
      },
    
      fileName: {
        type: String,
      },
    description:{
        type: String,
   
    },
    preparation:{
        type: String,
       
    },
  
})


module.exports = mongoose.model('Recipe', RecipeSchema)