const express = require('express');
const burger = require ('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
    burger.all( result => 
    res.render('index', {burgers: result}))
});

router.post('/burger/add', (req, res) => {
    burger.add(req.body.burger_name, 0, result => {
        res.redirect('/');
    });
});

router.post('/burger/eat/:id', (req, res) => {
    burger.update(req.params.id, result => {
        res.redirect('/');
    });
});

module.exports = router;