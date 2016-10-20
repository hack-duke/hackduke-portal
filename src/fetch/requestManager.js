import 'whatwg-fetch'

export const fetchAPI = (method, body, route) => {
  let headers = new Headers()
  const base64 = require('base-64')
  console.log(`${API_URL}`)
  const auth = `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`
  headers.append('Authorization', 'Basic ' + base64.encode(auth))
  headers.append('Content-Type', 'application/json')
  return fetch(`${API_URL}/${route}`, {
    method: method,
    headers: headers,
    body: body
  })
}
