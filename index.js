function viewportPosition (win) {
  win = win || window
  var doc = win.document
  var docElem = doc.documentElement || doc.body.parentNode || doc.body

  var w = docElem.clientWidth
  var h = docElem.clientHeight

  var l = (win.pageXOffset !== undefined)
    ? win.pageXOffset
    : docElem.scrollLeft

  var t = (win.pageYOffset !== undefined)
    ? win.pageYOffset
    : docElem.scrollTop

  return {
    top: t,
    right: l + w,
    left: l,
    bottom: t + h,
    width: w,
    height: h
  }
}

module.exports = viewportPosition
