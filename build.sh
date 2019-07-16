#!/bin/bash
set -x
APP=cookie-consent
ng build $APP --prod --output-hashing=none && cat dist/$APP/runtime-es5.js dist/$APP/polyfills-es5.js dist/$APP/scripts.js dist/$APP/main-es5.js > dist/$APP/$APP.js