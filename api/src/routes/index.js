const { Router } = require('express');
const videogamesRouter = require('./videogames');
const genresRouter = require('./genres');
const videogameRouter = require('./videogame');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/videogames',videogamesRouter);
router.use('/genres', genresRouter);
router.use('/videogame', videogameRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
