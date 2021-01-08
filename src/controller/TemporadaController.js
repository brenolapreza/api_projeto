const database = require('../database/connection');

class TemporadaController{
    criarTemporada(req, res){

        const {nome_temporada, descricao_temporada} = req.body

        database.insert({nome_temporada, descricao_temporada}).table("temporada").then(data => {
            console.log(data)
            res.json({msg:"Temporada criada com sucesso"})
        }).catch(error => {
            console.log(error)
        })
    }
    listarTemporada(req, res){
        database.select("*").table("temporada").then(temporadas =>  {
            res.json(temporadas)
        }).catch(error => {
            console.log(error)
        })
    }
    listarTemporadaUnica(req, res){
        database.select("*").table("temporada").where({id: req.params.id}).then(temporada => {
            res.json(temporada)
        }).catch(error => {
            console.log(error)
        })
    }
    editarTemporada(req, res){
        database.where({id: req.params.id}).update({descricao_temporada: req.body.descricao_temporada, nome_temporada: req.body.nome_temporada}).table("temporada").then(data => {
            res.json(data)
        })
    }
}

module.exports = new TemporadaController();