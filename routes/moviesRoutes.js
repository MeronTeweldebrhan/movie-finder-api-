import express from 'express'

const router =express()

/**
 * GET /search
 */
router.get('/search',(req,res)=>{

    res.send('searching...')


})


/**
 * GET /movies/:id
 */
router.get('/movies/:id',(req,res)=>{
const {id}=req.params

res.send(`moveis id:${id}`)

})