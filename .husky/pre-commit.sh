#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged --allow-empty $1