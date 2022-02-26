import Mail from '../lib/Mail'

export default {
    async store(req, res){
        const {name, email, password} = req.body;

        const users = {
            name,
            email,
            password
        }

        // Adicionar job Registration na fila

        return res.json(users);
    }    
}