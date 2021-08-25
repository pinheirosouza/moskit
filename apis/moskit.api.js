const { default: axios } = require('axios')
const moskitConfig = require('../config/moskit.config')
const { performance } = require('perf_hooks')
const MOSKIT_URL_BASE = moskitConfig.url_base
const MOSKIT_API_KEYS = moskitConfig.api_keys

const getApiKey = () => {
  const timestampString = performance.now().toString()
  const apikeys = MOSKIT_API_KEYS
  const lastChar = timestampString.slice(-1)

  return apikeys[lastChar]
}

const moskitApi = axios.create({
  baseURL: `${MOSKIT_URL_BASE}`,
  defaults: {
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      apikey: getApiKey()
    }
  }
})

module.exports = {
  moskitApi
}
