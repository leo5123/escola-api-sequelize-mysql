import bodyParser from 'body-parser'
import pessoas from './PessoasRoutes.js'
import niveis from './NiveisRoutes.js'
import turmas from './TurmaRoutes.js'

const app = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
        
        )
    app.get('/', (req,res) => res.json({message: 'Tudo certo'}))
}

export default app
