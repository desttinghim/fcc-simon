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
                menu: false,
                game: true,
                count: 0,
                rounds: [],
            },
            methods: {
                redBtn: btn(SimonClr.red),
                blueBtn: btn(SimonClr.blue),
                greenBtn: btn(SimonClr.green),
                yellowBtn: btn(SimonClr.yellow),
            },
        });
    }

    inline static function btn(btnClr:SimonClr) {
        return function() {
            trace(btnClr);
            if (Lib.nativeThis.rounds[Lib.nativeThis.count] == btnClr) {
                advance();
            }
        }
    }

    static function advance() {
        if (app.count < app.rounds.length) {
            app.count++;
        } else {
            app.count = 0;
            getnext();
        }
    }

    static function getnext() {
        app.rounds.push(switch(Math.floor(Math.random() * 4)) {
            case 0: SimonClr.red;
            case 1: SimonClr.blue;
            case 2: SimonClr.green;
            case 3: SimonClr.yellow;
            default: SimonClr.yellow;
        });
    }
}
