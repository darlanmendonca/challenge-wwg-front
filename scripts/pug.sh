#!/bin/bash

set -e

./node_modules/.bin/pug sources/angular/**/*.template.pug \
--out public/templates \
--watch sources/angular/**/*.template.pug \
--silent &

./node_modules/.bin/pug sources/index.pug \
--out public/ \
--watch sources/index.pug \
--silent
