/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

 // Reference: https://gist.github.com/saddieeiddas/619e7f78114c7b855c00

module.exports = {
  type: 'component',
  engine: "ts",
  path: __dirname,
  name: 'main',
  glob: {
    js: [ 'src/*.js', 'src/*.jsx', 'src/js/**/*.js', 'src/js/**/*.jsx' ],
    ts: [ 'src/*.ts', 'src/*.tsx', 'src/ts/**/*.ts', 'src/ts/**/*.tsx' ],
    stylus: [ 'src/*.styl', 'src/style/**/*.styl' ]
  },
  dir: {
    dist: 'dist/testbed'
  }
};
