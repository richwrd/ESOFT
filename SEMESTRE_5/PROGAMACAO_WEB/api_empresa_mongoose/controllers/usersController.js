const Users = require('../models/Users')

module.exports = class usersController 
{
    static async listAll(req, res){

        const page = 'Usuários'
        const iconpage = '/img/icon/edit.ico'
        const auth = true

        const users = await Users.find().lean()
        
        res.render('users/listUser', { users, page, iconpage, auth })
    }

    static async createUser(req,res){

        const page = 'Criar Usuário'
        const iconpage = '/img/icon/edit.ico'  
        const auth = true

        res.render('users/addUser', { page, iconpage, auth })
    }

    static async createUserPost(req,res){
        
        const nome          = req.body.nome
        const sobrenome     = req.body.sobrenome
        const permissoes    = req.body.permissoes
        const image         = req.body.image

        const users = new Users({nome,sobrenome,permissoes,image})
        
        if(users.image == null || users.image === ""){
            users.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'}
        
   
        try{
            if (!nome || !sobrenome || !permissoes ) 
                return res.redirect('/');
            else{
                await users.save()
                return res.redirect('/');
            }
        }catch{
            return res.redirect('../404');
        }

        res.redirect('/')
    }

    static async editUser(req,res){
        const id = req.params.id

        const page = 'Edição de Usuário'
        const iconpage = '/img/icon/edit.ico'
        const auth = true

        const users = await Users.findById(id).lean()

        res.render('users/editUser', { users, page, iconpage, auth })
    }

    static async editUserPost(req,res){
        const id            = req.body.id
        const nome          = req.body.nome
        const sobrenome     = req.body.sobrenome
        const permissoes    = req.body.permissoes
        const image         = req.body.image


        const users = { nome,sobrenome,permissoes,image }
 
        await Users.updateOne({_id:id},users)

        res.redirect('/config')
    }

    static async removeUser(req,res){
        const id = req.params.id
        
        await Users.deleteOne({ _id: id})

        res.redirect('/')
    }

}
