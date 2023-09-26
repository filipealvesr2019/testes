const User = require('../../models/User')
// rotas de criar login do usuario
const userController = {
    async createUser(req, res){

        const bodyData = req.body

        try{
        const newUser = await User.create(bodyData) 
        return res.status(200).json(newUser)
        } catch(err){
            return res.status(400).json(err)
        }

    },

    async getUsers(req, res){
        try{
        const Users = await User.find() 
        return res.status(200).json(Users)
        } catch(err){
            return res.status(400).json(err)
        }

    },

    async getUsersById(req, res){
        const { user_id } = req.params
        try{
            const user = await User.findById(user_id)
            return res.status(200).json(user)
        } catch(err){
            return res.status(400).json(err)
        }
    }
}


module.exports = userController