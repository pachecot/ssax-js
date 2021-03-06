var sax = require('../lib')
var xml = '<r>'
var text = ''
for (var i in sax.ENTITIES) {
  xml += '&' + i + ';'
  text += sax.ENTITIES[i]
}
xml += '</r>'
require(__dirname).test({
  xml: xml,
  expect: [
    ['opentag', { 'name': 'r', id: 0, attributes: [], isSelfClosing: false }],
    ['text', text],
    ['closetag', { 'name': 'r', id: 0 }]
  ]
})
