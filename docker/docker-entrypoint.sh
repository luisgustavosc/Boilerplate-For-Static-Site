#!/bin/sh

case $1 in
  dev)
    echo "Dev Mode"
    npm start
    ;;
  prod)
    echo "Prod Mode"
    npm run build
    ;;
  *)
    exec "$@"
    ;;
esac
