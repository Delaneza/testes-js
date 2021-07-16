
(async () => {
    
    const database = require('./db')
    const Produto = require('./produto')
    
    await database.sync()
    
        // const resultadoCreate = await Produto.create({   // POST - CREATE
        //         nome: 'Monitor LED',
        //         preco: 500,
        //         descricao: '19 Polegadas'
        //     })    
        //     console.log(resultadoCreate);

        
        // const produtos = await Produto.findAll()     // GET ALL
        // console.log(produtos)


        // const produto = await Produto.findByPk(1)   // GET SINGLE
        // console.log(produto)


        // const produtos = await Produto.findAll({     // GET WITH PARAMETERS
        //     where:{
        //         preco: 10
        //     }
        // })
        // console.log(produtos)


        // const produto = await Produto.findByPk(1)   // PUT - UPDATE
        // console.log(produto)
        // produto.descricao = 'Fiz uma alteração'
        // await produto.save()


        // const produto = await Produto.findByPk(1)   // DELETE
        // console.log(produto)
        // await produto.destroy()

        // await Produto.destroy({ where: { preco: 500 }}) // DELETE
})()
