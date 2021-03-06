require(__dirname).test({
  strict: true,
  opt: { xmlns: true },
  expect: [
    [
      'error',
      'Unbound namespace prefix: "unbound:root"\nLine: 0\nColumn: 15\nChar: >'
    ],
    [
      'opentag',
      {
        name: 'unbound:root',
        id: 0,
        uri: 'unbound',
        prefix: 'unbound',
        local: 'root',
        attributes: [],
        ns: {},
        isSelfClosing: true
      }
    ],
    [
      'closetag',
      {
        name: 'unbound:root',
        id: 0
      }
    ]
  ]
}).write('<unbound:root/>')

require(__dirname).test({
  strict: true,
  opt: {
    xmlns: true
  },
  expect: [
    [
      'opentag',
      {
        name: 'unbound:root',
        id: 0,
        uri: 'someuri',
        prefix: 'unbound',
        local: 'root',
        attributes: [
          {
            name: 'xmlns:unbound',
            value: 'someuri',
            prefix: 'xmlns',
            local: 'unbound',
            uri: 'http://www.w3.org/2000/xmlns/'
          }
        ],
        ns: {
          'unbound': 'someuri'
        },
        isSelfClosing: true
      }
    ],
    [
      'closetag',
      {
        name: 'unbound:root',
        id: 0
      }
    ]
  ]
}).write('<unbound:root xmlns:unbound="someuri"/>')
