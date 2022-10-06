import database from '../models/index.cjs'

class TurmaController {

    static async pegaTodosAsTurmas(req, res) {
      try {
        const todosAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todosAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } 

    static async PegaTurmaPorId (req, res){
        const {id} = req.params

        try {
          const Turma = await database.Turmas.findAll({
            where: {
              id: id
            }
          })
          return res.status(200).json(Turma)
        } catch (error) {
          return res.status(500).json({message: error.message})
        }

      }

      static async CriaTurma(req, res){
        const novaTurma = req.body

        try {
          const criarTurma = await database.Turmas.create(novaTurma)
          return res.status(200).json(criarTurma)

        } catch (error) {
          res.status(500).json(error.message);
        }
      }

      static async AtualizaTurma(req, res){
        const {id} = req.params
        const body = req.body
        

        try {
          await database.Turmas.update(body, {
            where:{
              id: id
            }
          })
          const Turma = await database.Turmas.findAll({
            where: {
              id: id  
            }
          })
          return res.status(200).json(Turma)

        } catch (error) {
          res.status(500).json(error.message);

        }
      }

      static async ApagaTurma(req, res){
        const {id} = req.params

        try {
          await database.Turmas.destroy({
            where: {
              id: id
            }
          })
          return res.status(200).json({message: 'Turma deletada com sucesso'})
        } catch (error) {
          return res.status(500).json({message: error.message})
        }
      }
}

export default TurmaController

