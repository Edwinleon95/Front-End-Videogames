const axios = require('axios');
const {Router} = require('express');
const {Genre , Videogame , Op}  = require('../db');

const {
    API_KEY
}= process.env

const router = Router();



router.get('/', async (req,res,next) => {

  const { name } = req.query;
  if (name) {
    let apiVideogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
       apiVideogames=apiVideogames.data.results.map(e => {
        return {name:e.name,
                img:e.background_image,
                genres:e.genres.map(e=>e.name)}
               })
    let dbVideogames = await Videogame.findAll({
     where: {
      name: {
       [Op.iLike]: '%' + name + '%',
      },
     },
     include: {
      model: Genre,
     },
    });
    dbVideogames = dbVideogames.map(e=> {
      return {name:e.name,
              img:e.img,
              genres:e.genres.map(e=> e.name)}
            });
      res.json([...dbVideogames, ...apiVideogames]);
}else { 
  try{
    let dbVideogames = await Videogame.findAll({include:Genre});
    dbVideogames = dbVideogames.map(e=> {
      return {name:e.name,
              img:e.img,
              genres:e.genres.map(e=> e.name)}
            });
    const page1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    const page2 = await axios.get(page1.data.next);
    const page3 = await axios.get(page2.data.next);
    const page4 = await axios.get(page3.data.next);
    const page5 = await axios.get(page4.data.next);
        let result = page1.data.results.concat(page2.data.results,page3.data.results,page4.data.results,page5.data.results)
        let apiVideogames = result.map(e => {
          return {name:e.name,
                  img:e.background_image,
                  genres:e.genres.map(e=>e.name)}
                 })
    const allVideogames = [...dbVideogames,...apiVideogames];
    res.json(allVideogames);
  }catch(err){
    next(err)
  }
}

})



module.exports= router;






  // try{
  //   const newVideogame = await Videogame.create({ name, img, rating, description, releaseDate, platforms })
  //   newVideogame.setGenre(genre);
  //   res.json(newVideogame);
  // }catch(err){
  //   next(err);
  // }