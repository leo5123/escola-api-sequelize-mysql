import express from 'express'

import routes from './routes/index.js'

const app = express()

routes(app)


const port = process.env.port || 3000

app.listen(3000, () => {
    console.log(`Server funcionando em http://localhost:${port}/teste`);
})

export default app