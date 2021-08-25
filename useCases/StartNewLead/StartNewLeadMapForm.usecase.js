module.exports = (body, cookies) => {
  startTest = performance.now()

  const mauticFormData = { 'mauticform[formId]': MAUTIC_FORM_ID }
  const mappedForm = {}

  if (body?.length) {
    for (const param of body) {
      mauticFormData[`mauticform[${param.name}]`] = param.value
      mappedForm[param.name] = param.value
    }
  } else {
    for (const key of Object.keys(body)) {
      mauticFormData[`mauticform[${key}]`] = body[key]
      mappedForm[key] = body[key]
    }
  }

  const parsedCookies = {}

  if (cookies) {
    cookies.split(/\s*;\s*/).forEach((pair) => {
      pair = pair.split(/\s*=\s*/)

      const name = decodeURIComponent(pair[0])
      const value = decodeURIComponent(pair.splice(1).join('='))

      parsedCookies[name] = value
    })
  }

  return {
    mauticFormData: mauticFormData,
    mappedForm: { ...mappedForm, ...parsedCookies },
    mappedCookies: parsedCookies
  }
}
