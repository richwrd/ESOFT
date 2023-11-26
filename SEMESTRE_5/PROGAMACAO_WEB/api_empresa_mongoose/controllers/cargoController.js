const Cargo = require('../models/Cargo')

module.exports = class cargoController 
{  
    static async listAll(req, res){

        const page = 'Cargos'
        const iconpage = '/img/icon/users.ico'
        const auth = true

        const cargo = await Cargo.find().lean()
        
        res.render('form/cargo/listCargo', { cargo, page, iconpage, auth })
    }

    static async findCargo(req, res){

        const page = 'Cargos'
        const iconpage = '/img/icon/users.ico'
        const auth = true

        const cargo = await Cargo.find().lean()
    
    }


    static async createCargo(req,res){

        const page = 'Criar Cargo'
        const iconpage = '/img/icon/users.ico'  
        const auth = true

        res.render('form/cargo/addCargo', { page, iconpage, auth })
    }

    static async createCargoPost(req,res){
        
        const denominacao     = req.body.denominacao
        const salariobase     = req.body.salariobase

        const cargo = new Cargo({   denominacao,salariobase })
        
        try{
            if (!denominacao || !salariobase) 
                return res.redirect('list');
            else{
                await cargo.save();
                return res.redirect('list');
            }
        }catch{
            return res.redirect('../404');
        }

    }

    static async editCargo(req,res){
        const id = req.params.id

        const page = 'Edição de Cargo'
        const iconpage = '/img/icon/users.ico'
        const auth = true

        const cargo = await Cargo.findById(id).lean()

        res.render('form/cargo/editCargo', { cargo, page, iconpage, auth })
    }

    static async editCargoPost(req,res){
        const id            = req.body.id
        const denominacao   = req.body.denominacao
        const salariobase   = req.body.salariobase


        const cargo = { denominacao,salariobase }

        await Cargo.updateOne({_id:id},cargo)

        res.redirect('list')
    }

    static async removeCargo(req,res){
        const id = req.params.id
        
        await Cargo.deleteOne({ _id: id})

        res.redirect('../list')
    }

}
