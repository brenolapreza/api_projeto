const database = require('../database/connection')

class SearchTemporadaController{

    searchListar(req, res){
        const {titulo} = req.params
        database.select('*').table('temporada').where({nome_temporada: titulo}).then(data => {
            res.json(data)
        })
    }

}

module.exports = new SearchTemporadaController();