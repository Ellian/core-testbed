/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

 module.exports = {
  type: 'component',
  path: __dirname,
  glob: {
      js: [ 'src/*.js', 'src/*.jsx', 'src/js/**/*.js', 'src/js/**/*.jsx' ],
      ts: [ 'src/*.ts', 'src/*.tsx', 'src/ts/**/*.ts', 'src/ts/**/*.tsx' ],
      stylus: [ 'src/*.styl', 'src/style/**/*.styl' ]
  },
  file: {
      main: 'main.js'
  }
};
