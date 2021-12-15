const axios = require('axios');
const {Router} = require('express');
const {Genre , Videogame}  = require('../db');

const {
    API_KEY
}= process.env

const router = Router();

router.post('/', async(req,res, next) => {
  const { name, img, rating, description, releaseDate, platforms, slug} = req.body;
    try{
    let newVideogame = await Videogame.create({ name, img, rating, description, releaseDate, platforms })
    newVideogame.addGenre(slug);
    res.json(newVideogame);
  }catch(err){
    next(err);
  }
    // const { name, img, rating, description, releaseDate, platforms, slug} = req.body;
    // Videogame.create({name, img, rating, description, releaseDate, platforms})
    // .then((newVideogame) =>{
    //   newVideogame.addGenre(slug).then(()=>{
    //     res.json(newVideogame)
    //   })
    // }) 
    // .catch((err)=> {
    //   next(err);
    // })
  })

router.get('/:id' , async (req,res , next)=>{

    const { id } = req.params;
    const regex = /(\w+\-){4}\w+/g;
    try{
      if(regex.test(id)){  
        const dbVideogame = await Videogame.findByPk(id,{
          include : Genre
        }) 
        const json = {id:dbVideogame.id,
                      name:dbVideogame.name,
                      img:dbVideogame.img,
                      rating:dbVideogame.rating,
                      description:dbVideogame.description,
                      releaseDate:dbVideogame.releaseDate,
                      platforms:dbVideogame.platforms,
                      genres:dbVideogame.genres.map(e => e.name)
                    };
        res.json(json);
      }else{
            const apiVideogame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            const results = apiVideogame.data
            const json = {id:results.id,
                          name:results.name,
                          img:results.background_image,
                          rating:results.rating,
                          description:results.description,
                          releaseDate:results.released,
                          platforms:results.platforms.map(e => e.platform.name),
                          genres:results.genres.map(e => e.name)
                        };
            res.json(json);
      }
    }catch(err){
      next(err);
    }
})  

module.exports=router