'use strict';
const mongoose = require('mongoose');

class Degimon{
    constructor(data){
        this.name=data.name;
        this.img=data.img;
        this.level=data.level;
    }
}




const degimonSchema = new mongoose.Schema({
    name: String,
    level: String , 
    img:String
  });


  const degimonModel = mongoose.model('Degimon', degimonSchema);



module.exports = {Degimon,degimonModel};