
import database from '../models/index.cjs'



class PessoaController{
    static async PegaTodasAsPessoas(req, res){
        try {
          const todasAsPessoas = await database.Pessoas.findAll()
          return res.status(200).json(todasAsPessoas)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
        
        static async PegaPessoaPorId (req, res){
          const {id} = req.params

          try {
            const Pessoa = await database.Pessoas.findAll({
              where: {
                id: id
              }
            })
            return res.status(200).json(Pessoa)
          } catch (error) {
            return res.status(500).json({message: error.message})
          }

        }

        static async CriaPessoa(req, res){
          const novaPessoa = req.body

          try {
            const criarPessoa = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(criarPessoa)

          } catch (error) {
            res.status(500).json(error.message);
          }
        }

        static async AtualizaPessoa(req, res){
          const {id} = req.params
          const body = req.body
          

          try {
            const PessoaAtualizada = await database.Pessoas.update(body, {
              where:{
                id: id
              }
            })
            const Pessoa = await database.Pessoas.findAll({
              where: {
                id: id  
              }
            })
            return res.status(200).json(Pessoa)

          } catch (error) {
            res.status(500).json(error.message);

          }
        }

        static async ApagaPessoa(req, res){
          const {id} = req.params

          try {
            const Pessoa = await database.Pessoas.destroy({
              where: {
                id: id
              }
            })
            return res.status(200).json({message: 'Pessoa deletada com sucesso'})
          } catch (error) {
            return res.status(500).json({message: error.message})
          }
        }

        static async PegaMatriculaPorId (req, res){
          const {estudanteId, matriculaId} = req.params

          try {
            const matricula = await database.Matriculas.findOne({
              where: {
                matriculaId: matriculaId,
                estudanteId: estudanteId
              }
            })
            return res.status(200).json(matricula)
          } catch (error) {
            return res.status(500).json({message: error.message})
          }
        
    }

    static async CriaMatricula (req, res) {
      const {estudanteId} = req.params
      const novaMatricula = { ...req.body, estudanteId}

      const novaMatriculaCriada = database.Matriculas.create(novaMatricula)

      try {
        res.status(200).json(novaMatriculaCriada)
      } catch (error) {
        res.status(500).json(error.message)
      }

    }
  }


export default PessoaController