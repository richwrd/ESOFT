const Product = require('../models/Product')

module.exports = class productController 
{
    static async showProducts(req, res){

        const page = 'Produtos'
        const iconpage = '/images/icon/find_file.ico'
        const auth = true

        const products = await Product.find().lean()
        
        products.forEach((product) => {
            if(product.image == null || product.image === "")
                product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
        })

        res.render('products/all', { products, page, iconpage, auth })
    }

    static async createProduct(req,res){

        const page = 'Produtos'
        const iconpage = '/images/icon/find_file.ico'  
        const auth = true

        res.render('products/create', { page, iconpage, auth })
    }

    static async createProductPost(req,res){
        
        const name          = req.body.name
        const price         = req.body.price
        const description   = req.body.description
        const image         = req.body.image

        const product = new Product({name,price,description,image})
        
        if(product.image == null || product.image === ""){
            product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'}
        
        await product.save()
        
        res.redirect('/')
    }

    static async getProduct(req,res){
        
        const id = req.params.id
        
        const product = await Product.findById(id).lean()


        const page = 'Produtos'
        const iconpage = '/images/icon/main.ico'
        const auth = true
        
        res.render('products/product', { product, page, iconpage, auth })
    }

    static async editProduct(req,res){
        const id = req.params.id

        const page = 'Produtos'
        const iconpage = '/images/icon/main.ico'
        const auth = true

        const product = await Product.findById(id).lean()

        res.render('products/edit', { product, page, iconpage, auth })
    }

    static async editProductPost(req,res){
        const id = req.body.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description


        const product = { name , image , price , description }

        await Product.updateOne({_id:id},product)

        res.redirect('/products')
    }

    static async removeProduct(req,res){
        const id = req.params.id
        
        await Product.deleteOne({ _id: id})

        res.redirect('/products')
    }

    static async showProductsMaior100(req, res){

        const page = 'Produtos'
        const iconpage = '/images/icon/find_file.ico'
        const auth = true

        const products = await Product.find( 
            { price: { $gte: 100 } }).lean()
        
        console.log( products )

        products.forEach((product) => {
            if(product.image == null || product.image === "")
                product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
        })

        res.render('products/all', { products, page, iconpage, auth })
    }

    static async showProductsMenor100(req, res){

        const page = 'Produtos'
        const iconpage = '/images/icon/find_file.ico'
        const auth = true

        const products = await Product.find( 
            { price: { $lte: 100 } }).lean()

        console.log( products )
        
        products.forEach((product) => {
            if(product.image == null || product.image === "")
                product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
        })

        res.render('products/all', { products, page, iconpage, auth })
    }

    static async showProductsCoca(req, res){

        const page = 'Produtos'
        const iconpage = '/images/icon/find_file.ico'
        const auth = true

        const products = await Product.find({ $and: [{ price: { $lte: 50 }}, 
                                                    { name: {$regex:"Coca-Cola"}}]}).lean()

        console.log( products )
        
        products.forEach((product) => {
            if(product.image == null || product.image === "")
                product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
        })
        
        res.render('products/all', { products, page, iconpage, auth })
    }

    static async showProductsFood(req, res){

        const page = 'Produtos'
        const iconpage = '/images/icon/find_file.ico'
        const auth = true

        const products = await Product.find(({ $or: [{ name: {$regex:"Chips"}}, 
                                            { name: {$regex:"Bolacha"}}]})).lean()

        console.log( products )
        
        products.forEach((product) => {
            if(product.image == null || product.image === "")
                product.image = 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'
        })
        
        res.render('products/all', { products, page, iconpage, auth })
    }

    
}
