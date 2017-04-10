// Generated by Haxe 3.4.0
(function ($hx_exports) { "use strict";
Math.__name__ = true;
var Simon = function() { };
Simon.__name__ = true;
Simon.main = function() {
	Simon.startmenu();
};
Simon.startmenu = function() {
	Menu.init();
	Simon.setHTML(Menu.html);
};
Simon.startgame = function() {
	Game.init();
	Simon.setHTML(Game.html);
};
Simon.setHTML = function(html) {
	window.document.getElementById("app").innerHTML = html;
};
var Menu = $hx_exports["Menu"] = function() { };
Menu.__name__ = true;
Menu.init = function() {
	console.log("what");
};
Menu.start = function() {
	Simon.startgame();
};
Menu.strict = function() {
};
var Game = $hx_exports["Game"] = function() { };
Game.__name__ = true;
Game.init = function() {
	console.log("init");
	Game.rounds = [];
	Game.count = 0;
	Game.countEl = window.document.getElementById("count");
};
Game.reset = function() {
	Simon.startmenu();
};
Game.btn = function(clr) {
	console.log(clr + " " + Game.count);
	Game.countEl.innerHTML = Std.string(Game.count);
	if(Game.rounds[Game.count] == clr) {
		Game.advance();
	}
};
Game.advance = function() {
	if(Game.count < Game.rounds.length - 1) {
		Game.count++;
	} else {
		Game.count = 0;
		Game.getnext();
	}
};
Game.getnext = function() {
	var tmp;
	switch(Math.floor(Math.random() * 4)) {
	case 0:
		tmp = "red";
		break;
	case 1:
		tmp = "blue";
		break;
	case 2:
		tmp = "green";
		break;
	case 3:
		tmp = "yellow";
		break;
	default:
		tmp = "yellow";
	}
	Game.rounds.push(tmp);
	console.log(Game.rounds);
};
Game.flash = function(clr) {
};
Game.demonstrate = function() {
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
String.__name__ = true;
Array.__name__ = true;
Menu.html = window.document.getElementById("menu").innerHTML;
Game.html = window.document.getElementById("game").innerHTML;
Simon.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
