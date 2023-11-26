const Gerente = require('../models/Gerente')
const Colaborador = require('../models/Colaborador')

module.exports = class gerenteController 
{
    static async listAll(req, res){

        const page = 'Gerentes'
        const iconpage = '/img/icon/gerente.ico'
        const auth = true

        const gerente = await Gerente.find().populate('colaborador').lean()
        
        res.render('form/gerente/listGerente', { gerente, page, iconpage, auth })
    }

    static async createGerente(req,res){

    try{
        const page = 'Adicionar Gerente'
        const iconpage = '/img/icon/gerente.ico'  
        const auth = true


        const colaborador = await Colaborador.find().lean()

        res.render('form/gerente/addGerente', { colaborador, page, iconpage, auth })
    }catch(error){
        console.log(error);
        res.render('../404')
    }
    }

    static async createGerentePost(req,res){
        
        const denominacao     = req.body.denominacao
        const nivel           = req.body.nivel 
        const colaborador     = req.body.colaborador

        const gerente = new Gerente({   denominacao, nivel, colaborador })

        
        try{
            if (!denominacao || !nivel || !colaborador) 
                return res.redirect('list');
            else{
                await gerente.save();
                return res.redirect('list');
            }
        }catch{
            return res.redirect('../404');
        }

    }

    static async editGerente(req,res){
        const id = req.params.id

        const page = 'Edição de Gerente'
        const iconpage = '/img/icon/gerente.ico'
        const auth = true

        const colaborador = await Colaborador.find().lean()

        const gerente = await Gerente.findById(id).populate('colaborador').lean()

        res.render('form/gerente/editGerente', { gerente, colaborador, page, iconpage, auth })
    }

    static async editGerentePost(req,res){
        const id            = req.body.id
        const denominacao   = req.body.denominacao
        const nivel         = req.body.nivel
        const colaborador   = req.body.colaborador


        const gerente = { denominacao, nivel, colaborador }

        await Gerente.updateOne({_id:id}, gerente)

        res.redirect('list')
    }

    static async removeGerente(req,res){
        const id = req.params.id
        
        await Gerente.deleteOne({ _id: id})

        res.redirect('../list')
    }

}
