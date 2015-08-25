/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var buildConfig = require('./cu-build.config.js');
var buildTools = require('cu-build-tools');

buildTools.auto(gulp, buildConfig);

gulp.task('copy-images', function () {
  console.log('copy images');
  gulp.src([ 
      'node_modules/cu-components/lib/classes/unitframe/**/*.png', 
      'node_modules/cu-components/lib/classes/unitframe/**/*.jpg'
    ])
    .pipe(debug({ title: 'source:' }))
    .pipe(gulp.dest('dist/lib/cu-components/unitframe'))
    .pipe(debug({ title: 'output:' }));
});

gulp.task('copy-css', function () {
  console.log('copy css');
  gulp.src([
      'node_modules/cu-components/lib/classes/UnitFrame.css',
      'node_modules/cu-components/lib/classes/UnitFrame-character.css'
    ])
    .pipe(debug({ title: 'source:' }))
    .pipe(gulp.dest('dist/lib/cu-components'))
    .pipe(debug({ title: 'output:' }));
});

gulp.task('copy-html', function () {
  console.log('copy css');
  gulp.src('src/**.html')
    .pipe(debug({ title: 'source:' }))
    .pipe(gulp.dest('dist/testbed'))
    .pipe(debug({ title: 'output:' }));
});

gulp.task('copy:assets', [ 'copy-html', 'copy-images', 'copy-css' ]);

