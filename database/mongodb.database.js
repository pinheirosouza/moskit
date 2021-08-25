const mongoose = require('mongoose')
const dbconfig = require('../config/database.config')

module.exports = async () => {
    const db = dbconfig.srv

    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }

    await mongoose.connect(db, options)
}
