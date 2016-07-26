function viewportPosition (win) {
  win = win || window
  var doc = win.document

  var w = (win.innerWidth !== undefined)
    ? win.innerWidth
    : (doc.documentElement.clientWidth || 0)

  var h = (win.innerHeight !== undefined)
    ? win.innerHeight
    : (doc.documentElement.clientHeight || 0)

  var l = (win.pageXOffset !== undefined)
    ? win.pageXOffset
    : (doc.documentElement || doc.body.parentNode || doc.body).scrollLeft

  var t = (win.pageYOffset !== undefined)
    ? win.pageYOffset
    : (doc.documentElement || doc.body.parentNode || doc.body).scrollTop

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
