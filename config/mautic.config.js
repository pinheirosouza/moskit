require('dotenv/config')

module.exports = {
    url_base: process.env.MAUTIC_URL_BASE,
    api_key: process.env.MAUTIC_AUTH_KEY
}
