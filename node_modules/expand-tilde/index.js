/*!
 * expand-tilde <https://github.com/jonschlinkert/expand-tilde>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

var path = require('path');
var userhome = require('user-home');

module.exports = function expandTilde(fp) {
  if (fp.charCodeAt(0) === 126 /* ~ */) {
    if (fp.charCodeAt(1) === 43 /* + */) {
      return path.join(process.cwd(), fp.slice(2));
    }
    return userhome ? path.join(userhome, fp.slice(1)) : fp;
  }
  return fp;
};
