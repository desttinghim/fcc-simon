package;

import js.Browser;

class Simon {

    public static function main() {
        startmenu();
    }

    public static function startmenu() {
        setHTML(Menu.html);
        Menu.init();
    }

    public static function startgame() {
        setHTML(Game.html);
        Game.init();
    }

    public static function setHTML(html) {
        Browser.document.getElementById('app').innerHTML = html;
    }
}

@:expose
class Menu {

    public static var html = Browser.document.getElementById('menu').innerHTML;

    public static function init() {

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
    static var btnEl : Map<Clr, js.html.DOMElement>;

    public static var html = Browser.document.getElementById('game').innerHTML;

    public static function init() {
        rounds = [];
        count = 0;
        countEl = Browser.document.getElementById('count');
        btnEl = [
            red => Browser.document.getElementById('red'),
            blue => Browser.document.getElementById('blue'),
            green => Browser.document.getElementById('green'),
            yellow => Browser.document.getElementById('yellow'),
        ];
        getnext();
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
        trace(clr);
        btnEl.get(clr).setAttribute('class', 'simon btn glow');
        haxe.Timer.delay(function() btnEl.get(clr).setAttribute('class', 'simon btn'), 500);
    }

    static function demonstrate() {
        for (c in 0...rounds.length) {
            haxe.Timer.delay(function() flash(rounds[c]), c * 1000);
        }
    }
}
