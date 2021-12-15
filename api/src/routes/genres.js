const axios = require('axios');
const {Router} = require('express');
const {Genre} = require('../db');

const {
    API_KEY
}= process.env

const router = Router();

router.get('/', async (req,res) => {

    // res.send('probando');
        try{
            const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            const results = response.data.results;
            const promises = results.map(e=>{
                return Genre.findOrCreate({
                    where:{name:e.name},
                    defaults:{ 
                        slug: e.slug
                    }
                })
            })
            const result = await Promise.all(promises);
                res.json(result)
        }catch(err){
            
        }
})


module.exports= router;