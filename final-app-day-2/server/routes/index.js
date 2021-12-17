const router = require("express").Router()



const coasterRoutes = require('./coasters.routes')
router.use('/coasters', coasterRoutes)



module.exports = router