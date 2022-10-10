import express from 'express'

const router = express.Router();

router.use((request, response, next) => {
    console.log('Este es un middleware a nivel de router');
    next()
})
router.get('/', (request, response) => {
    response.json({
        message: 'Aquí estarán todos los koders'
    })
})

router.post('/', (request, response) => {
    response.json({
        message: 'Hola desde expres'
    })
})

export default router