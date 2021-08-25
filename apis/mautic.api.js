const { default: axios } = require('axios')
const mauticConfig = require('../config/mautic.config')

const MAUTIC_URL_BASE = mauticConfig.url_base
const MAUTIC_API_KEY = mauticConfig.api_key

const mauticApi = axios.create({
  baseURL: `${MAUTIC_URL_BASE}/api`,
  defaults: {
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      Authorization: MAUTIC_API_KEY
    }
  }
})

const mauticFormApi = axios.create({
  baseURL: `${MAUTIC_URL_BASE}`,
  defaults: {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
})

module.exports = {
  mauticApi,
  mauticFormApi
}
