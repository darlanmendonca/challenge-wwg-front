#!/bin/bash

set -e

port=3000

cat ./node_modules/minimalist/index.css >> ./public/minimalist.css &
npm run pug $1 &
npm run sass $1 &
npm run javascript $1 & \

./node_modules/.bin/browser-sync start \
--server 'public' \
--files 'public/*.*' \
--no-ui \
--no-notify
