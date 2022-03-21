import express from 'express';
import { check } from 'express-validator';
import * as moviesAndSeriesControllers from '../controllers/moviesAndSeriesControllers.js';

const router = express.Router()

// Get all movies and series (Base URL: /api/moviesAndSeries/)
//Endpoint: api/moviesAndSeries

router.get('/',
              
    moviesAndSeriesControllers.getMoviesAndSeries
    
)

router.post('/',
              
    moviesAndSeriesControllers.makeMovie,
    
)

router.delete('/:id',
              
    (req, res) => moviesAndSeriesControllers.deleteMedia(req, res, req.params.id)
    
)

export { router } ;


