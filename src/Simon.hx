package;

import js.Browser;

class Simon {

    public static function main() {
        startmenu();
    }

    public static function startmenu() {
        setHTML(Menu.html);
    }

    public static function startgame() {
        setHTML(Game.html);
    }

    public static function setHTML(html) {
        Browser.document.getElementById('app').innerHTML = html;
    }
}

@:expose
class Menu {

    public static var html = Browser.document.getElementById('menu').innerHTML;

    public static function start() {
        Simon.setHTML(Game.html);
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

    public static var html = Browser.document.getElementById('game').innerHTML;

    public static function btn(clr:Clr) {
        return function(event:js.html.MouseEvent) {

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
