import database from '../models/index.cjs'

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } 

    static async PegaNivelPorId (req, res){
        const {id} = req.params

        try {
          const Nivel = await database.Niveis.findAll({
            where: {
              id: id
            }
          })
          return res.status(200).json(Nivel)
        } catch (error) {
          return res.status(500).json({message: error.message})
        }

      }

      static async CriaNivel(req, res){
        const novaNivel = req.body

        try {
          const criarNivel = await database.Niveis.create(novaNivel)
          return res.status(200).json(criarNivel)

        } catch (error) {
          res.status(500).json(error.message);
        }
      }

      static async AtualizaNivel(req, res){
        const {id} = req.params
        const body = req.body
        

        try {
          await database.Niveis.update(body, {
            where:{
              id: id
            }
          })
          const Nivel = await database.Niveis.findAll({
            where: {
              id: id  
            }
          })
          return res.status(200).json(Nivel)

        } catch (error) {
          res.status(500).json(error.message);

        }
      }

      static async ApagaNivel(req, res){
        const {id} = req.params

        try {
          await database.Niveis.destroy({
            where: {
              id: id
            }
          })
          return res.status(200).json({message: 'Nivel deletada com sucesso'})
        } catch (error) {
          return res.status(500).json({message: error.message})
        }
      }
}

export default NivelController

