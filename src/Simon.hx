package;

import js.Browser;

class Simon {

    public static function main() {
        startmenu();
    }

    public static function startmenu() {
        Menu.init();
        setHTML(Menu.html);
    }

    public static function startgame() {
        Game.init();
        setHTML(Game.html);
    }

    public static function setHTML(html) {
        Browser.document.getElementById('app').innerHTML = html;
    }
}

@:expose
class Menu {

    public static var html = Browser.document.getElementById('menu').innerHTML;

    public static function init() {
        trace('what');
    }

    public static function start() {
        Simon.startgame();
    }

    public static function strict() {

    }

}

@:enum abstract Clr(String) to String {
    var red = 'red';
    var blue = 'blue';
    var green = 'green';
    var yellow = 'yellow';
}

@:expose
class Game {
    static var rounds : Array<Clr>;
    static var count : Int;
    static var countEl : js.html.DOMElement;

    public static var html = Browser.document.getElementById('game').innerHTML;

    public static function init() {
        trace('init');
        rounds = [];
        count = 0;
        countEl = Browser.document.getElementById('count');
    }

    public static function reset() {
        Simon.startmenu();
    }

    public static function btn(clr:Clr) {
        trace(clr + " " + count);
        countEl.innerHTML = Std.string(count);
        if (rounds[count] == clr) {
            advance();
        }
    }

    static function advance() {
        if (count < rounds.length-1) {
            count++;
        } else {
            count = 0;
            getnext();
        }
    }

    static function getnext() {
        var rand = Math.floor(Math.random() * 4);
        rounds.push(switch(rand) {
            case 0: Clr.red;
            case 1: Clr.blue;
            case 2: Clr.green;
            case 3: Clr.yellow;
            default: Clr.yellow;
        });
        trace(rounds);
        demonstrate();
    }

    static function flash(clr:Clr) {

    }

    static function demonstrate() {

    }
}
