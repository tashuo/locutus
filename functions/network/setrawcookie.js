function setrawcookie (name, value, expires, path, domain, secure) {
  //  discuss at: http://phpjs.org/functions/setrawcookie/
  // original by: Brett Zamir (http://brett-zamir.me)
  // original by: setcookie
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Michael
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: setrawcookie('author_name', 'Kevin van Zonneveld');
  //   returns 1: true

  if (typeof expires === 'string' && (/^\d+$/)
    .test(expires)) {
    expires = parseInt(expires, 10)
  }

  if (expires instanceof Date) {
    expires = expires.toUTCString()
  } else if (typeof expires === 'number') {
    expires = (new Date(expires * 1e3))
      .toUTCString()
  }

  var r = [name + '=' + value],
    s = {},
    i = ''
  s = {
    expires: expires,
    path: path,
    domain: domain
  }
  for (i in s) {
    if (s.hasOwnProperty(i)) {
      // Exclude items on Object.prototype
      s[i] && r.push(i + '=' + s[i])
    }
  }

  return secure && r.push('secure'), this.window.document.cookie = r.join(';'), true
}
