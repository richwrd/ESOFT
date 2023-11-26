const Departamento = require('../models/Departamento')
const Gerente = require('../models/Gerente')
const Empresa = require('../models/Empresa')

module.exports = class departamentoController 
{
    static async listAll(req, res){

        const page = 'Departamentos'
        const iconpage = '/img/icon/departamento.ico'
        const auth = true

        const departamento = await Departamento.find()
                                            .populate('empresa', 'denominacao')
                                            .populate('gerente', 'denominacao') .lean()
        
        res.render('form/departamento/listDepartamento', { departamento, page, iconpage, auth })
    }

    static async createDepartamento(req,res){

    try{
        const page = 'Adicionar Departamento'
        const iconpage = '/img/icon/departamento.ico'  
        const auth = true


        const empresa = await Empresa.find().lean()
        const gerente = await Gerente.find().lean()

        res.render('form/departamento/addDepartamento', { empresa, gerente, page, iconpage, auth })
    }catch(error){
        console.log(error);
        res.render('../404')
    }
    }

    static async createDepartamentoPost(req,res){
        
        const denominacao     = req.body.denominacao 
        const empresa         = req.body.empresa
        const gerente         = req.body.gerente
            
        const departamento = new Departamento({   denominacao, empresa, gerente })
        
        try{
            if (!denominacao || !empresa || !gerente ) 
                return res.redirect('list');
            else{
                await departamento.save();
                return res.redirect('list');
            }
        }catch{
            return res.redirect('../404');
        }

    }

    static async editDepartamento(req,res){
        const id = req.params.id

        const page = 'Edição de Departamento'
        const iconpage = '/img/icon/departamento.ico'
        const auth = true

        const departamento = await Departamento.findById(id)  
                                                .populate('empresa', 'denominacao')
                                                .populate('gerente', 'denominacao') .lean()
                                                .lean()

        const empresa = await Empresa.find().lean()
        const gerente = await Gerente.find().lean()                                    

        res.render('form/departamento/editDepartamento', { departamento, empresa, gerente, page, iconpage, auth })
    }

    static async editDepartamentoPost(req,res){
        const id            = req.body.id
        const denominacao   = req.body.denominacao
        const empresa       = req.body.empresa
        const gerente       = req.body.gerente

        const departamento = { denominacao, empresa, gerente }

        if (empresa === "") {
            departamento.empresa = null;
        } else {
            departamento.empresa = empresa;
        }

        if (gerente === "") {
            departamento.gerente = null;
        } else {
            departamento.gerente = gerente;
        }
        

        await Departamento.updateOne({_id:id}, departamento)

        res.redirect('list')
    }

    static async removeDepartamento(req,res){
        const id = req.params.id
        
        await Departamento.deleteOne({ _id: id})

        res.redirect('../list')
    }

}
