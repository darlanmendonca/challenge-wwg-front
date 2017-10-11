#!/bin/bash

set -e

./node_modules/.bin/node-sass sources/styles/app.scss public/vendor.css -q \
--output-style compressed \
--source-map true \
--error-bell \
--watch
