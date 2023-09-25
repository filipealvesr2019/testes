const User = require('../../models/User')
// rota de listar produto
const userController = {
    async createUser(req, res){

        const bodyData = req.body

        try{
        const newUser = await User.create(bodyData) 
        return res.status(200).json(newUser)
        } catch(err){
            return res.status(400).json(err)
        }

    }
}


module.exports = userController