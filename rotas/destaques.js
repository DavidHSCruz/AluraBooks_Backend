const { Router } = require('express')
const { getDestaques, postDestaque, deleteDestaque } = require('../controladores/destaques')
const router = Router()

router.get('/', getDestaques)

router.post('/', postDestaque)

router.delete('/:id', deleteDestaque)

module.exports = router