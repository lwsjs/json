'use strict'

class Json {
  description () {
    return 'JSON pretty-printed response middleware. Also converts node object streams to binary. Use "pretty" in the query string to enable.'
  }
  middleware () {
    const json = require('koa-json')
    return json()
  }
}

module.exports = Json
