package;

import vue.Vue;
import js.Lib;

@:enum abstract SimonClr(String) to String {
    var red = 'red';
    var blue = 'blue';
    var green = 'green';
    var yellow = 'yellow';
}

class Simon {
    public static var app : Vue;

    public static function main() {

        app = new Vue({
            el: '#app',
            data: {
                menu: true,
                game: false,
                strict: false,
                count: 0,
                rounds: [],
            },
            methods: {
                redBtn: btn(SimonClr.red),
                blueBtn: btn(SimonClr.blue),
                greenBtn: btn(SimonClr.green),
                yellowBtn: btn(SimonClr.yellow),

                advance: advance,
                getnext: getnext,
                demonstrate: demonstrate,
                start: start,
                toggleStrict: function() {
                    var strict = Lib.nativeThis.strict;
                    Lib.nativeThis.strict = (strict ? false : true);
                },
                reset: reset
            },
        });
    }

    inline static function btn(btnClr:SimonClr) {
        return function() {
            trace(btnClr + " " + Lib.nativeThis.count);
            if (Lib.nativeThis.rounds[Lib.nativeThis.count] == btnClr) {
                Lib.nativeThis.advance();
            }
        }
    }

    inline static function start() {
        Lib.nativeThis.menu = false;
        Lib.nativeThis.game = true;
        Lib.nativeThis.count = 0;
        Lib.nativeThis.rounds = [];
        Lib.nativeThis.getnext();
    }

    inline static function reset() {
        Lib.nativeThis.menu = true;
        Lib.nativeThis.game = false;
    }

    inline static function advance() {
        if (Lib.nativeThis.count < Lib.nativeThis.rounds.length-1) {
            Lib.nativeThis.count++;
        } else {
            Lib.nativeThis.count = 0;
            Lib.nativeThis.getnext();
        }
    }

    inline static function getnext() {
        var rand = Math.floor(Math.random() * 4);
        Lib.nativeThis.rounds.push(switch(rand) {
            case 0: SimonClr.red;
            case 1: SimonClr.blue;
            case 2: SimonClr.green;
            case 3: SimonClr.yellow;
            default: SimonClr.yellow;
        });
        trace(Lib.nativeThis.rounds);
        Lib.nativeThis.demonstrate();
    }

    inline static function demonstrate() {
        for (i in 0...Lib.nativeThis.rounds.length) {
            trace(i);
            var clr = Lib.nativeThis.rounds[i];
            var el = js.Browser.document.getElementById(clr);
            if (el == null) {trace('what'); continue;}
            haxe.Timer.delay(function() {
                trace(clr);
                el.setAttribute("style", "box-shadow: 10px 10px 5px black inset;");
            }, i * 1000);
            haxe.Timer.delay(function() {
                el.setAttribute("style", "");
            }, i * 1000 + 500);
        }
    }
}
