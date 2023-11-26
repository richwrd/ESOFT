const Users = require('../models/Users')

const Op = require('sequelize')

module.exports = class usersController 
{
    static async createUser(req, res) {

        const page = 'Adicionar Usuário'
        const iconpage = '/img/icon/info.ico'
    
        res.render('users/addUser', {page, iconpage})
    }

    static async createUserPost(req, res) {
        console.log('USUARIO SALVO')

        const nome = req.body.nome
        const permissoes = req.body.permissoes

            await Users.create({nome, permissoes})
    
        res.redirect('/')
    }

    static async editUser(req, res) {

        const idkey_req = req.body.idkey
        const page = 'Editar Usuário'
        const iconpage = '/img/icon/info.ico' 

        const user = await Users.findOne({ raw:true, 
                                            where: { idkey: idkey_req  }
                                        })

        res.render('users/editUser', {page, iconpage, user}) 
    }

    static async editUserPost(req, res) {

        const page = 'Editar Usuário'
        const iconpage = '/img/icon/info.ico'

        const idkey_req = parseInt(req.body.idkey) 
        const nome_req = req.body.nome
        const permissoes_req = req.body.permissoes
        
        try {
            console.log('Usuario NAO ATUALIZADO! ', user)

            const user = await Users.update( 
                {   nome: nome_req,
                    permissoes: permissoes_req},
                // Condições de pesquisa
                { where: { idkey: idkey_req} })

            console.log('Usuario atualizado! ', user)

            res.redirect('/', {page, iconpage})
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    }


    static async listUser(req, res) {

        console.log('ENTROU NA LISTAGEM')
        const page = 'Listar Usuários'
        const iconpage = '/img/icon/info.ico'


        try {
            const users = await Users.findAll({raw: true})
            console.log(users)

            users.idkey = parseInt(users.idkey)
            
            res.render('users/listUser', { page, iconpage, users})
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    
    }
        
    static async removeUser(req,res){

        console.log('removendo..')

        const page = 'Listar Usuários'
        const iconpage = '/img/icon/info.ico'


        try {
            const users = await Users.destroy({raw: true})
            console.log(users)
            
            res.render('users/listUser', { page, iconpage, users})
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }

    }
}

//     static async showProducts(req, res){

//         const page = 'Produtos'
//         const iconpage = '/images/icon/find_file.ico'
//         const auth = true

//         const products = await Product.find().lean()
        
//         products.forEach((product) => {
//             if(product.image == null || product.image === "")
//                 product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
//         })

//         res.render('products/all', { products, page, iconpage, auth })
//     }

//     static async createProduct(req,res){

//         const page = 'Produtos'
//         const iconpage = '/images/icon/find_file.ico'  
//         const auth = true

//         res.render('products/create', { page, iconpage, auth })
//     }

//     static async createProductPost(req,res){
        
//         const name          = req.body.name
//         const price         = req.body.price
//         const description   = req.body.description
//         const image         = req.body.image

//         const product = new Product({name,price,description,image})
        
//         if(product.image == null || product.image === ""){
//             product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'}
        
//         await product.save()
        
//         res.redirect('/')
//     }

//     static async getProduct(req,res){
        
//         const id = req.params.id
        
//         const product = await Product.findById(id).lean()


//         const page = 'Produtos'
//         const iconpage = '/images/icon/main.ico'
//         const auth = true
        
//         res.render('products/product', { product, page, iconpage, auth })
//     }

//     static async editProduct(req,res){
//         const id = req.params.id

//         const page = 'Produtos'
//         const iconpage = '/images/icon/main.ico'
//         const auth = true

//         const product = await Product.findById(id).lean()

//         res.render('products/edit', { product, page, iconpage, auth })
//     }

//     static async editProductPost(req,res){
//         const id = req.body.id
//         const name = req.body.name
//         const image = req.body.image
//         const price = req.body.price
//         const description = req.body.description


//         const product = { name , image , price , description }

//         await Product.updateOne({_id:id},product)

//         res.redirect('/products')
//     }

//     static async removeProduct(req,res){
//         const id = req.params.id
        
//         await Product.deleteOne({ _id: id})

//         res.redirect('/products')
//     }

//     static async showProductsMaior100(req, res){

//         const page = 'Produtos'
//         const iconpage = '/images/icon/find_file.ico'
//         const auth = true

//         const products = await Product.find( 
//             { price: { $gte: 100 } }).lean()
        
//         console.log( products )

//         products.forEach((product) => {
//             if(product.image == null || product.image === "")
//                 product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
//         })

//         res.render('products/all', { products, page, iconpage, auth })
//     }

//     static async showProductsMenor100(req, res){

//         const page = 'Produtos'
//         const iconpage = '/images/icon/find_file.ico'
//         const auth = true

//         const products = await Product.find( 
//             { price: { $lte: 100 } }).lean()

//         console.log( products )
        
//         products.forEach((product) => {
//             if(product.image == null || product.image === "")
//                 product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
//         })

//         res.render('products/all', { products, page, iconpage, auth })
//     }

//     static async showProductsCoca(req, res){

//         const page = 'Produtos'
//         const iconpage = '/images/icon/find_file.ico'
//         const auth = true

//         const products = await Product.find({ $and: [{ price: { $lte: 50 }}, 
//                                                     { name: {$regex:"Coca-Cola"}}]}).lean()

//         console.log( products )
        
//         products.forEach((product) => {
//             if(product.image == null || product.image === "")
//                 product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
//         })
        
//         res.render('products/all', { products, page, iconpage, auth })
//     }

//     static async showProductsFood(req, res){

//         const page = 'Produtos'
//         const iconpage = '/images/icon/find_file.ico'
//         const auth = true

//         const products = await Product.find(({ $or: [{ name: {$regex:"Chips"}}, 
//                                             { name: {$regex:"Bolacha"}}]})).lean()

//         console.log( products )
        
//         products.forEach((product) => {
//             if(product.image == null || product.image === "")
//                 product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
//         })
        
//         res.render('products/all', { products, page, iconpage, auth })
//     }

    
// }
