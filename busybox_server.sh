#!/bin/sh
# This shell script uses busybox to make a http server on port 8080
busybox httpd -f -p 8080 -h .