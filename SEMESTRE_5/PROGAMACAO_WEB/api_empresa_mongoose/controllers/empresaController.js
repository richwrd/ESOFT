const Empresa = require('../models/Empresa')

module.exports = class empresaController 
{
    static async listAll(req, res){

        const page = 'Empresas'
        const iconpage = '/img/icon/empresa.ico'
        const auth = true

        const empresa = await Empresa.find().lean()
        
        res.render('form/empresa/listEmpresa', { empresa, page, iconpage, auth })
    }

    static async createEmpresa(req,res){

    try{
        const page = 'Adicionar Empresa'
        const iconpage = '/img/icon/empresa.ico'  
        const auth = true

        res.render('form/empresa/addEmpresa', { page, iconpage, auth })
    }catch(error){
        console.log(error);
        res.render('../404')
    }
    }

    static async createEmpresaPost(req,res){
        
        const denominacao      = req.body.denominacao

        const empresa = new Empresa({ denominacao })
        
        try{
            if (!denominacao) 
                return res.redirect('list');
            else{
                await empresa.save();
                return res.redirect('list');
            }
        }catch{
            return res.redirect('../404');
        }

    }

    static async editEmpresa(req,res){
        const id = req.params.id

        const page = 'Edição de Empresa'
        const iconpage = '/img/icon/empresa.ico'
        const auth = true

        const empresa = await Empresa.findById(id).lean()

        res.render('form/empresa/editEmpresa', { empresa, page, iconpage, auth })
    }

    static async editEmpresaPost(req,res){
        const id            = req.body.id
        const denominacao   = req.body.denominacao


        const empresa = { denominacao }

        await Empresa.updateOne({_id:id}, empresa)

        res.redirect('list')
    }

    static async removeEmpresa(req,res){
        const id = req.params.id
        
        await Empresa.deleteOne({ _id: id})

        res.redirect('../list')
    }

}
