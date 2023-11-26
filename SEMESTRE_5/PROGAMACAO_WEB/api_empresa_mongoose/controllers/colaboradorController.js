const Colaborador = require('../models/Colaborador')
const Cargo = require('../models/Cargo')
const Departamento = require('../models/Departamento')

module.exports = class colaboradorController 
{
    static async listAll(req, res){

        const page = 'Colaboradores'
        const iconpage = '/img/icon/colaborador.ico'
        const auth = true

        const colaborador = await Colaborador.find()
                                            .populate('cargo', 'denominacao')
                                            .populate('departamento', 'denominacao') .lean()
        
        res.render('form/colaborador/listColaborador', { colaborador, page, iconpage, auth })
    }

    static async createColaborador(req,res){

    try{
        const page = 'Adicionar Colaborador'
        const iconpage = '/img/icon/colaborador.ico'  
        const auth = true


        const cargo = await Cargo.find().lean()
        const departamento = await Departamento.find().lean()

        res.render('form/colaborador/addColaborador', { departamento, cargo, page, iconpage, auth })
    }catch(error){
        console.log(error);
        res.render('../404')
    }
    }

    static async createColaboradorPost(req,res){
        
        const nome            = req.body.nome
        const sobrenome       = req.body.sobrenome 
        const cpf             = req.body.cpf
        const cargo           = req.body.cargo
        const departamento    = req.body.departamento


        if (!nome || !sobrenome || !cpf ) 
            return res.redirect('list');

        const colaborador = new Colaborador({   nome,sobrenome, cpf, cargo, departamento })
        
        if (departamento === "") {
            colaborador.departamento = null;
        } else {
            colaborador.departamento = departamento;
        }

        if (cargo === "") {
            colaborador.cargo = null;
        } else {
            colaborador.cargo = cargo;
        }
        

        try{
            console.log(colaborador)
            await colaborador.save();
            return res.redirect('list');
        }catch{
            return res.redirect('../404');
        }

    }

    static async editColaborador(req,res){
        const id = req.params.id

        const page = 'Edição de Colaborador'
        const iconpage = '/img/icon/colaborador.ico'
        const auth = true

        const colaborador = await Colaborador.findById(id)
                                            .populate('cargo', 'denominacao')
                                            .populate('departamento', 'denominacao') .lean()

        const cargo = await Cargo.find().lean()
        const departamento = await Departamento.find().lean()

        res.render('form/colaborador/editColaborador', { colaborador, cargo, departamento, page, iconpage, auth })
    }

    static async editColaboradorPost(req,res){
        const id            = req.body.id
        const nome          = req.body.nome
        const sobrenome     = req.body.sobrenome
        const cpf           = req.body.cpf
        const cargo         = req.body.cargo
        const departamento  = req.body.departamento

        const colaborador = { nome, sobrenome, cpf, cargo, departamento }


        if (departamento === "") {
            colaborador.departamento = null;
        } else {
            colaborador.departamento = departamento;
        }

        if (cargo === "") {
            colaborador.cargo = null;
        } else {
            colaborador.cargo = cargo;
        }

        await Colaborador.updateOne({_id:id}, colaborador)

        res.redirect('list')
    }

    static async removeColaborador(req,res){
        const id = req.params.id
        
        await Colaborador.deleteOne({ _id: id})

        res.redirect('/')
    }

    static async viewColaborador(req, res){

        const page = 'Colaboradores'
        const iconpage = '/img/icon/colaborador.ico'
        const auth = true

        const id = req.params.id 

        const colaborador = await Colaborador.findById(id)
                                            .populate('cargo', 'denominacao')
                                            .populate({
                                                path:'departamento',
                                                populate: {
                                                    path:'gerente',
                                                    select: 'denominacao nivel',
                                                }
                                            })
                                            .lean();
        
        res.render('form/colaborador/colaborador', { colaborador, page, iconpage, auth })
    }

}
