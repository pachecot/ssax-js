require(__dirname).test({
  expect: [
    ['opentag', {
      name: 'root',
      id: 0,
      attributes: [
        {
          name: 'length',
          value: '12345',
          prefix: '',
          local: 'length',
          uri: ''
        }
      ],
      ns: {},
      prefix: '',
      local: 'root',
      uri: '',
      isSelfClosing: false
    }],
    ['closetag', {
      name: 'root',
      id: 0
    }],
    ['end'],
    ['ready']
  ],
  strict: false,
  opt: {
    xmlns: true
  }
}).write('<root length=12').write('345></root>').close()
