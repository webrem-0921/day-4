const router = require("express").Router()

const Coaster = require('./../models/Coaster.model')

router.get("/getAllCoasters", (req, res, next) => {

    Coaster
        .find()
        .select('title description imageUrl inversions length owner')
        .then(response => setTimeout(() => res.json(response), 2000))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneCoaster/:coaster_id", (req, res, next) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/saveCoaster", (req, res, next) => {

    const { title, description, imageUrl, inversions, length } = req.body

    Coaster
        .create({ title, description, imageUrl, inversions, length })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router