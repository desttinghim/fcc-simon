// Generated by Haxe 3.4.2
(function ($hx_exports) { "use strict";
Math.__name__ = true;
var Simon = function() { };
Simon.__name__ = true;
Simon.main = function() {
	Simon.startmenu();
};
Simon.startmenu = function() {
	Simon.setHTML(Menu.html);
	Menu.init();
};
Simon.startgame = function() {
	Simon.setHTML(Game.html);
	Game.init();
};
Simon.setHTML = function(html) {
	window.document.getElementById("app").innerHTML = html;
};
var Menu = $hx_exports["Menu"] = function() { };
Menu.__name__ = true;
Menu.init = function() {
};
Menu.start = function() {
	Simon.startgame();
};
Menu.strict = function() {
};
var Game = $hx_exports["Game"] = function() { };
Game.__name__ = true;
Game.init = function() {
	Game.rounds = [];
	Game.count = 0;
	Game.countEl = window.document.getElementById("count");
	var _g = new haxe_ds_StringMap();
	var value = window.document.getElementById("red");
	var key = "red";
	if(__map_reserved[key] != null) {
		_g.setReserved(key,value);
	} else {
		_g.h[key] = value;
	}
	var value1 = window.document.getElementById("blue");
	var key1 = "blue";
	if(__map_reserved[key1] != null) {
		_g.setReserved(key1,value1);
	} else {
		_g.h[key1] = value1;
	}
	var value2 = window.document.getElementById("green");
	var key2 = "green";
	if(__map_reserved[key2] != null) {
		_g.setReserved(key2,value2);
	} else {
		_g.h[key2] = value2;
	}
	var value3 = window.document.getElementById("yellow");
	var key3 = "yellow";
	if(__map_reserved[key3] != null) {
		_g.setReserved(key3,value3);
	} else {
		_g.h[key3] = value3;
	}
	Game.btnEl = _g;
	var _g1 = new haxe_ds_StringMap();
	var value4 = new Audio("assets/simonSound1.mp3");
	var key4 = "red";
	if(__map_reserved[key4] != null) {
		_g1.setReserved(key4,value4);
	} else {
		_g1.h[key4] = value4;
	}
	var value5 = new Audio("assets/simonSound2.mp3");
	var key5 = "blue";
	if(__map_reserved[key5] != null) {
		_g1.setReserved(key5,value5);
	} else {
		_g1.h[key5] = value5;
	}
	var value6 = new Audio("assets/simonSound3.mp3");
	var key6 = "green";
	if(__map_reserved[key6] != null) {
		_g1.setReserved(key6,value6);
	} else {
		_g1.h[key6] = value6;
	}
	var value7 = new Audio("assets/simonSound4.mp3");
	var key7 = "yellow";
	if(__map_reserved[key7] != null) {
		_g1.setReserved(key7,value7);
	} else {
		_g1.h[key7] = value7;
	}
	Game.btnSnd = _g1;
	Game.getnext();
};
Game.reset = function() {
	Simon.startmenu();
};
Game.btn = function(clr) {
	Game.flash(clr);
	console.log(Game.rounds[Game.count] == clr);
	if(Game.rounds[Game.count] == clr) {
		Game.advance();
	}
};
Game.advance = function() {
	if(Game.count < Game.rounds.length - 1) {
		Game.count++;
	} else {
		Game.count = 0;
		haxe_Timer.delay(Game.getnext,1000);
	}
};
Game.getnext = function() {
	var rand = Math.floor(Math.random() * 4);
	var tmp;
	switch(rand) {
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
	Game.countEl.innerHTML = Std.string(Game.rounds.length);
	Game.demonstrate();
};
Game.flash = function(clr) {
	var _this = Game.btnEl;
	(__map_reserved[clr] != null ? _this.getReserved(clr) : _this.h[clr]).setAttribute("class","simon btn");
	haxe_Timer.delay(function() {
		var _this1 = Game.btnEl;
		(__map_reserved[clr] != null ? _this1.getReserved(clr) : _this1.h[clr]).setAttribute("class","simon btn glow");
		var _this2 = Game.btnSnd;
		(__map_reserved[clr] != null ? _this2.getReserved(clr) : _this2.h[clr]).play();
	},100);
	haxe_Timer.delay(function() {
		var _this3 = Game.btnEl;
		(__map_reserved[clr] != null ? _this3.getReserved(clr) : _this3.h[clr]).setAttribute("class","simon btn");
	},500);
};
Game.demonstrate = function() {
	var _g1 = 0;
	var _g = Game.rounds.length;
	while(_g1 < _g) {
		var c = [_g1++];
		haxe_Timer.delay((function(c1) {
			return function() {
				Game.flash(Game.rounds[c1[0]]);
			};
		})(c),c[0] * 1000);
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
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
var __map_reserved = {}
Menu.html = window.document.getElementById("menu").innerHTML;
Game.html = window.document.getElementById("game").innerHTML;
Simon.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
