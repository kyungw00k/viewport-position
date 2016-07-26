'use strict'

var test = require('tape')
var viewportPosition = require('./')

test('viewport position', function (t) {
  document.body.style.position = 'relative'
  document.body.style.width = '30000px'
  document.body.style.height = '30000px'

  window.scrollTo(0, 0)

  t.deepEqual(viewportPosition(), {
    top: 0,
    right: 400,
    left: 0,
    bottom: 300,
    width: 400,
    height: 300
  })

  window.scrollTo(300, 300)

  t.deepEqual(viewportPosition(), {
    top: 300,
    right: 700,
    left: 300,
    bottom: 600,
    width: 400,
    height: 300
  })

  t.end()
})
