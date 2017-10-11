#!/bin/bash

set -e

./node_modules/.bin/pug sources/index.pug \
--out public/ \
--watch sources/index.pug \
--silent
