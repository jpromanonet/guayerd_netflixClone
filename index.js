const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv')

dotenv.config({path: '.env'});
connectDB();

app.use(express.json({ extender: true}))

const PORT = process.env.PORT || 4000;




// Autentificación (Login)
app.use('/api/auth', require('./routes/auth'))

// Creación de un nuevo usuario
app.use('/api/users', require('./routes/users'))

// Obtiene todas las series y peliculas
app.use('/api/moviesAndSeries', require('./routes/moviesAndSeries'))

//Obtiene todas las series o peliculas
app.use('/api/searchByType', require('./routes/searchByType'))

// Obtiene peliculas o series por un genero determinado
app.use('/api/search/genre', require('./routes/searchByGenre'))

// Obtiene peliculas recomendadas
// app.use('/api/recommendations', require('./routes/recommendations')) //ANALIZAR EL TIPO DE VERBO DEBE SER


 app.use('/api/myList', require('./routes/myList'))


app.listen(PORT, () =>{

    console.log(`Server running on port ${PORT}`)
})

//i need to post the document and then search and find wich movies will be almost similar for the client



