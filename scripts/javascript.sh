#!/bin/bash

set -e

./node_modules/.bin/webpack sources/angular/app.js public/vendor.js \
--devtool source-map \
--hide-modules true \
--watch \

# https://www.npmjs.com/package/uglify-es
# ./node_modules/.bin/uglifyjs public/vendor.js -c -m -o public/vendor.min.js
