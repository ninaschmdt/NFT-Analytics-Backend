const Router = require('express').Router
const axios = require('axios')

const icyToolsRouter = Router()


icyToolsRouter.post('/', async (req, res) => {
    try {
        const { body: { query } } = req
        const { data: queryResults } = await axios.post(process.env.ICY_TOOLS_GRAPHQL_API, {
            query
        }, {
            headers: {
                "x-api-key": process.env.ICY_TOOLS_X_API_KEY
            }
        })
        return res.json({ queryResults })
    } catch (error) {
        res.status(500).json({ error })
    }
})

module.exports = icyToolsRouter
