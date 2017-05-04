# Simon

This is a html5 game based on the classic SIMON. It is intended
to have a responsive design for both mobile and desktop. Uses
Haxe compiled to JavaScript.

## Running

On any environment with busybox, just run `busybox_server.sh` to
start a local server. After that, go to `localhost:8080` in your
preferred web browser.

## Compiling

Compiling depends on:
* Haxe 3.4.2
And that's it! If you don't have it, install it from the
[Haxe website](https://www.haxe.org) or your OS's package
manager. Then run `haxe build.hxml` in the src/ directory.