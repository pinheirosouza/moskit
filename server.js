const express = require('express')
require('express-async-errors')

const cors = require('cors')
const applicationConfigs = require('./config/application.config.js')
const database = require('./databases/mongodb.database.js')

// --------------- INIT APP -----------
const app = express()

app.enable('trust proxy')

app.use(express.json({ limit: '1mb' }))
app.use(
    express.urlencoded({
        limit: '1mb',
        extended: true
    })
)
app.use(cors())

app.use(function (req, res) {
    res.status(404)
    if (req.accepts('html')) {
        res.send(`${applicationConfigs.name} - Anota AI`)
        return
    }
    if (req.accepts('json')) {
        res.send({
            error: 'Not found'
        })
        return
    }
    res.type('txt').send('Not found')
})

const AppError = require('./utils/error.util.js')

// Optional fallthrough error handler
app.use((err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json(err)
    }

    console.error(err)

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

const port = 3000

app.listen(applicationConfigs.port || port, async () => {
    await database()
    console.log(`${applicationConfigs.name} running on port ${port}`)
})

module.exports = app
