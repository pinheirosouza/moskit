const { moskitApi } = require('../apis/moskit.api')

const searchInEntity = (entity, expression) => {
  return moskitApi.post(`/${entity}/search`, expression)
}

const createEntity = (entity, data) => {
  return moskitApi.post(`/${entity}/`, data)
}

const updateEntityById = (entity, data) => {
  return moskitApi.put(`/${entity}/`, data)
}

module.exports = {
  searchInEntity,
  createEntity,
  updateEntityById
}
