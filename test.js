/* global describe, beforeEach, afterEach, it */

'use strict'

var assert = require('assert')
var viewportPosition = require('./')

describe('viewport position', function () {
  var win = window
  var doc = win.document

  before(function () {
    document.body.style.padding = '0'
    document.body.style.margin = '0'
    document.body.style.position = 'relative'
    document.body.style.width = '30000px'
    document.body.style.height = '30000px'
  })

  it('scroll to (0, 0)', function (done) {
    var scrollTop = 0
    var scrollLeft = 0
    var windowWidth = doc.documentElement.clientWidth || doc.body.clientWidth
    var windowHeight = doc.documentElement.clientHeight || doc.body.clientHeight

    setTimeout(function () {window.scrollTo(scrollLeft, scrollTop)}, 1)

    setTimeout(function () {
      var pos = viewportPosition()

      assert.equal(pos.top, scrollTop)
      assert.equal(pos.left, scrollLeft)
      assert.equal(pos.right, scrollLeft + windowWidth)
      assert.equal(pos.bottom, scrollTop + windowHeight)

      done()
    }, 100)
  })

  it('scroll to (300,300)', function (done) {
    var scrollTop = 300
    var scrollLeft = 300
    var windowWidth = doc.documentElement.clientWidth || doc.body.clientWidth
    var windowHeight = doc.documentElement.clientHeight || doc.body.clientHeight

    setTimeout(function () {window.scrollTo(scrollLeft, scrollTop)}, 1)

    setTimeout(function () {
      var pos = viewportPosition()

      assert.equal(pos.top, scrollTop)
      assert.equal(pos.left, scrollLeft)
      assert.equal(pos.right, scrollLeft + windowWidth)
      assert.equal(pos.bottom, scrollTop + windowHeight)
      done()
    }, 100)
  })
})
