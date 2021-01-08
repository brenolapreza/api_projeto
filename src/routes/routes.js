const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const TemporadaController = require('../controller/TemporadaController')
const SearchTemporadaController = require('../controller/SearchTemporadaController')

router.post('/nova-temporada', TemporadaController.criarTemporada);
router.get('/listar-temporada', TemporadaController.listarTemporada);
router.get('/listar-temporada/:id', TemporadaController.listarTemporadaUnica);
router.put('/temporada/editar/:id', TemporadaController.editarTemporada);

router.get('/search/:titulo', SearchTemporadaController.searchListar);

module.exports = router