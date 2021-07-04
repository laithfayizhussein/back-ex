'use strict';
const axios = require('axios');
const {Degimon,
    degimonModel}= require('../model/degimon.model')



const getDegimon =(req,res)=>{
 const url = 'https://digimon-api.vercel.app/api/digimon';
    axios.get(url).then(data=>{

       let degi= data.data.map(value=>{

        return new Degimon(value);
       }) 
       res.json(degi);

    })

}


const addFavorite=(req,res)=>{
let {name , level ,img }= req.body;
degimonModel.find({name:name} ,(error , degimonData)=>{
if (degimonData.length > 0) {
    res.send('exist')
}else{
    let newDegimon = new degimonModel({name:name , level:level ,img:img})
    newDegimon.save();
    res.json(newDegimon);
}

})
}

const getFavorite=(req,res)=>{
    degimonModel.find({},(error,data)=>{
        res.json(data);
    })
}

const deleteFavorite =(req,res)=>{
let name = req.params.name;
degimonModel.remove({name:name},(error , data)=>{
    if (error) {
        res.send(error)
    }else{
        res.send(data);
    }
   
    
    
});
}


const updateFavorite = (req,res)=>{
    const {level}=req.body;
    const  name = req.params.name;
    
    degimonModel.find({name:name},(error , data)=>{
        if (error) {
            res.send(error)
        }else{
            data[0].level=level;
            data[0].save();
            degimonModel.find({},(error,data)=>{
                res.send(data);
            })
        }
       
    }) ;
  
}








module.exports = {getDegimon,
    addFavorite,
    getFavorite,
    deleteFavorite,
    updateFavorite};
























    // if (error) {
    //     res.send(error)
    // }else{
    //     if (degimonData === null) {
    //         let degimon= new degimonModel({name , level ,img});
    //         degimon.save();
    //         res.json(degimonData)
    //         console.log(degimonData);
    //     }else{
    //         res.send('anything')
    //     }
    // }