const MoviesAndSeries = require('../models/MoviesAndSeries')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
//const successMessage = require('../shared/const/success.enums')

//This function will get only movies from moviesAndSeries collection.

exports.getSearchByType = async(req,res) => {

const { type } = req.body

try {
    const search = await MoviesAndSeries.find({type})

        res.json({search})
        console.log(search)

        //res.status(200).send(successMessage.sendMovies)
        //Ver de retornar un array con strings para que no se rompa el front

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

