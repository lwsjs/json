'use strict'

class Json {
  middleware () {
    const json = require('koa-json')
    return json()
  }
}

module.exports = Json
