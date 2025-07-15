import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import moviesRoutes from './routes/moviesRoutes.js'


const app =express()
dotenv.config()
const PORT=process.env.PORT || 4000

app.use(express.json())
app.use(morgan('dev'))

app.use('/api',moviesRoutes)

app.listen(PORT,()=>console.log(`server is runing on port ${PORT}`))