// Generated by Haxe 3.4.0
(function () { "use strict";
Math.__name__ = true;
var Simon = function() { };
Simon.__name__ = true;
Simon.main = function() {
	var _g = new haxe_ds_StringMap();
	if(__map_reserved["red"] != null) {
		_g.setReserved("red",false);
	} else {
		_g.h["red"] = false;
	}
	if(__map_reserved["blue"] != null) {
		_g.setReserved("blue",false);
	} else {
		_g.h["blue"] = false;
	}
	if(__map_reserved["green"] != null) {
		_g.setReserved("green",false);
	} else {
		_g.h["green"] = false;
	}
	if(__map_reserved["yellow"] != null) {
		_g.setReserved("yellow",false);
	} else {
		_g.h["yellow"] = false;
	}
	var btnClr = "red";
	var tmp = function() {
		console.log(btnClr + " " + Std.string(this.count));
		if(this.rounds[this.count] == btnClr) {
			this.advance();
		}
	};
	var btnClr1 = "blue";
	var tmp1 = function() {
		console.log(btnClr1 + " " + Std.string(this.count));
		if(this.rounds[this.count] == btnClr1) {
			this.advance();
		}
	};
	var btnClr2 = "green";
	var tmp2 = function() {
		console.log(btnClr2 + " " + Std.string(this.count));
		if(this.rounds[this.count] == btnClr2) {
			this.advance();
		}
	};
	var btnClr3 = "yellow";
	var tmp3 = function() {
		console.log(btnClr3 + " " + Std.string(this.count));
		if(this.rounds[this.count] == btnClr3) {
			this.advance();
		}
	};
	Simon.app = new Vue({ el : "#app", data : { menu : true, game : false, strict : false, count : 0, rounds : [], demo : _g}, methods : { redBtn : tmp, blueBtn : tmp1, greenBtn : tmp2, yellowBtn : tmp3, advance : Simon.advance, getnext : Simon.getnext, demonstrate : Simon.demonstrate, start : Simon.start, toggleStrict : function() {
		this.strict = this.strict ? false : true;
	}, reset : Simon.reset}});
};
Simon.btn = function(btnClr) {
	return function() {
		console.log(btnClr + " " + Std.string(this.count));
		if(this.rounds[this.count] == btnClr) {
			this.advance();
		}
	};
};
Simon.start = function() {
	this.menu = false;
	this.game = true;
	this.count = 0;
	this.rounds = [];
	this.getnext();
};
Simon.reset = function() {
	this.menu = true;
	this.game = false;
};
Simon.advance = function() {
	if(this.count < this.rounds.length - 1) {
		this.count++;
	} else {
		this.count = 0;
		this.getnext();
	}
};
Simon.getnext = function() {
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
	this.rounds.push(tmp);
	console.log(this.rounds);
	this.demonstrate();
};
Simon.demonstrate = function() {
	var _g1 = 0;
	var _g = this.rounds.length;
	while(_g1 < _g) {
		var i = _g1++;
		var clr = [this.rounds[i]];
		this;
		haxe_Timer.delay((function(clr1) {
			return function() {
				Simon.app.$data.demo.get(clr1[0],true);
			};
		})(clr),i * 1000);
		haxe_Timer.delay((function(clr2) {
			return function() {
				Simon.app.demo.get(clr2[0],false);
			};
		})(clr),i * 1000 + 500);
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
Simon.main();
})();
