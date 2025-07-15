import express from 'express'
import { searchMovies,getMovieDetails } from '../controllers/movieController.js'
const router =express.Router()

/**
 * GET /search
 */
router.get('/search',searchMovies)


/**
 * GET /movies/:id
 */
router.get('/movies/:id',getMovieDetails)

export default router