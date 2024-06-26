const __vite__fileDeps = ["assets/HomeView-B2Xg55Ab.js", "assets/invate-DUkBNCVC.js", "assets/boost-gas-DEHRKJyI.js", "assets/_plugin-vue_export-helper-DlAUqK2U.js", "assets/IconBase.vue_vue_type_script_setup_true_lang-CbJPmdtv.js", "assets/LeagueIcon.vue_vue_type_script_setup_true_lang-gLiGyNeL.js", "assets/useAppScroll-C9BmGQ_z.js", "assets/HomeView-CvLs6dve.css", "assets/InvitesView-CYdplSnV.js", "assets/BoostAddCount-_X1YHHwf.js", "assets/BoostAddCount-CpB4cObf.css", "assets/useBackButton-BkAibybO.js", "assets/InvitesView-DO5ecPTh.css", "assets/BoostView-5wn7TEPT.js", "assets/CheckboxMain-DLRwn5U7.js", "assets/CheckboxMain-D19ZPHXo.css", "assets/BoostView-Bw1by4dv.css", "assets/LeaderboardView-DvCn_akV.js", "assets/LeaderboardView-RHGUwpMH.css", "assets/SettingsView-D11oFNgU.js", "assets/SettingsView-CdbWezxa.css", "assets/ClosedView-Da5Ls5T_.js", "assets/ClosedView-DJz6K3Eu.css", "assets/MobileOnlyView-DJzrGNP1.js", "assets/MobileOnlyView-vJke_dQV.css", "assets/BannedView-DGBO9AqZ.js", "assets/BannedView-T5GVi4Ql.css"],
	__vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
	new MutationObserver(s => {
		for (const o of s)
			if (o.type === "childList")
				for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(s) {
		const o = {};
		return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
	}

	function r(s) {
		if (s.ep) return;
		s.ep = !0;
		const o = n(s);
		fetch(s.href, o)
	}
})();
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function br(e, t) {
	const n = new Set(e.split(","));
	return r => n.has(r)
}
const ue = {},
	Zt = [],
	ke = () => {},
	cu = () => !1,
	vr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	js = e => e.startsWith("onUpdate:"),
	ge = Object.assign,
	ks = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1)
	},
	uu = Object.prototype.hasOwnProperty,
	te = (e, t) => uu.call(e, t),
	U = Array.isArray,
	Xt = e => Vn(e) === "[object Map]",
	_r = e => Vn(e) === "[object Set]",
	Eo = e => Vn(e) === "[object Date]",
	Q = e => typeof e == "function",
	he = e => typeof e == "string",
	at = e => typeof e == "symbol",
	ae = e => e !== null && typeof e == "object",
	dl = e => (ae(e) || Q(e)) && Q(e.then) && Q(e.catch),
	pl = Object.prototype.toString,
	Vn = e => pl.call(e),
	fu = e => Vn(e).slice(8, -1),
	hl = e => Vn(e) === "[object Object]",
	Ds = e => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
	pn = br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
	xr = e => {
		const t = Object.create(null);
		return n => t[n] || (t[n] = e(n))
	},
	du = /-(\w)/g,
	tt = xr(e => e.replace(du, (t, n) => n ? n.toUpperCase() : "")),
	pu = /\B([A-Z])/g,
	on = xr(e => e.replace(pu, "-$1").toLowerCase()),
	Tr = xr(e => e.charAt(0).toUpperCase() + e.slice(1)),
	Dr = xr(e => e ? `on${Tr(e)}` : ""),
	At = (e, t) => !Object.is(e, t),
	er = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t)
	},
	ml = (e, t, n, r = !1) => {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			writable: r,
			value: n
		})
	},
	fs = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t
	},
	hu = e => {
		const t = he(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t
	};
let wo;
const gl = () => wo || (wo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Er(e) {
	if (U(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const r = e[n],
				s = he(r) ? bu(r) : Er(r);
			if (s)
				for (const o in s) t[o] = s[o]
		}
		return t
	} else if (he(e) || ae(e)) return e
}
const mu = /;(?![^(]*\))/g,
	gu = /:([^]+)/,
	yu = /\/\*[^]*?\*\//g;

function bu(e) {
	const t = {};
	return e.replace(yu, "").split(mu).forEach(n => {
		if (n) {
			const r = n.split(gu);
			r.length > 1 && (t[r[0].trim()] = r[1].trim())
		}
	}), t
}

function wr(e) {
	let t = "";
	if (he(e)) t = e;
	else if (U(e))
		for (let n = 0; n < e.length; n++) {
			const r = wr(e[n]);
			r && (t += r + " ")
		} else if (ae(e))
			for (const n in e) e[n] && (t += n + " ");
	return t.trim()
}

function ab(e) {
	if (!e) return null;
	let {
		class: t,
		style: n
	} = e;
	return t && !he(t) && (e.class = wr(t)), n && (e.style = Er(n)), e
}
const vu = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
	_u = br(vu),
	xu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	Tu = br(xu);

function yl(e) {
	return !!e || e === ""
}

function Eu(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Sr(e[r], t[r]);
	return n
}

function Sr(e, t) {
	if (e === t) return !0;
	let n = Eo(e),
		r = Eo(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = at(e), r = at(t), n || r) return e === t;
	if (n = U(e), r = U(t), n || r) return n && r ? Eu(e, t) : !1;
	if (n = ae(e), r = ae(t), n || r) {
		if (!n || !r) return !1;
		const s = Object.keys(e).length,
			o = Object.keys(t).length;
		if (s !== o) return !1;
		for (const i in e) {
			const l = e.hasOwnProperty(i),
				a = t.hasOwnProperty(i);
			if (l && !a || !l && a || !Sr(e[i], t[i])) return !1
		}
	}
	return String(e) === String(t)
}

function bl(e, t) {
	return e.findIndex(n => Sr(n, t))
}
const cb = e => he(e) ? e : e == null ? "" : U(e) || ae(e) && (e.toString === pl || !Q(e.toString)) ? JSON.stringify(e, vl, 2) : String(e),
	vl = (e, t) => t && t.__v_isRef ? vl(e, t.value) : Xt(t) ? {
		[`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[Wr(r, o) + " =>"] = s, n), {})
	} : _r(t) ? {
		[`Set(${t.size})`]: [...t.values()].map(n => Wr(n))
	} : at(t) ? Wr(t) : ae(t) && !U(t) && !hl(t) ? String(t) : t,
	Wr = (e, t = "") => {
		var n;
		return at(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
	};
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Le;
class wu {
	constructor(t = !1) {
		this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Le, !t && Le && (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1)
	}
	get active() {
		return this._active
	}
	run(t) {
		if (this._active) {
			const n = Le;
			try {
				return Le = this, t()
			} finally {
				Le = n
			}
		}
	}
	on() {
		Le = this
	}
	off() {
		Le = this.parent
	}
	stop(t) {
		if (this._active) {
			let n, r;
			for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
			for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
			if (this.scopes)
				for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
			if (!this.detached && this.parent && !t) {
				const s = this.parent.scopes.pop();
				s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
			}
			this.parent = void 0, this._active = !1
		}
	}
}

function Su(e, t = Le) {
	t && t.active && t.effects.push(e)
}

function _l() {
	return Le
}

function Au(e) {
	Le && Le.cleanups.push(e)
}
let Ut;
class Ws {
	constructor(t, n, r, s) {
		this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Su(this, s)
	}
	get dirty() {
		if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
			this._dirtyLevel = 1, Pt();
			for (let t = 0; t < this._depsLength; t++) {
				const n = this.deps[t];
				if (n.computed && (Cu(n.computed), this._dirtyLevel >= 4)) break
			}
			this._dirtyLevel === 1 && (this._dirtyLevel = 0), Mt()
		}
		return this._dirtyLevel >= 4
	}
	set dirty(t) {
		this._dirtyLevel = t ? 4 : 0
	}
	run() {
		if (this._dirtyLevel = 0, !this.active) return this.fn();
		let t = Et,
			n = Ut;
		try {
			return Et = !0, Ut = this, this._runnings++, So(this), this.fn()
		} finally {
			Ao(this), this._runnings--, Ut = n, Et = t
		}
	}
	stop() {
		this.active && (So(this), Ao(this), this.onStop && this.onStop(), this.active = !1)
	}
}

function Cu(e) {
	return e.value
}

function So(e) {
	e._trackId++, e._depsLength = 0
}

function Ao(e) {
	if (e.deps.length > e._depsLength) {
		for (let t = e._depsLength; t < e.deps.length; t++) xl(e.deps[t], e);
		e.deps.length = e._depsLength
	}
}

function xl(e, t) {
	const n = e.get(t);
	n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Et = !0,
	ds = 0;
const Tl = [];

function Pt() {
	Tl.push(Et), Et = !1
}

function Mt() {
	const e = Tl.pop();
	Et = e === void 0 ? !0 : e
}

function $s() {
	ds++
}

function Hs() {
	for (ds--; !ds && ps.length;) ps.shift()()
}

function El(e, t, n) {
	if (t.get(e) !== e._trackId) {
		t.set(e, e._trackId);
		const r = e.deps[e._depsLength];
		r !== t ? (r && xl(r, e), e.deps[e._depsLength++] = t) : e._depsLength++
	}
}
const ps = [];

function wl(e, t, n) {
	$s();
	for (const r of e.keys()) {
		let s;
		r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && ps.push(r.scheduler)))
	}
	Hs()
}
const Sl = (e, t) => {
		const n = new Map;
		return n.cleanup = e, n.computed = t, n
	},
	ar = new WeakMap,
	qt = Symbol(""),
	hs = Symbol("");

function Be(e, t, n) {
	if (Et && Ut) {
		let r = ar.get(e);
		r || ar.set(e, r = new Map);
		let s = r.get(n);
		s || r.set(n, s = Sl(() => r.delete(n))), El(Ut, s)
	}
}

function lt(e, t, n, r, s, o) {
	const i = ar.get(e);
	if (!i) return;
	let l = [];
	if (t === "clear") l = [...i.values()];
	else if (n === "length" && U(e)) {
		const a = Number(r);
		i.forEach((c, u) => {
			(u === "length" || !at(u) && u >= a) && l.push(c)
		})
	} else switch (n !== void 0 && l.push(i.get(n)), t) {
		case "add":
			U(e) ? Ds(n) && l.push(i.get("length")) : (l.push(i.get(qt)), Xt(e) && l.push(i.get(hs)));
			break;
		case "delete":
			U(e) || (l.push(i.get(qt)), Xt(e) && l.push(i.get(hs)));
			break;
		case "set":
			Xt(e) && l.push(i.get(qt));
			break
	}
	$s();
	for (const a of l) a && wl(a, 4);
	Hs()
}

function Ou(e, t) {
	const n = ar.get(e);
	return n && n.get(t)
}
const Ru = br("__proto__,__v_isRef,__isVue"),
	Al = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(at)),
	Co = Pu();

function Pu() {
	const e = {};
	return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
		e[t] = function(...n) {
			const r = ne(this);
			for (let o = 0, i = this.length; o < i; o++) Be(r, "get", o + "");
			const s = r[t](...n);
			return s === -1 || s === !1 ? r[t](...n.map(ne)) : s
		}
	}), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
		e[t] = function(...n) {
			Pt(), $s();
			const r = ne(this)[t].apply(this, n);
			return Hs(), Mt(), r
		}
	}), e
}

function Mu(e) {
	at(e) || (e = String(e));
	const t = ne(this);
	return Be(t, "has", e), t.hasOwnProperty(e)
}
class Cl {
	constructor(t = !1, n = !1) {
		this._isReadonly = t, this._isShallow = n
	}
	get(t, n, r) {
		const s = this._isReadonly,
			o = this._isShallow;
		if (n === "__v_isReactive") return !s;
		if (n === "__v_isReadonly") return s;
		if (n === "__v_isShallow") return o;
		if (n === "__v_raw") return r === (s ? o ? Uu : Ml : o ? Pl : Rl).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
		const i = U(t);
		if (!s) {
			if (i && te(Co, n)) return Reflect.get(Co, n, r);
			if (n === "hasOwnProperty") return Mu
		}
		const l = Reflect.get(t, n, r);
		return (at(n) ? Al.has(n) : Ru(n)) || (s || Be(t, "get", n), o) ? l : be(l) ? i && Ds(n) ? l : l.value : ae(l) ? s ? xe(l) : nt(l) : l
	}
}
class Ol extends Cl {
	constructor(t = !1) {
		super(!1, t)
	}
	set(t, n, r, s) {
		let o = t[n];
		if (!this._isShallow) {
			const a = wn(o);
			if (!cr(r) && !wn(r) && (o = ne(o), r = ne(r)), !U(t) && be(o) && !be(r)) return a ? !1 : (o.value = r, !0)
		}
		const i = U(t) && Ds(n) ? Number(n) < t.length : te(t, n),
			l = Reflect.set(t, n, r, s);
		return t === ne(s) && (i ? At(r, o) && lt(t, "set", n, r) : lt(t, "add", n, r)), l
	}
	deleteProperty(t, n) {
		const r = te(t, n);
		t[n];
		const s = Reflect.deleteProperty(t, n);
		return s && r && lt(t, "delete", n, void 0), s
	}
	has(t, n) {
		const r = Reflect.has(t, n);
		return (!at(n) || !Al.has(n)) && Be(t, "has", n), r
	}
	ownKeys(t) {
		return Be(t, "iterate", U(t) ? "length" : qt), Reflect.ownKeys(t)
	}
}
class Bu extends Cl {
	constructor(t = !1) {
		super(!0, t)
	}
	set(t, n) {
		return !0
	}
	deleteProperty(t, n) {
		return !0
	}
}
const Iu = new Ol,
	Lu = new Bu,
	Vu = new Ol(!0);
const Us = e => e,
	Ar = e => Reflect.getPrototypeOf(e);

function qn(e, t, n = !1, r = !1) {
	e = e.__v_raw;
	const s = ne(e),
		o = ne(t);
	n || (At(t, o) && Be(s, "get", t), Be(s, "get", o));
	const {
		has: i
	} = Ar(s), l = r ? Us : n ? Ks : Sn;
	if (i.call(s, t)) return l(e.get(t));
	if (i.call(s, o)) return l(e.get(o));
	e !== s && e.get(t)
}

function zn(e, t = !1) {
	const n = this.__v_raw,
		r = ne(n),
		s = ne(e);
	return t || (At(e, s) && Be(r, "has", e), Be(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function Kn(e, t = !1) {
	return e = e.__v_raw, !t && Be(ne(e), "iterate", qt), Reflect.get(e, "size", e)
}

function Oo(e) {
	e = ne(e);
	const t = ne(this);
	return Ar(t).has.call(t, e) || (t.add(e), lt(t, "add", e, e)), this
}

function Ro(e, t) {
	t = ne(t);
	const n = ne(this),
		{
			has: r,
			get: s
		} = Ar(n);
	let o = r.call(n, e);
	o || (e = ne(e), o = r.call(n, e));
	const i = s.call(n, e);
	return n.set(e, t), o ? At(t, i) && lt(n, "set", e, t) : lt(n, "add", e, t), this
}

function Po(e) {
	const t = ne(this),
		{
			has: n,
			get: r
		} = Ar(t);
	let s = n.call(t, e);
	s || (e = ne(e), s = n.call(t, e)), r && r.call(t, e);
	const o = t.delete(e);
	return s && lt(t, "delete", e, void 0), o
}

function Mo() {
	const e = ne(this),
		t = e.size !== 0,
		n = e.clear();
	return t && lt(e, "clear", void 0, void 0), n
}

function Gn(e, t) {
	return function(r, s) {
		const o = this,
			i = o.__v_raw,
			l = ne(i),
			a = t ? Us : e ? Ks : Sn;
		return !e && Be(l, "iterate", qt), i.forEach((c, u) => r.call(s, a(c), a(u), o))
	}
}

function Yn(e, t, n) {
	return function(...r) {
		const s = this.__v_raw,
			o = ne(s),
			i = Xt(o),
			l = e === "entries" || e === Symbol.iterator && i,
			a = e === "keys" && i,
			c = s[e](...r),
			u = n ? Us : t ? Ks : Sn;
		return !t && Be(o, "iterate", a ? hs : qt), {
			next() {
				const {
					value: f,
					done: p
				} = c.next();
				return p ? {
					value: f,
					done: p
				} : {
					value: l ? [u(f[0]), u(f[1])] : u(f),
					done: p
				}
			},
			[Symbol.iterator]() {
				return this
			}
		}
	}
}

function dt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this
	}
}

function Fu() {
	const e = {
			get(o) {
				return qn(this, o)
			},
			get size() {
				return Kn(this)
			},
			has: zn,
			add: Oo,
			set: Ro,
			delete: Po,
			clear: Mo,
			forEach: Gn(!1, !1)
		},
		t = {
			get(o) {
				return qn(this, o, !1, !0)
			},
			get size() {
				return Kn(this)
			},
			has: zn,
			add: Oo,
			set: Ro,
			delete: Po,
			clear: Mo,
			forEach: Gn(!1, !0)
		},
		n = {
			get(o) {
				return qn(this, o, !0)
			},
			get size() {
				return Kn(this, !0)
			},
			has(o) {
				return zn.call(this, o, !0)
			},
			add: dt("add"),
			set: dt("set"),
			delete: dt("delete"),
			clear: dt("clear"),
			forEach: Gn(!0, !1)
		},
		r = {
			get(o) {
				return qn(this, o, !0, !0)
			},
			get size() {
				return Kn(this, !0)
			},
			has(o) {
				return zn.call(this, o, !0)
			},
			add: dt("add"),
			set: dt("set"),
			delete: dt("delete"),
			clear: dt("clear"),
			forEach: Gn(!0, !0)
		};
	return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
		e[o] = Yn(o, !1, !1), n[o] = Yn(o, !0, !1), t[o] = Yn(o, !1, !0), r[o] = Yn(o, !0, !0)
	}), [e, n, t, r]
}
const [Nu, ju, ku, Du] = Fu();

function qs(e, t) {
	const n = t ? e ? Du : ku : e ? ju : Nu;
	return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(te(n, s) && s in r ? n : r, s, o)
}
const Wu = {
		get: qs(!1, !1)
	},
	$u = {
		get: qs(!1, !0)
	},
	Hu = {
		get: qs(!0, !1)
	};
const Rl = new WeakMap,
	Pl = new WeakMap,
	Ml = new WeakMap,
	Uu = new WeakMap;

function qu(e) {
	switch (e) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0
	}
}

function zu(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : qu(fu(e))
}

function nt(e) {
	return wn(e) ? e : zs(e, !1, Iu, Wu, Rl)
}

function Bl(e) {
	return zs(e, !1, Vu, $u, Pl)
}

function xe(e) {
	return zs(e, !0, Lu, Hu, Ml)
}

function zs(e, t, n, r, s) {
	if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	const o = s.get(e);
	if (o) return o;
	const i = zu(e);
	if (i === 0) return e;
	const l = new Proxy(e, i === 2 ? r : n);
	return s.set(e, l), l
}

function hn(e) {
	return wn(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function wn(e) {
	return !!(e && e.__v_isReadonly)
}

function cr(e) {
	return !!(e && e.__v_isShallow)
}

function Il(e) {
	return e ? !!e.__v_raw : !1
}

function ne(e) {
	const t = e && e.__v_raw;
	return t ? ne(t) : e
}

function Ku(e) {
	return Object.isExtensible(e) && ml(e, "__v_skip", !0), e
}
const Sn = e => ae(e) ? nt(e) : e,
	Ks = e => ae(e) ? xe(e) : e;
class Ll {
	constructor(t, n, r, s) {
		this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ws(() => t(this._value), () => mn(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
	}
	get value() {
		const t = ne(this);
		return (!t._cacheable || t.effect.dirty) && At(t._value, t._value = t.effect.run()) && mn(t, 4), Gs(t), t.effect._dirtyLevel >= 2 && mn(t, 2), t._value
	}
	set value(t) {
		this._setter(t)
	}
	get _dirty() {
		return this.effect.dirty
	}
	set _dirty(t) {
		this.effect.dirty = t
	}
}

function Gu(e, t, n = !1) {
	let r, s;
	const o = Q(e);
	return o ? (r = e, s = ke) : (r = e.get, s = e.set), new Ll(r, s, o || !s, n)
}

function Gs(e) {
	var t;
	Et && Ut && (e = ne(e), El(Ut, (t = e.dep) != null ? t : e.dep = Sl(() => e.dep = void 0, e instanceof Ll ? e : void 0)))
}

function mn(e, t = 4, n) {
	e = ne(e);
	const r = e.dep;
	r && wl(r, t)
}

function be(e) {
	return !!(e && e.__v_isRef === !0)
}

function F(e) {
	return Fl(e, !1)
}

function Vl(e) {
	return Fl(e, !0)
}

function Fl(e, t) {
	return be(e) ? e : new Yu(e, t)
}
class Yu {
	constructor(t, n) {
		this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ne(t), this._value = n ? t : Sn(t)
	}
	get value() {
		return Gs(this), this._value
	}
	set value(t) {
		const n = this.__v_isShallow || cr(t) || wn(t);
		t = n ? t : ne(t), At(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Sn(t), mn(this, 4))
	}
}

function Fe(e) {
	return be(e) ? e.value : e
}
const Qu = {
	get: (e, t, n) => Fe(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		const s = e[t];
		return be(s) && !be(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
	}
};

function Nl(e) {
	return hn(e) ? e : new Proxy(e, Qu)
}
class Ju {
	constructor(t) {
		this.dep = void 0, this.__v_isRef = !0;
		const {
			get: n,
			set: r
		} = t(() => Gs(this), () => mn(this));
		this._get = n, this._set = r
	}
	get value() {
		return this._get()
	}
	set value(t) {
		this._set(t)
	}
}

function Zu(e) {
	return new Ju(e)
}
class Xu {
	constructor(t, n, r) {
		this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
	}
	get value() {
		const t = this._object[this._key];
		return t === void 0 ? this._defaultValue : t
	}
	set value(t) {
		this._object[this._key] = t
	}
	get dep() {
		return Ou(ne(this._object), this._key)
	}
}
class ef {
	constructor(t) {
		this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
	}
	get value() {
		return this._getter()
	}
}

function tf(e, t, n) {
	return be(e) ? e : Q(e) ? new ef(e) : ae(e) && arguments.length > 1 ? nf(e, t, n) : F(e)
}

function nf(e, t, n) {
	const r = e[t];
	return be(r) ? r : new Xu(e, t, n)
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function wt(e, t, n, r) {
	try {
		return r ? e(...r) : e()
	} catch (s) {
		Cr(s, t, n)
	}
}

function $e(e, t, n, r) {
	if (Q(e)) {
		const s = wt(e, t, n, r);
		return s && dl(s) && s.catch(o => {
			Cr(o, t, n)
		}), s
	}
	if (U(e)) {
		const s = [];
		for (let o = 0; o < e.length; o++) s.push($e(e[o], t, n, r));
		return s
	}
}

function Cr(e, t, n, r = !0) {
	const s = t ? t.vnode : null;
	if (t) {
		let o = t.parent;
		const i = t.proxy,
			l = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; o;) {
			const c = o.ec;
			if (c) {
				for (let u = 0; u < c.length; u++)
					if (c[u](e, i, l) === !1) return
			}
			o = o.parent
		}
		const a = t.appContext.config.errorHandler;
		if (a) {
			Pt(), wt(a, null, 10, [e, i, l]), Mt();
			return
		}
	}
	rf(e, n, s, r)
}

function rf(e, t, n, r = !0) {
	console.error(e)
}
let An = !1,
	ms = !1;
const Se = [];
let et = 0;
const en = [];
let yt = null,
	kt = 0;
const jl = Promise.resolve();
let Ys = null;

function Or(e) {
	const t = Ys || jl;
	return e ? t.then(this ? e.bind(this) : e) : t
}

function sf(e) {
	let t = et + 1,
		n = Se.length;
	for (; t < n;) {
		const r = t + n >>> 1,
			s = Se[r],
			o = Cn(s);
		o < e || o === e && s.pre ? t = r + 1 : n = r
	}
	return t
}

function Qs(e) {
	(!Se.length || !Se.includes(e, An && e.allowRecurse ? et + 1 : et)) && (e.id == null ? Se.push(e) : Se.splice(sf(e.id), 0, e), kl())
}

function kl() {
	!An && !ms && (ms = !0, Ys = jl.then(Wl))
}

function of(e) {
	const t = Se.indexOf(e);
	t > et && Se.splice(t, 1)
}

function lf(e) {
	U(e) ? en.push(...e) : (!yt || !yt.includes(e, e.allowRecurse ? kt + 1 : kt)) && en.push(e), kl()
}

function Bo(e, t, n = An ? et + 1 : 0) {
	for (; n < Se.length; n++) {
		const r = Se[n];
		if (r && r.pre) {
			if (e && r.id !== e.uid) continue;
			Se.splice(n, 1), n--, r()
		}
	}
}

function Dl(e) {
	if (en.length) {
		const t = [...new Set(en)].sort((n, r) => Cn(n) - Cn(r));
		if (en.length = 0, yt) {
			yt.push(...t);
			return
		}
		for (yt = t, kt = 0; kt < yt.length; kt++) yt[kt]();
		yt = null, kt = 0
	}
}
const Cn = e => e.id == null ? 1 / 0 : e.id,
	af = (e, t) => {
		const n = Cn(e) - Cn(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1
		}
		return n
	};

function Wl(e) {
	ms = !1, An = !0, Se.sort(af);
	try {
		for (et = 0; et < Se.length; et++) {
			const t = Se[et];
			t && t.active !== !1 && wt(t, null, 14)
		}
	} finally {
		et = 0, Se.length = 0, Dl(), An = !1, Ys = null, (Se.length || en.length) && Wl()
	}
}

function cf(e, t, ...n) {
	if (e.isUnmounted) return;
	const r = e.vnode.props || ue;
	let s = n;
	const o = t.startsWith("update:"),
		i = o && t.slice(7);
	if (i && i in r) {
		const u = `${i==="modelValue"?"model":i}Modifiers`,
			{
				number: f,
				trim: p
			} = r[u] || ue;
		p && (s = n.map(m => he(m) ? m.trim() : m)), f && (s = n.map(fs))
	}
	let l, a = r[l = Dr(t)] || r[l = Dr(tt(t))];
	!a && o && (a = r[l = Dr(on(t))]), a && $e(a, e, 6, s);
	const c = r[l + "Once"];
	if (c) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[l]) return;
		e.emitted[l] = !0, $e(c, e, 6, s)
	}
}

function $l(e, t, n = !1) {
	const r = t.emitsCache,
		s = r.get(e);
	if (s !== void 0) return s;
	const o = e.emits;
	let i = {},
		l = !1;
	if (!Q(e)) {
		const a = c => {
			const u = $l(c, t, !0);
			u && (l = !0, ge(i, u))
		};
		!n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
	}
	return !o && !l ? (ae(e) && r.set(e, null), null) : (U(o) ? o.forEach(a => i[a] = null) : ge(i, o), ae(e) && r.set(e, i), i)
}

function Rr(e, t) {
	return !e || !vr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, on(t)) || te(e, t))
}
let Oe = null,
	Pr = null;

function ur(e) {
	const t = Oe;
	return Oe = e, Pr = e && e.type.__scopeId || null, t
}

function ub(e) {
	Pr = e
}

function fb() {
	Pr = null
}

function Fn(e, t = Oe, n) {
	if (!t || e._n) return e;
	const r = (...s) => {
		r._d && Uo(-1);
		const o = ur(t);
		let i;
		try {
			i = e(...s)
		} finally {
			ur(o), r._d && Uo(1)
		}
		return i
	};
	return r._n = !0, r._c = !0, r._d = !0, r
}

function $r(e) {
	const {
		type: t,
		vnode: n,
		proxy: r,
		withProxy: s,
		propsOptions: [o],
		slots: i,
		attrs: l,
		emit: a,
		render: c,
		renderCache: u,
		props: f,
		data: p,
		setupState: m,
		ctx: y,
		inheritAttrs: w
	} = e, A = ur(e);
	let T, b;
	try {
		if (n.shapeFlag & 4) {
			const R = s || r,
				V = R;
			T = Xe(c.call(V, R, u, f, m, p, y)), b = l
		} else {
			const R = t;
			T = Xe(R.length > 1 ? R(f, {
				attrs: l,
				slots: i,
				emit: a
			}) : R(f, null)), b = t.props ? l : uf(l)
		}
	} catch (R) {
		bn.length = 0, Cr(R, e, 1), T = Ve(De)
	}
	let _ = T;
	if (b && w !== !1) {
		const R = Object.keys(b),
			{
				shapeFlag: V
			} = _;
		R.length && V & 7 && (o && R.some(js) && (b = ff(b, o)), _ = Ot(_, b, !1, !0))
	}
	return n.dirs && (_ = Ot(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && (_.transition = n.transition), T = _, ur(A), T
}
const uf = e => {
		let t;
		for (const n in e)(n === "class" || n === "style" || vr(n)) && ((t || (t = {}))[n] = e[n]);
		return t
	},
	ff = (e, t) => {
		const n = {};
		for (const r in e)(!js(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
		return n
	};

function df(e, t, n) {
	const {
		props: r,
		children: s,
		component: o
	} = e, {
		props: i,
		children: l,
		patchFlag: a
	} = t, c = o.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && a >= 0) {
		if (a & 1024) return !0;
		if (a & 16) return r ? Io(r, i, c) : !!i;
		if (a & 8) {
			const u = t.dynamicProps;
			for (let f = 0; f < u.length; f++) {
				const p = u[f];
				if (i[p] !== r[p] && !Rr(c, p)) return !0
			}
		}
	} else return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Io(r, i, c) : !0 : !!i;
	return !1
}

function Io(e, t, n) {
	const r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let s = 0; s < r.length; s++) {
		const o = r[s];
		if (t[o] !== e[o] && !Rr(n, o)) return !0
	}
	return !1
}

function pf({
	vnode: e,
	parent: t
}, n) {
	for (; t;) {
		const r = t.subTree;
		if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)(e = t.vnode).el = n, t = t.parent;
		else break
	}
}
const Js = "components",
	hf = "directives";

function Hl(e, t) {
	return Zs(Js, e, !0, t) || e
}
const Ul = Symbol.for("v-ndc");

function Ct(e) {
	return he(e) ? Zs(Js, e, !1) || e : e || Ul
}

function db(e) {
	return Zs(hf, e)
}

function Zs(e, t, n = !0, r = !1) {
	const s = Oe || Te;
	if (s) {
		const o = s.type;
		if (e === Js) {
			const l = ud(o, !1);
			if (l && (l === t || l === tt(t) || l === Tr(tt(t)))) return o
		}
		const i = Lo(s[e] || o[e], t) || Lo(s.appContext[e], t);
		return !i && r ? o : i
	}
}

function Lo(e, t) {
	return e && (e[t] || e[tt(t)] || e[Tr(tt(t))])
}
const mf = e => e.__isSuspense;

function gf(e, t) {
	t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : lf(e)
}
const yf = Symbol.for("v-scx"),
	bf = () => qe(yf);

function vf(e, t) {
	return Xs(e, null, t)
}
const Qn = {};

function ee(e, t, n) {
	return Xs(e, t, n)
}

function Xs(e, t, {
	immediate: n,
	deep: r,
	flush: s,
	once: o,
	onTrack: i,
	onTrigger: l
} = ue) {
	if (t && o) {
		const M = t;
		t = (...D) => {
			M(...D), V()
		}
	}
	const a = Te,
		c = M => r === !0 ? M : $t(M, r === !1 ? 1 : void 0);
	let u, f = !1,
		p = !1;
	if (be(e) ? (u = () => e.value, f = cr(e)) : hn(e) ? (u = () => c(e), f = !0) : U(e) ? (p = !0, f = e.some(M => hn(M) || cr(M)), u = () => e.map(M => {
			if (be(M)) return M.value;
			if (hn(M)) return c(M);
			if (Q(M)) return wt(M, a, 2)
		})) : Q(e) ? t ? u = () => wt(e, a, 2) : u = () => (m && m(), $e(e, a, 3, [y])) : u = ke, t && r) {
		const M = u;
		u = () => $t(M())
	}
	let m, y = M => {
			m = _.onStop = () => {
				wt(M, a, 4), m = _.onStop = void 0
			}
		},
		w;
	if (Lr)
		if (y = ke, t ? n && $e(t, a, 3, [u(), p ? [] : void 0, y]) : u(), s === "sync") {
			const M = bf();
			w = M.__watcherHandles || (M.__watcherHandles = [])
		} else return ke;
	let A = p ? new Array(e.length).fill(Qn) : Qn;
	const T = () => {
		if (!(!_.active || !_.dirty))
			if (t) {
				const M = _.run();
				(r || f || (p ? M.some((D, W) => At(D, A[W])) : At(M, A))) && (m && m(), $e(t, a, 3, [M, A === Qn ? void 0 : p && A[0] === Qn ? [] : A, y]), A = M)
			} else _.run()
	};
	T.allowRecurse = !!t;
	let b;
	s === "sync" ? b = T : s === "post" ? b = () => Pe(T, a && a.suspense) : (T.pre = !0, a && (T.id = a.uid), b = () => Qs(T));
	const _ = new Ws(u, ke, b),
		R = _l(),
		V = () => {
			_.stop(), R && ks(R.effects, _)
		};
	return t ? n ? T() : A = _.run() : s === "post" ? Pe(_.run.bind(_), a && a.suspense) : _.run(), w && w.push(V), V
}

function _f(e, t, n) {
	const r = this.proxy,
		s = he(e) ? e.includes(".") ? ql(r, e) : () => r[e] : e.bind(r, r);
	let o;
	Q(t) ? o = t : (o = t.handler, n = t);
	const i = jn(this),
		l = Xs(s, o.bind(r), n);
	return i(), l
}

function ql(e, t) {
	const n = t.split(".");
	return () => {
		let r = e;
		for (let s = 0; s < n.length && r; s++) r = r[n[s]];
		return r
	}
}

function $t(e, t = 1 / 0, n) {
	if (t <= 0 || !ae(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
	if (n.add(e), t--, be(e)) $t(e.value, t, n);
	else if (U(e))
		for (let r = 0; r < e.length; r++) $t(e[r], t, n);
	else if (_r(e) || Xt(e)) e.forEach(r => {
		$t(r, t, n)
	});
	else if (hl(e))
		for (const r in e) $t(e[r], t, n);
	return e
}

function pb(e, t) {
	if (Oe === null) return e;
	const n = Vr(Oe) || Oe.proxy,
		r = e.dirs || (e.dirs = []);
	for (let s = 0; s < t.length; s++) {
		let [o, i, l, a = ue] = t[s];
		o && (Q(o) && (o = {
			mounted: o,
			updated: o
		}), o.deep && $t(i), r.push({
			dir: o,
			instance: n,
			value: i,
			oldValue: void 0,
			arg: l,
			modifiers: a
		}))
	}
	return e
}

function It(e, t, n, r) {
	const s = e.dirs,
		o = t && t.dirs;
	for (let i = 0; i < s.length; i++) {
		const l = s[i];
		o && (l.oldValue = o[i].value);
		let a = l.dir[r];
		a && (Pt(), $e(a, n, 8, [e.el, l, e, t]), Mt())
	}
}
const bt = Symbol("_leaveCb"),
	Jn = Symbol("_enterCb");

function xf() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map
	};
	return Ae(() => {
		e.isMounted = !0
	}), Jl(() => {
		e.isUnmounting = !0
	}), e
}
const je = [Function, Array],
	zl = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: je,
		onEnter: je,
		onAfterEnter: je,
		onEnterCancelled: je,
		onBeforeLeave: je,
		onLeave: je,
		onAfterLeave: je,
		onLeaveCancelled: je,
		onBeforeAppear: je,
		onAppear: je,
		onAfterAppear: je,
		onAppearCancelled: je
	},
	Tf = {
		name: "BaseTransition",
		props: zl,
		setup(e, {
			slots: t
		}) {
			const n = Nn(),
				r = xf();
			return () => {
				const s = t.default && Gl(t.default(), !0);
				if (!s || !s.length) return;
				let o = s[0];
				if (s.length > 1) {
					for (const p of s)
						if (p.type !== De) {
							o = p;
							break
						}
				}
				const i = ne(e),
					{
						mode: l
					} = i;
				if (r.isLeaving) return Hr(o);
				const a = Vo(o);
				if (!a) return Hr(o);
				const c = gs(a, i, r, n);
				ys(a, c);
				const u = n.subTree,
					f = u && Vo(u);
				if (f && f.type !== De && !Dt(a, f)) {
					const p = gs(f, i, r, n);
					if (ys(f, p), l === "out-in" && a.type !== De) return r.isLeaving = !0, p.afterLeave = () => {
						r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update())
					}, Hr(o);
					l === "in-out" && a.type !== De && (p.delayLeave = (m, y, w) => {
						const A = Kl(r, f);
						A[String(f.key)] = f, m[bt] = () => {
							y(), m[bt] = void 0, delete c.delayedLeave
						}, c.delayedLeave = w
					})
				}
				return o
			}
		}
	},
	Ef = Tf;

function Kl(e, t) {
	const {
		leavingVNodes: n
	} = e;
	let r = n.get(t.type);
	return r || (r = Object.create(null), n.set(t.type, r)), r
}

function gs(e, t, n, r) {
	const {
		appear: s,
		mode: o,
		persisted: i = !1,
		onBeforeEnter: l,
		onEnter: a,
		onAfterEnter: c,
		onEnterCancelled: u,
		onBeforeLeave: f,
		onLeave: p,
		onAfterLeave: m,
		onLeaveCancelled: y,
		onBeforeAppear: w,
		onAppear: A,
		onAfterAppear: T,
		onAppearCancelled: b
	} = t, _ = String(e.key), R = Kl(n, e), V = (W, N) => {
		W && $e(W, r, 9, N)
	}, M = (W, N) => {
		const z = N[1];
		V(W, N), U(W) ? W.every(Z => Z.length <= 1) && z() : W.length <= 1 && z()
	}, D = {
		mode: o,
		persisted: i,
		beforeEnter(W) {
			let N = l;
			if (!n.isMounted)
				if (s) N = w || l;
				else return;
			W[bt] && W[bt](!0);
			const z = R[_];
			z && Dt(e, z) && z.el[bt] && z.el[bt](), V(N, [W])
		},
		enter(W) {
			let N = a,
				z = c,
				Z = u;
			if (!n.isMounted)
				if (s) N = A || a, z = T || c, Z = b || u;
				else return;
			let B = !1;
			const K = W[Jn] = ce => {
				B || (B = !0, ce ? V(Z, [W]) : V(z, [W]), D.delayedLeave && D.delayedLeave(), W[Jn] = void 0)
			};
			N ? M(N, [W, K]) : K()
		},
		leave(W, N) {
			const z = String(e.key);
			if (W[Jn] && W[Jn](!0), n.isUnmounting) return N();
			V(f, [W]);
			let Z = !1;
			const B = W[bt] = K => {
				Z || (Z = !0, N(), K ? V(y, [W]) : V(m, [W]), W[bt] = void 0, R[z] === e && delete R[z])
			};
			R[z] = e, p ? M(p, [W, B]) : B()
		},
		clone(W) {
			return gs(W, t, n, r)
		}
	};
	return D
}

function Hr(e) {
	if (Mr(e)) return e = Ot(e), e.children = null, e
}

function Vo(e) {
	if (!Mr(e)) return e;
	const {
		shapeFlag: t,
		children: n
	} = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && Q(n.default)) return n.default()
	}
}

function ys(e, t) {
	e.shapeFlag & 6 && e.component ? ys(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Gl(e, t = !1, n) {
	let r = [],
		s = 0;
	for (let o = 0; o < e.length; o++) {
		let i = e[o];
		const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
		i.type === Ze ? (i.patchFlag & 128 && s++, r = r.concat(Gl(i.children, t, l))) : (t || i.type !== De) && r.push(l != null ? Ot(i, {
			key: l
		}) : i)
	}
	if (s > 1)
		for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
	return r
} /*! #__NO_SIDE_EFFECTS__ */
function ve(e, t) {
	return Q(e) ? ge({
		name: e.name
	}, t, {
		setup: e
	}) : e
}
const tr = e => !!e.type.__asyncLoader,
	Mr = e => e.type.__isKeepAlive;

function wf(e, t) {
	Yl(e, "a", t)
}

function Sf(e, t) {
	Yl(e, "da", t)
}

function Yl(e, t, n = Te) {
	const r = e.__wdc || (e.__wdc = () => {
		let s = n;
		for (; s;) {
			if (s.isDeactivated) return;
			s = s.parent
		}
		return e()
	});
	if (Br(t, r, n), n) {
		let s = n.parent;
		for (; s && s.parent;) Mr(s.parent.vnode) && Af(r, t, n, s), s = s.parent
	}
}

function Af(e, t, n, r) {
	const s = Br(t, e, r, !0);
	ut(() => {
		ks(r[t], s)
	}, n)
}

function Br(e, t, n = Te, r = !1) {
	if (n) {
		const s = n[e] || (n[e] = []),
			o = t.__weh || (t.__weh = (...i) => {
				if (n.isUnmounted) return;
				Pt();
				const l = jn(n),
					a = $e(t, n, e, i);
				return l(), Mt(), a
			});
		return r ? s.unshift(o) : s.push(o), o
	}
}
const ct = e => (t, n = Te) => (!Lr || e === "sp") && Br(e, (...r) => t(...r), n),
	Cf = ct("bm"),
	Ae = ct("m"),
	Of = ct("bu"),
	Ql = ct("u"),
	Jl = ct("bum"),
	ut = ct("um"),
	Rf = ct("sp"),
	Pf = ct("rtg"),
	Mf = ct("rtc");

function Bf(e, t = Te) {
	Br("ec", e, t)
}

function hb(e, t, n, r) {
	let s;
	const o = n;
	if (U(e) || he(e)) {
		s = new Array(e.length);
		for (let i = 0, l = e.length; i < l; i++) s[i] = t(e[i], i, void 0, o)
	} else if (typeof e == "number") {
		s = new Array(e);
		for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o)
	} else if (ae(e))
		if (e[Symbol.iterator]) s = Array.from(e, (i, l) => t(i, l, void 0, o));
		else {
			const i = Object.keys(e);
			s = new Array(i.length);
			for (let l = 0, a = i.length; l < a; l++) {
				const c = i[l];
				s[l] = t(e[c], c, l, o)
			}
		}
	else s = [];
	return s
}
const bs = e => e ? pa(e) ? Vr(e) || e.proxy : bs(e.parent) : null,
	gn = ge(Object.create(null), {
		$: e => e,
		$el: e => e.vnode.el,
		$data: e => e.data,
		$props: e => e.props,
		$attrs: e => e.attrs,
		$slots: e => e.slots,
		$refs: e => e.refs,
		$parent: e => bs(e.parent),
		$root: e => bs(e.root),
		$emit: e => e.emit,
		$options: e => eo(e),
		$forceUpdate: e => e.f || (e.f = () => {
			e.effect.dirty = !0, Qs(e.update)
		}),
		$nextTick: e => e.n || (e.n = Or.bind(e.proxy)),
		$watch: e => _f.bind(e)
	}),
	Ur = (e, t) => e !== ue && !e.__isScriptSetup && te(e, t),
	If = {
		get({
			_: e
		}, t) {
			if (t === "__v_skip") return !0;
			const {
				ctx: n,
				setupState: r,
				data: s,
				props: o,
				accessCache: i,
				type: l,
				appContext: a
			} = e;
			let c;
			if (t[0] !== "$") {
				const m = i[t];
				if (m !== void 0) switch (m) {
					case 1:
						return r[t];
					case 2:
						return s[t];
					case 4:
						return n[t];
					case 3:
						return o[t]
				} else {
					if (Ur(r, t)) return i[t] = 1, r[t];
					if (s !== ue && te(s, t)) return i[t] = 2, s[t];
					if ((c = e.propsOptions[0]) && te(c, t)) return i[t] = 3, o[t];
					if (n !== ue && te(n, t)) return i[t] = 4, n[t];
					vs && (i[t] = 0)
				}
			}
			const u = gn[t];
			let f, p;
			if (u) return t === "$attrs" && Be(e.attrs, "get", ""), u(e);
			if ((f = l.__cssModules) && (f = f[t])) return f;
			if (n !== ue && te(n, t)) return i[t] = 4, n[t];
			if (p = a.config.globalProperties, te(p, t)) return p[t]
		},
		set({
			_: e
		}, t, n) {
			const {
				data: r,
				setupState: s,
				ctx: o
			} = e;
			return Ur(s, t) ? (s[t] = n, !0) : r !== ue && te(r, t) ? (r[t] = n, !0) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
		},
		has({
			_: {
				data: e,
				setupState: t,
				accessCache: n,
				ctx: r,
				appContext: s,
				propsOptions: o
			}
		}, i) {
			let l;
			return !!n[i] || e !== ue && te(e, i) || Ur(t, i) || (l = o[0]) && te(l, i) || te(r, i) || te(gn, i) || te(s.config.globalProperties, i)
		},
		defineProperty(e, t, n) {
			return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
		}
	};

function Lf() {
	return Vf().slots
}

function Vf() {
	const e = Nn();
	return e.setupContext || (e.setupContext = ma(e))
}

function Fo(e) {
	return U(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let vs = !0;

function Ff(e) {
	const t = eo(e),
		n = e.proxy,
		r = e.ctx;
	vs = !1, t.beforeCreate && No(t.beforeCreate, e, "bc");
	const {
		data: s,
		computed: o,
		methods: i,
		watch: l,
		provide: a,
		inject: c,
		created: u,
		beforeMount: f,
		mounted: p,
		beforeUpdate: m,
		updated: y,
		activated: w,
		deactivated: A,
		beforeDestroy: T,
		beforeUnmount: b,
		destroyed: _,
		unmounted: R,
		render: V,
		renderTracked: M,
		renderTriggered: D,
		errorCaptured: W,
		serverPrefetch: N,
		expose: z,
		inheritAttrs: Z,
		components: B,
		directives: K,
		filters: ce
	} = t;
	if (c && Nf(c, r, null), i)
		for (const re in i) {
			const se = i[re];
			Q(se) && (r[re] = se.bind(n))
		}
	if (s) {
		const re = s.call(n, n);
		ae(re) && (e.data = nt(re))
	}
	if (vs = !0, o)
		for (const re in o) {
			const se = o[re],
				ot = Q(se) ? se.bind(n, n) : Q(se.get) ? se.get.bind(n, n) : ke,
				ft = !Q(se) && Q(se.set) ? se.set.bind(n) : ke,
				Ge = G({
					get: ot,
					set: ft
				});
			Object.defineProperty(r, re, {
				enumerable: !0,
				configurable: !0,
				get: () => Ge.value,
				set: Re => Ge.value = Re
			})
		}
	if (l)
		for (const re in l) Zl(l[re], r, n, re);
	if (a) {
		const re = Q(a) ? a.call(n) : a;
		Reflect.ownKeys(re).forEach(se => {
			nr(se, re[se])
		})
	}
	u && No(u, e, "c");

	function fe(re, se) {
		U(se) ? se.forEach(ot => re(ot.bind(n))) : se && re(se.bind(n))
	}
	if (fe(Cf, f), fe(Ae, p), fe(Of, m), fe(Ql, y), fe(wf, w), fe(Sf, A), fe(Bf, W), fe(Mf, M), fe(Pf, D), fe(Jl, b), fe(ut, R), fe(Rf, N), U(z))
		if (z.length) {
			const re = e.exposed || (e.exposed = {});
			z.forEach(se => {
				Object.defineProperty(re, se, {
					get: () => n[se],
					set: ot => n[se] = ot
				})
			})
		} else e.exposed || (e.exposed = {});
	V && e.render === ke && (e.render = V), Z != null && (e.inheritAttrs = Z), B && (e.components = B), K && (e.directives = K)
}

function Nf(e, t, n = ke) {
	U(e) && (e = _s(e));
	for (const r in e) {
		const s = e[r];
		let o;
		ae(s) ? "default" in s ? o = qe(s.from || r, s.default, !0) : o = qe(s.from || r) : o = qe(s), be(o) ? Object.defineProperty(t, r, {
			enumerable: !0,
			configurable: !0,
			get: () => o.value,
			set: i => o.value = i
		}) : t[r] = o
	}
}

function No(e, t, n) {
	$e(U(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Zl(e, t, n, r) {
	const s = r.includes(".") ? ql(n, r) : () => n[r];
	if (he(e)) {
		const o = t[e];
		Q(o) && ee(s, o)
	} else if (Q(e)) ee(s, e.bind(n));
	else if (ae(e))
		if (U(e)) e.forEach(o => Zl(o, t, n, r));
		else {
			const o = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
			Q(o) && ee(s, o, e)
		}
}

function eo(e) {
	const t = e.type,
		{
			mixins: n,
			extends: r
		} = t,
		{
			mixins: s,
			optionsCache: o,
			config: {
				optionMergeStrategies: i
			}
		} = e.appContext,
		l = o.get(t);
	let a;
	return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(c => fr(a, c, i, !0)), fr(a, t, i)), ae(t) && o.set(t, a), a
}

function fr(e, t, n, r = !1) {
	const {
		mixins: s,
		extends: o
	} = t;
	o && fr(e, o, n, !0), s && s.forEach(i => fr(e, i, n, !0));
	for (const i in t)
		if (!(r && i === "expose")) {
			const l = jf[i] || n && n[i];
			e[i] = l ? l(e[i], t[i]) : t[i]
		} return e
}
const jf = {
	data: jo,
	props: ko,
	emits: ko,
	methods: dn,
	computed: dn,
	beforeCreate: Ce,
	created: Ce,
	beforeMount: Ce,
	mounted: Ce,
	beforeUpdate: Ce,
	updated: Ce,
	beforeDestroy: Ce,
	beforeUnmount: Ce,
	destroyed: Ce,
	unmounted: Ce,
	activated: Ce,
	deactivated: Ce,
	errorCaptured: Ce,
	serverPrefetch: Ce,
	components: dn,
	directives: dn,
	watch: Df,
	provide: jo,
	inject: kf
};

function jo(e, t) {
	return t ? e ? function() {
		return ge(Q(e) ? e.call(this, this) : e, Q(t) ? t.call(this, this) : t)
	} : t : e
}

function kf(e, t) {
	return dn(_s(e), _s(t))
}

function _s(e) {
	if (U(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t
	}
	return e
}

function Ce(e, t) {
	return e ? [...new Set([].concat(e, t))] : t
}

function dn(e, t) {
	return e ? ge(Object.create(null), e, t) : t
}

function ko(e, t) {
	return e ? U(e) && U(t) ? [...new Set([...e, ...t])] : ge(Object.create(null), Fo(e), Fo(t ?? {})) : t
}

function Df(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = ge(Object.create(null), e);
	for (const r in t) n[r] = Ce(e[r], t[r]);
	return n
}

function Xl() {
	return {
		app: null,
		config: {
			isNativeTag: cu,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap,
		propsCache: new WeakMap,
		emitsCache: new WeakMap
	}
}
let Wf = 0;

function $f(e, t) {
	return function(r, s = null) {
		Q(r) || (r = ge({}, r)), s != null && !ae(s) && (s = null);
		const o = Xl(),
			i = new WeakSet;
		let l = !1;
		const a = o.app = {
			_uid: Wf++,
			_component: r,
			_props: s,
			_container: null,
			_context: o,
			_instance: null,
			version: dd,
			get config() {
				return o.config
			},
			set config(c) {},
			use(c, ...u) {
				return i.has(c) || (c && Q(c.install) ? (i.add(c), c.install(a, ...u)) : Q(c) && (i.add(c), c(a, ...u))), a
			},
			mixin(c) {
				return o.mixins.includes(c) || o.mixins.push(c), a
			},
			component(c, u) {
				return u ? (o.components[c] = u, a) : o.components[c]
			},
			directive(c, u) {
				return u ? (o.directives[c] = u, a) : o.directives[c]
			},
			mount(c, u, f) {
				if (!l) {
					const p = Ve(r, s);
					return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && t ? t(p, c) : e(p, c, f), l = !0, a._container = c, c.__vue_app__ = a, Vr(p.component) || p.component.proxy
				}
			},
			unmount() {
				l && (e(null, a._container), delete a._container.__vue_app__)
			},
			provide(c, u) {
				return o.provides[c] = u, a
			},
			runWithContext(c) {
				const u = yn;
				yn = a;
				try {
					return c()
				} finally {
					yn = u
				}
			}
		};
		return a
	}
}
let yn = null;

function nr(e, t) {
	if (Te) {
		let n = Te.provides;
		const r = Te.parent && Te.parent.provides;
		r === n && (n = Te.provides = Object.create(r)), n[e] = t
	}
}

function qe(e, t, n = !1) {
	const r = Te || Oe;
	if (r || yn) {
		const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : yn._context.provides;
		if (s && e in s) return s[e];
		if (arguments.length > 1) return n && Q(t) ? t.call(r && r.proxy) : t
	}
}
const ea = {},
	ta = () => Object.create(ea),
	na = e => Object.getPrototypeOf(e) === ea;

function Hf(e, t, n, r = !1) {
	const s = {},
		o = ta();
	e.propsDefaults = Object.create(null), ra(e, t, s, o);
	for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
	n ? e.props = r ? s : Bl(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function Uf(e, t, n, r) {
	const {
		props: s,
		attrs: o,
		vnode: {
			patchFlag: i
		}
	} = e, l = ne(s), [a] = e.propsOptions;
	let c = !1;
	if ((r || i > 0) && !(i & 16)) {
		if (i & 8) {
			const u = e.vnode.dynamicProps;
			for (let f = 0; f < u.length; f++) {
				let p = u[f];
				if (Rr(e.emitsOptions, p)) continue;
				const m = t[p];
				if (a)
					if (te(o, p)) m !== o[p] && (o[p] = m, c = !0);
					else {
						const y = tt(p);
						s[y] = xs(a, l, y, m, e, !1)
					}
				else m !== o[p] && (o[p] = m, c = !0)
			}
		}
	} else {
		ra(e, t, s, o) && (c = !0);
		let u;
		for (const f in l)(!t || !te(t, f) && ((u = on(f)) === f || !te(t, u))) && (a ? n && (n[f] !== void 0 || n[u] !== void 0) && (s[f] = xs(a, l, f, void 0, e, !0)) : delete s[f]);
		if (o !== l)
			for (const f in o)(!t || !te(t, f)) && (delete o[f], c = !0)
	}
	c && lt(e.attrs, "set", "")
}

function ra(e, t, n, r) {
	const [s, o] = e.propsOptions;
	let i = !1,
		l;
	if (t)
		for (let a in t) {
			if (pn(a)) continue;
			const c = t[a];
			let u;
			s && te(s, u = tt(a)) ? !o || !o.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : Rr(e.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, i = !0)
		}
	if (o) {
		const a = ne(n),
			c = l || ue;
		for (let u = 0; u < o.length; u++) {
			const f = o[u];
			n[f] = xs(s, a, f, c[f], e, !te(c, f))
		}
	}
	return i
}

function xs(e, t, n, r, s, o) {
	const i = e[n];
	if (i != null) {
		const l = te(i, "default");
		if (l && r === void 0) {
			const a = i.default;
			if (i.type !== Function && !i.skipFactory && Q(a)) {
				const {
					propsDefaults: c
				} = s;
				if (n in c) r = c[n];
				else {
					const u = jn(s);
					r = c[n] = a.call(null, t), u()
				}
			} else r = a
		}
		i[0] && (o && !l ? r = !1 : i[1] && (r === "" || r === on(n)) && (r = !0))
	}
	return r
}

function sa(e, t, n = !1) {
	const r = t.propsCache,
		s = r.get(e);
	if (s) return s;
	const o = e.props,
		i = {},
		l = [];
	let a = !1;
	if (!Q(e)) {
		const u = f => {
			a = !0;
			const [p, m] = sa(f, t, !0);
			ge(i, p), m && l.push(...m)
		};
		!n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
	}
	if (!o && !a) return ae(e) && r.set(e, Zt), Zt;
	if (U(o))
		for (let u = 0; u < o.length; u++) {
			const f = tt(o[u]);
			Do(f) && (i[f] = ue)
		} else if (o)
			for (const u in o) {
				const f = tt(u);
				if (Do(f)) {
					const p = o[u],
						m = i[f] = U(p) || Q(p) ? {
							type: p
						} : ge({}, p);
					if (m) {
						const y = Ho(Boolean, m.type),
							w = Ho(String, m.type);
						m[0] = y > -1, m[1] = w < 0 || y < w, (y > -1 || te(m, "default")) && l.push(f)
					}
				}
			}
	const c = [i, l];
	return ae(e) && r.set(e, c), c
}

function Do(e) {
	return e[0] !== "$" && !pn(e)
}

function Wo(e) {
	return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function $o(e, t) {
	return Wo(e) === Wo(t)
}

function Ho(e, t) {
	return U(t) ? t.findIndex(n => $o(n, e)) : Q(t) && $o(t, e) ? 0 : -1
}
const oa = e => e[0] === "_" || e === "$stable",
	to = e => U(e) ? e.map(Xe) : [Xe(e)],
	qf = (e, t, n) => {
		if (t._n) return t;
		const r = Fn((...s) => to(t(...s)), n);
		return r._c = !1, r
	},
	ia = (e, t, n) => {
		const r = e._ctx;
		for (const s in e) {
			if (oa(s)) continue;
			const o = e[s];
			if (Q(o)) t[s] = qf(s, o, r);
			else if (o != null) {
				const i = to(o);
				t[s] = () => i
			}
		}
	},
	la = (e, t) => {
		const n = to(t);
		e.slots.default = () => n
	},
	zf = (e, t) => {
		const n = e.slots = ta();
		if (e.vnode.shapeFlag & 32) {
			const r = t._;
			r ? (ge(n, t), ml(n, "_", r, !0)) : ia(t, n)
		} else t && la(e, t)
	},
	Kf = (e, t, n) => {
		const {
			vnode: r,
			slots: s
		} = e;
		let o = !0,
			i = ue;
		if (r.shapeFlag & 32) {
			const l = t._;
			l ? n && l === 1 ? o = !1 : (ge(s, t), !n && l === 1 && delete s._) : (o = !t.$stable, ia(t, s)), i = t
		} else t && (la(e, t), i = {
			default: 1
		});
		if (o)
			for (const l in s) !oa(l) && i[l] == null && delete s[l]
	};

function Ts(e, t, n, r, s = !1) {
	if (U(e)) {
		e.forEach((p, m) => Ts(p, t && (U(t) ? t[m] : t), n, r, s));
		return
	}
	if (tr(r) && !s) return;
	const o = r.shapeFlag & 4 ? Vr(r.component) || r.component.proxy : r.el,
		i = s ? null : o,
		{
			i: l,
			r: a
		} = e,
		c = t && t.r,
		u = l.refs === ue ? l.refs = {} : l.refs,
		f = l.setupState;
	if (c != null && c !== a && (he(c) ? (u[c] = null, te(f, c) && (f[c] = null)) : be(c) && (c.value = null)), Q(a)) wt(a, l, 12, [i, u]);
	else {
		const p = he(a),
			m = be(a);
		if (p || m) {
			const y = () => {
				if (e.f) {
					const w = p ? te(f, a) ? f[a] : u[a] : a.value;
					s ? U(w) && ks(w, o) : U(w) ? w.includes(o) || w.push(o) : p ? (u[a] = [o], te(f, a) && (f[a] = u[a])) : (a.value = [o], e.k && (u[e.k] = a.value))
				} else p ? (u[a] = i, te(f, a) && (f[a] = i)) : m && (a.value = i, e.k && (u[e.k] = i))
			};
			i ? (y.id = -1, Pe(y, n)) : y()
		}
	}
}
const Pe = gf;

function Gf(e) {
	return Yf(e)
}

function Yf(e, t) {
	const n = gl();
	n.__VUE__ = !0;
	const {
		insert: r,
		remove: s,
		patchProp: o,
		createElement: i,
		createText: l,
		createComment: a,
		setText: c,
		setElementText: u,
		parentNode: f,
		nextSibling: p,
		setScopeId: m = ke,
		insertStaticContent: y
	} = e, w = (d, h, g, E = null, v = null, O = null, L = void 0, C = null, P = !!h.dynamicChildren) => {
		if (d === h) return;
		d && !Dt(d, h) && (E = x(d), Re(d, v, O, !0), d = null), h.patchFlag === -2 && (P = !1, h.dynamicChildren = null);
		const {
			type: S,
			ref: k,
			shapeFlag: q
		} = h;
		switch (S) {
			case Ir:
				A(d, h, g, E);
				break;
			case De:
				T(d, h, g, E);
				break;
			case zr:
				d == null && b(h, g, E, L);
				break;
			case Ze:
				B(d, h, g, E, v, O, L, C, P);
				break;
			default:
				q & 1 ? V(d, h, g, E, v, O, L, C, P) : q & 6 ? K(d, h, g, E, v, O, L, C, P) : (q & 64 || q & 128) && S.process(d, h, g, E, v, O, L, C, P, $)
		}
		k != null && v && Ts(k, d && d.ref, O, h || d, !h)
	}, A = (d, h, g, E) => {
		if (d == null) r(h.el = l(h.children), g, E);
		else {
			const v = h.el = d.el;
			h.children !== d.children && c(v, h.children)
		}
	}, T = (d, h, g, E) => {
		d == null ? r(h.el = a(h.children || ""), g, E) : h.el = d.el
	}, b = (d, h, g, E) => {
		[d.el, d.anchor] = y(d.children, h, g, E, d.el, d.anchor)
	}, _ = ({
		el: d,
		anchor: h
	}, g, E) => {
		let v;
		for (; d && d !== h;) v = p(d), r(d, g, E), d = v;
		r(h, g, E)
	}, R = ({
		el: d,
		anchor: h
	}) => {
		let g;
		for (; d && d !== h;) g = p(d), s(d), d = g;
		s(h)
	}, V = (d, h, g, E, v, O, L, C, P) => {
		h.type === "svg" ? L = "svg" : h.type === "math" && (L = "mathml"), d == null ? M(h, g, E, v, O, L, C, P) : N(d, h, v, O, L, C, P)
	}, M = (d, h, g, E, v, O, L, C) => {
		let P, S;
		const {
			props: k,
			shapeFlag: q,
			transition: H,
			dirs: Y
		} = d;
		if (P = d.el = i(d.type, O, k && k.is, k), q & 8 ? u(P, d.children) : q & 16 && W(d.children, P, null, E, v, qr(d, O), L, C), Y && It(d, null, E, "created"), D(P, d, d.scopeId, L, E), k) {
			for (const le in k) le !== "value" && !pn(le) && o(P, le, null, k[le], O, d.children, E, v, Ee);
			"value" in k && o(P, "value", null, k.value, O), (S = k.onVnodeBeforeMount) && Qe(S, E, d)
		}
		Y && It(d, null, E, "beforeMount");
		const X = Qf(v, H);
		X && H.beforeEnter(P), r(P, h, g), ((S = k && k.onVnodeMounted) || X || Y) && Pe(() => {
			S && Qe(S, E, d), X && H.enter(P), Y && It(d, null, E, "mounted")
		}, v)
	}, D = (d, h, g, E, v) => {
		if (g && m(d, g), E)
			for (let O = 0; O < E.length; O++) m(d, E[O]);
		if (v) {
			let O = v.subTree;
			if (h === O) {
				const L = v.vnode;
				D(d, L, L.scopeId, L.slotScopeIds, v.parent)
			}
		}
	}, W = (d, h, g, E, v, O, L, C, P = 0) => {
		for (let S = P; S < d.length; S++) {
			const k = d[S] = C ? vt(d[S]) : Xe(d[S]);
			w(null, k, h, g, E, v, O, L, C)
		}
	}, N = (d, h, g, E, v, O, L) => {
		const C = h.el = d.el;
		let {
			patchFlag: P,
			dynamicChildren: S,
			dirs: k
		} = h;
		P |= d.patchFlag & 16;
		const q = d.props || ue,
			H = h.props || ue;
		let Y;
		if (g && Lt(g, !1), (Y = H.onVnodeBeforeUpdate) && Qe(Y, g, h, d), k && It(h, d, g, "beforeUpdate"), g && Lt(g, !0), S ? z(d.dynamicChildren, S, C, g, E, qr(h, v), O) : L || se(d, h, C, null, g, E, qr(h, v), O, !1), P > 0) {
			if (P & 16) Z(C, h, q, H, g, E, v);
			else if (P & 2 && q.class !== H.class && o(C, "class", null, H.class, v), P & 4 && o(C, "style", q.style, H.style, v), P & 8) {
				const X = h.dynamicProps;
				for (let le = 0; le < X.length; le++) {
					const de = X[le],
						ye = q[de],
						He = H[de];
					(He !== ye || de === "value") && o(C, de, ye, He, v, d.children, g, E, Ee)
				}
			}
			P & 1 && d.children !== h.children && u(C, h.children)
		} else !L && S == null && Z(C, h, q, H, g, E, v);
		((Y = H.onVnodeUpdated) || k) && Pe(() => {
			Y && Qe(Y, g, h, d), k && It(h, d, g, "updated")
		}, E)
	}, z = (d, h, g, E, v, O, L) => {
		for (let C = 0; C < h.length; C++) {
			const P = d[C],
				S = h[C],
				k = P.el && (P.type === Ze || !Dt(P, S) || P.shapeFlag & 70) ? f(P.el) : g;
			w(P, S, k, null, E, v, O, L, !0)
		}
	}, Z = (d, h, g, E, v, O, L) => {
		if (g !== E) {
			if (g !== ue)
				for (const C in g) !pn(C) && !(C in E) && o(d, C, g[C], null, L, h.children, v, O, Ee);
			for (const C in E) {
				if (pn(C)) continue;
				const P = E[C],
					S = g[C];
				P !== S && C !== "value" && o(d, C, S, P, L, h.children, v, O, Ee)
			}
			"value" in E && o(d, "value", g.value, E.value, L)
		}
	}, B = (d, h, g, E, v, O, L, C, P) => {
		const S = h.el = d ? d.el : l(""),
			k = h.anchor = d ? d.anchor : l("");
		let {
			patchFlag: q,
			dynamicChildren: H,
			slotScopeIds: Y
		} = h;
		Y && (C = C ? C.concat(Y) : Y), d == null ? (r(S, g, E), r(k, g, E), W(h.children || [], g, k, v, O, L, C, P)) : q > 0 && q & 64 && H && d.dynamicChildren ? (z(d.dynamicChildren, H, g, v, O, L, C), (h.key != null || v && h === v.subTree) && aa(d, h, !0)) : se(d, h, g, k, v, O, L, C, P)
	}, K = (d, h, g, E, v, O, L, C, P) => {
		h.slotScopeIds = C, d == null ? h.shapeFlag & 512 ? v.ctx.activate(h, g, E, L, P) : ce(h, g, E, v, O, L, P) : me(d, h, P)
	}, ce = (d, h, g, E, v, O, L) => {
		const C = d.component = id(d, E, v);
		if (Mr(d) && (C.ctx.renderer = $), ld(C), C.asyncDep) {
			if (v && v.registerDep(C, fe), !d.el) {
				const P = C.subTree = Ve(De);
				T(null, P, h, g)
			}
		} else fe(C, d, h, g, v, O, L)
	}, me = (d, h, g) => {
		const E = h.component = d.component;
		if (df(d, h, g))
			if (E.asyncDep && !E.asyncResolved) {
				re(E, h, g);
				return
			} else E.next = h, of(E.update), E.effect.dirty = !0, E.update();
		else h.el = d.el, E.vnode = h
	}, fe = (d, h, g, E, v, O, L) => {
		const C = () => {
				if (d.isMounted) {
					let {
						next: k,
						bu: q,
						u: H,
						parent: Y,
						vnode: X
					} = d;
					{
						const Yt = ca(d);
						if (Yt) {
							k && (k.el = X.el, re(d, k, L)), Yt.asyncDep.then(() => {
								d.isUnmounted || C()
							});
							return
						}
					}
					let le = k,
						de;
					Lt(d, !1), k ? (k.el = X.el, re(d, k, L)) : k = X, q && er(q), (de = k.props && k.props.onVnodeBeforeUpdate) && Qe(de, Y, k, X), Lt(d, !0);
					const ye = $r(d),
						He = d.subTree;
					d.subTree = ye, w(He, ye, f(He.el), x(He), d, v, O), k.el = ye.el, le === null && pf(d, ye.el), H && Pe(H, v), (de = k.props && k.props.onVnodeUpdated) && Pe(() => Qe(de, Y, k, X), v)
				} else {
					let k;
					const {
						el: q,
						props: H
					} = h, {
						bm: Y,
						m: X,
						parent: le
					} = d, de = tr(h);
					if (Lt(d, !1), Y && er(Y), !de && (k = H && H.onVnodeBeforeMount) && Qe(k, le, h), Lt(d, !0), q && pe) {
						const ye = () => {
							d.subTree = $r(d), pe(q, d.subTree, d, v, null)
						};
						de ? h.type.__asyncLoader().then(() => !d.isUnmounted && ye()) : ye()
					} else {
						const ye = d.subTree = $r(d);
						w(null, ye, g, E, d, v, O), h.el = ye.el
					}
					if (X && Pe(X, v), !de && (k = H && H.onVnodeMounted)) {
						const ye = h;
						Pe(() => Qe(k, le, ye), v)
					}(h.shapeFlag & 256 || le && tr(le.vnode) && le.vnode.shapeFlag & 256) && d.a && Pe(d.a, v), d.isMounted = !0, h = g = E = null
				}
			},
			P = d.effect = new Ws(C, ke, () => Qs(S), d.scope),
			S = d.update = () => {
				P.dirty && P.run()
			};
		S.id = d.uid, Lt(d, !0), S()
	}, re = (d, h, g) => {
		h.component = d;
		const E = d.vnode.props;
		d.vnode = h, d.next = null, Uf(d, h.props, E, g), Kf(d, h.children, g), Pt(), Bo(d), Mt()
	}, se = (d, h, g, E, v, O, L, C, P = !1) => {
		const S = d && d.children,
			k = d ? d.shapeFlag : 0,
			q = h.children,
			{
				patchFlag: H,
				shapeFlag: Y
			} = h;
		if (H > 0) {
			if (H & 128) {
				ft(S, q, g, E, v, O, L, C, P);
				return
			} else if (H & 256) {
				ot(S, q, g, E, v, O, L, C, P);
				return
			}
		}
		Y & 8 ? (k & 16 && Ee(S, v, O), q !== S && u(g, q)) : k & 16 ? Y & 16 ? ft(S, q, g, E, v, O, L, C, P) : Ee(S, v, O, !0) : (k & 8 && u(g, ""), Y & 16 && W(q, g, E, v, O, L, C, P))
	}, ot = (d, h, g, E, v, O, L, C, P) => {
		d = d || Zt, h = h || Zt;
		const S = d.length,
			k = h.length,
			q = Math.min(S, k);
		let H;
		for (H = 0; H < q; H++) {
			const Y = h[H] = P ? vt(h[H]) : Xe(h[H]);
			w(d[H], Y, g, null, v, O, L, C, P)
		}
		S > k ? Ee(d, v, O, !0, !1, q) : W(h, g, E, v, O, L, C, P, q)
	}, ft = (d, h, g, E, v, O, L, C, P) => {
		let S = 0;
		const k = h.length;
		let q = d.length - 1,
			H = k - 1;
		for (; S <= q && S <= H;) {
			const Y = d[S],
				X = h[S] = P ? vt(h[S]) : Xe(h[S]);
			if (Dt(Y, X)) w(Y, X, g, null, v, O, L, C, P);
			else break;
			S++
		}
		for (; S <= q && S <= H;) {
			const Y = d[q],
				X = h[H] = P ? vt(h[H]) : Xe(h[H]);
			if (Dt(Y, X)) w(Y, X, g, null, v, O, L, C, P);
			else break;
			q--, H--
		}
		if (S > q) {
			if (S <= H) {
				const Y = H + 1,
					X = Y < k ? h[Y].el : E;
				for (; S <= H;) w(null, h[S] = P ? vt(h[S]) : Xe(h[S]), g, X, v, O, L, C, P), S++
			}
		} else if (S > H)
			for (; S <= q;) Re(d[S], v, O, !0), S++;
		else {
			const Y = S,
				X = S,
				le = new Map;
			for (S = X; S <= H; S++) {
				const Ie = h[S] = P ? vt(h[S]) : Xe(h[S]);
				Ie.key != null && le.set(Ie.key, S)
			}
			let de, ye = 0;
			const He = H - X + 1;
			let Yt = !1,
				_o = 0;
			const ln = new Array(He);
			for (S = 0; S < He; S++) ln[S] = 0;
			for (S = Y; S <= q; S++) {
				const Ie = d[S];
				if (ye >= He) {
					Re(Ie, v, O, !0);
					continue
				}
				let Ye;
				if (Ie.key != null) Ye = le.get(Ie.key);
				else
					for (de = X; de <= H; de++)
						if (ln[de - X] === 0 && Dt(Ie, h[de])) {
							Ye = de;
							break
						} Ye === void 0 ? Re(Ie, v, O, !0) : (ln[Ye - X] = S + 1, Ye >= _o ? _o = Ye : Yt = !0, w(Ie, h[Ye], g, null, v, O, L, C, P), ye++)
			}
			const xo = Yt ? Jf(ln) : Zt;
			for (de = xo.length - 1, S = He - 1; S >= 0; S--) {
				const Ie = X + S,
					Ye = h[Ie],
					To = Ie + 1 < k ? h[Ie + 1].el : E;
				ln[S] === 0 ? w(null, Ye, g, To, v, O, L, C, P) : Yt && (de < 0 || S !== xo[de] ? Ge(Ye, g, To, 2) : de--)
			}
		}
	}, Ge = (d, h, g, E, v = null) => {
		const {
			el: O,
			type: L,
			transition: C,
			children: P,
			shapeFlag: S
		} = d;
		if (S & 6) {
			Ge(d.component.subTree, h, g, E);
			return
		}
		if (S & 128) {
			d.suspense.move(h, g, E);
			return
		}
		if (S & 64) {
			L.move(d, h, g, $);
			return
		}
		if (L === Ze) {
			r(O, h, g);
			for (let q = 0; q < P.length; q++) Ge(P[q], h, g, E);
			r(d.anchor, h, g);
			return
		}
		if (L === zr) {
			_(d, h, g);
			return
		}
		if (E !== 2 && S & 1 && C)
			if (E === 0) C.beforeEnter(O), r(O, h, g), Pe(() => C.enter(O), v);
			else {
				const {
					leave: q,
					delayLeave: H,
					afterLeave: Y
				} = C, X = () => r(O, h, g), le = () => {
					q(O, () => {
						X(), Y && Y()
					})
				};
				H ? H(O, X, le) : le()
			}
		else r(O, h, g)
	}, Re = (d, h, g, E = !1, v = !1) => {
		const {
			type: O,
			props: L,
			ref: C,
			children: P,
			dynamicChildren: S,
			shapeFlag: k,
			patchFlag: q,
			dirs: H
		} = d;
		if (C != null && Ts(C, null, g, d, !0), k & 256) {
			h.ctx.deactivate(d);
			return
		}
		const Y = k & 1 && H,
			X = !tr(d);
		let le;
		if (X && (le = L && L.onVnodeBeforeUnmount) && Qe(le, h, d), k & 6) Un(d.component, g, E);
		else {
			if (k & 128) {
				d.suspense.unmount(g, E);
				return
			}
			Y && It(d, null, h, "beforeUnmount"), k & 64 ? d.type.remove(d, h, g, v, $, E) : S && (O !== Ze || q > 0 && q & 64) ? Ee(S, h, g, !1, !0) : (O === Ze && q & 384 || !v && k & 16) && Ee(P, h, g), E && Kt(d)
		}(X && (le = L && L.onVnodeUnmounted) || Y) && Pe(() => {
			le && Qe(le, h, d), Y && It(d, null, h, "unmounted")
		}, g)
	}, Kt = d => {
		const {
			type: h,
			el: g,
			anchor: E,
			transition: v
		} = d;
		if (h === Ze) {
			Gt(g, E);
			return
		}
		if (h === zr) {
			R(d);
			return
		}
		const O = () => {
			s(g), v && !v.persisted && v.afterLeave && v.afterLeave()
		};
		if (d.shapeFlag & 1 && v && !v.persisted) {
			const {
				leave: L,
				delayLeave: C
			} = v, P = () => L(g, O);
			C ? C(d.el, O, P) : P()
		} else O()
	}, Gt = (d, h) => {
		let g;
		for (; d !== h;) g = p(d), s(d), d = g;
		s(h)
	}, Un = (d, h, g) => {
		const {
			bum: E,
			scope: v,
			update: O,
			subTree: L,
			um: C
		} = d;
		E && er(E), v.stop(), O && (O.active = !1, Re(L, d, h, g)), C && Pe(C, h), Pe(() => {
			d.isUnmounted = !0
		}, h), h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve())
	}, Ee = (d, h, g, E = !1, v = !1, O = 0) => {
		for (let L = O; L < d.length; L++) Re(d[L], h, g, E, v)
	}, x = d => d.shapeFlag & 6 ? x(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el);
	let j = !1;
	const I = (d, h, g) => {
			d == null ? h._vnode && Re(h._vnode, null, null, !0) : w(h._vnode || null, d, h, null, null, null, g), j || (j = !0, Bo(), Dl(), j = !1), h._vnode = d
		},
		$ = {
			p: w,
			um: Re,
			m: Ge,
			r: Kt,
			mt: ce,
			mc: W,
			pc: se,
			pbc: z,
			n: x,
			o: e
		};
	let oe, pe;
	return {
		render: I,
		hydrate: oe,
		createApp: $f(I, oe)
	}
}

function qr({
	type: e,
	props: t
}, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Lt({
	effect: e,
	update: t
}, n) {
	e.allowRecurse = t.allowRecurse = n
}

function Qf(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function aa(e, t, n = !1) {
	const r = e.children,
		s = t.children;
	if (U(r) && U(s))
		for (let o = 0; o < r.length; o++) {
			const i = r[o];
			let l = s[o];
			l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = vt(s[o]), l.el = i.el), n || aa(i, l)), l.type === Ir && (l.el = i.el)
		}
}

function Jf(e) {
	const t = e.slice(),
		n = [0];
	let r, s, o, i, l;
	const a = e.length;
	for (r = 0; r < a; r++) {
		const c = e[r];
		if (c !== 0) {
			if (s = n[n.length - 1], e[s] < c) {
				t[r] = s, n.push(r);
				continue
			}
			for (o = 0, i = n.length - 1; o < i;) l = o + i >> 1, e[n[l]] < c ? o = l + 1 : i = l;
			c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
		}
	}
	for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
	return n
}

function ca(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ca(t)
}
const Zf = e => e.__isTeleport,
	Ze = Symbol.for("v-fgt"),
	Ir = Symbol.for("v-txt"),
	De = Symbol.for("v-cmt"),
	zr = Symbol.for("v-stc"),
	bn = [];
let Ue = null;

function rt(e = !1) {
	bn.push(Ue = e ? null : [])
}

function Xf() {
	bn.pop(), Ue = bn[bn.length - 1] || null
}
let On = 1;

function Uo(e) {
	On += e
}

function ua(e) {
	return e.dynamicChildren = On > 0 ? Ue || Zt : null, Xf(), On > 0 && Ue && Ue.push(e), e
}

function mb(e, t, n, r, s, o) {
	return ua(da(e, t, n, r, s, o, !0))
}

function st(e, t, n, r, s) {
	return ua(Ve(e, t, n, r, s, !0))
}

function Es(e) {
	return e ? e.__v_isVNode === !0 : !1
}

function Dt(e, t) {
	return e.type === t.type && e.key === t.key
}
const fa = ({
		key: e
	}) => e ?? null,
	rr = ({
		ref: e,
		ref_key: t,
		ref_for: n
	}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || be(e) || Q(e) ? {
		i: Oe,
		r: e,
		k: t,
		f: !!n
	} : e : null);

function da(e, t = null, n = null, r = 0, s = null, o = e === Ze ? 0 : 1, i = !1, l = !1) {
	const a = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && fa(t),
		ref: t && rr(t),
		scopeId: Pr,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: o,
		patchFlag: r,
		dynamicProps: s,
		dynamicChildren: null,
		appContext: null,
		ctx: Oe
	};
	return l ? (no(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= he(n) ? 8 : 16), On > 0 && !i && Ue && (a.patchFlag > 0 || o & 6) && a.patchFlag !== 32 && Ue.push(a), a
}
const Ve = ed;

function ed(e, t = null, n = null, r = 0, s = null, o = !1) {
	if ((!e || e === Ul) && (e = De), Es(e)) {
		const l = Ot(e, t, !0);
		return n && no(l, n), On > 0 && !o && Ue && (l.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = l : Ue.push(l)), l.patchFlag |= -2, l
	}
	if (fd(e) && (e = e.__vccOpts), t) {
		t = td(t);
		let {
			class: l,
			style: a
		} = t;
		l && !he(l) && (t.class = wr(l)), ae(a) && (Il(a) && !U(a) && (a = ge({}, a)), t.style = Er(a))
	}
	const i = he(e) ? 1 : mf(e) ? 128 : Zf(e) ? 64 : ae(e) ? 4 : Q(e) ? 2 : 0;
	return da(e, t, n, r, s, i, o, !0)
}

function td(e) {
	return e ? Il(e) || na(e) ? ge({}, e) : e : null
}

function Ot(e, t, n = !1, r = !1) {
	const {
		props: s,
		ref: o,
		patchFlag: i,
		children: l,
		transition: a
	} = e, c = t ? rd(s || {}, t) : s, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && fa(c),
		ref: t && t.ref ? n && o ? U(o) ? o.concat(rr(t)) : [o, rr(t)] : rr(t) : o,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: l,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Ze ? i === -1 ? 16 : i | 16 : i,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: a,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ot(e.ssContent),
		ssFallback: e.ssFallback && Ot(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return a && r && (u.transition = a.clone(u)), u
}

function nd(e = " ", t = 0) {
	return Ve(Ir, null, e, t)
}

function gb(e = "", t = !1) {
	return t ? (rt(), st(De, null, e)) : Ve(De, null, e)
}

function Xe(e) {
	return e == null || typeof e == "boolean" ? Ve(De) : U(e) ? Ve(Ze, null, e.slice()) : typeof e == "object" ? vt(e) : Ve(Ir, null, String(e))
}

function vt(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ot(e)
}

function no(e, t) {
	let n = 0;
	const {
		shapeFlag: r
	} = e;
	if (t == null) t = null;
	else if (U(t)) n = 16;
	else if (typeof t == "object")
		if (r & 65) {
			const s = t.default;
			s && (s._c && (s._d = !1), no(e, s()), s._c && (s._d = !0));
			return
		} else {
			n = 32;
			const s = t._;
			!s && !na(t) ? t._ctx = Oe : s === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
		}
	else Q(t) ? (t = {
		default: t,
		_ctx: Oe
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [nd(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n
}

function rd(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		for (const s in r)
			if (s === "class") t.class !== r.class && (t.class = wr([t.class, r.class]));
			else if (s === "style") t.style = Er([t.style, r.style]);
		else if (vr(s)) {
			const o = t[s],
				i = r[s];
			i && o !== i && !(U(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
		} else s !== "" && (t[s] = r[s])
	}
	return t
}

function Qe(e, t, n, r = null) {
	$e(e, t, 7, [n, r])
}
const sd = Xl();
let od = 0;

function id(e, t, n) {
	const r = e.type,
		s = (t ? t.appContext : e.appContext) || sd,
		o = {
			uid: od++,
			vnode: e,
			type: r,
			parent: t,
			appContext: s,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new wu(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(s.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: sa(r, s),
			emitsOptions: $l(r, s),
			emit: null,
			emitted: null,
			propsDefaults: ue,
			inheritAttrs: r.inheritAttrs,
			ctx: ue,
			data: ue,
			props: ue,
			attrs: ue,
			slots: ue,
			refs: ue,
			setupState: ue,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null
		};
	return o.ctx = {
		_: o
	}, o.root = t ? t.root : o, o.emit = cf.bind(null, o), e.ce && e.ce(o), o
}
let Te = null;
const Nn = () => Te || Oe;
let dr, ws;
{
	const e = gl(),
		t = (n, r) => {
			let s;
			return (s = e[n]) || (s = e[n] = []), s.push(r), o => {
				s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
			}
		};
	dr = t("__VUE_INSTANCE_SETTERS__", n => Te = n), ws = t("__VUE_SSR_SETTERS__", n => Lr = n)
}
const jn = e => {
		const t = Te;
		return dr(e), e.scope.on(), () => {
			e.scope.off(), dr(t)
		}
	},
	qo = () => {
		Te && Te.scope.off(), dr(null)
	};

function pa(e) {
	return e.vnode.shapeFlag & 4
}
let Lr = !1;

function ld(e, t = !1) {
	t && ws(t);
	const {
		props: n,
		children: r
	} = e.vnode, s = pa(e);
	Hf(e, n, s, t), zf(e, r);
	const o = s ? ad(e, t) : void 0;
	return t && ws(!1), o
}

function ad(e, t) {
	const n = e.type;
	e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, If);
	const {
		setup: r
	} = n;
	if (r) {
		const s = e.setupContext = r.length > 1 ? ma(e) : null,
			o = jn(e);
		Pt();
		const i = wt(r, e, 0, [e.props, s]);
		if (Mt(), o(), dl(i)) {
			if (i.then(qo, qo), t) return i.then(l => {
				zo(e, l, t)
			}).catch(l => {
				Cr(l, e, 0)
			});
			e.asyncDep = i
		} else zo(e, i, t)
	} else ha(e, t)
}

function zo(e, t, n) {
	Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Nl(t)), ha(e, n)
}
let Ko;

function ha(e, t, n) {
	const r = e.type;
	if (!e.render) {
		if (!t && Ko && !r.render) {
			const s = r.template || eo(e).template;
			if (s) {
				const {
					isCustomElement: o,
					compilerOptions: i
				} = e.appContext.config, {
					delimiters: l,
					compilerOptions: a
				} = r, c = ge(ge({
					isCustomElement: o,
					delimiters: l
				}, i), a);
				r.render = Ko(s, c)
			}
		}
		e.render = r.render || ke
	} {
		const s = jn(e);
		Pt();
		try {
			Ff(e)
		} finally {
			Mt(), s()
		}
	}
}
const cd = {
	get(e, t) {
		return Be(e, "get", ""), e[t]
	}
};

function ma(e) {
	const t = n => {
		e.exposed = n || {}
	};
	return {
		attrs: new Proxy(e.attrs, cd),
		slots: e.slots,
		emit: e.emit,
		expose: t
	}
}

function Vr(e) {
	if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Nl(Ku(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in gn) return gn[n](e)
		},
		has(t, n) {
			return n in t || n in gn
		}
	}))
}

function ud(e, t = !0) {
	return Q(e) ? e.displayName || e.name : e.name || t && e.__name
}

function fd(e) {
	return Q(e) && "__vccOpts" in e
}
const G = (e, t) => Gu(e, t, Lr);

function Rn(e, t, n) {
	const r = arguments.length;
	return r === 2 ? ae(t) && !U(t) ? Es(t) ? Ve(e, null, [t]) : Ve(e, t) : Ve(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Es(n) && (n = [n]), Ve(e, t, n))
}
const dd = "3.4.27";
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const pd = "http://www.w3.org/2000/svg",
	hd = "http://www.w3.org/1998/Math/MathML",
	_t = typeof document < "u" ? document : null,
	Go = _t && _t.createElement("template"),
	md = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null)
		},
		remove: e => {
			const t = e.parentNode;
			t && t.removeChild(e)
		},
		createElement: (e, t, n, r) => {
			const s = t === "svg" ? _t.createElementNS(pd, e) : t === "mathml" ? _t.createElementNS(hd, e) : _t.createElement(e, n ? {
				is: n
			} : void 0);
			return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
		},
		createText: e => _t.createTextNode(e),
		createComment: e => _t.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t
		},
		setElementText: (e, t) => {
			e.textContent = t
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => _t.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "")
		},
		insertStaticContent(e, t, n, r, s, o) {
			const i = n ? n.previousSibling : t.lastChild;
			if (s && (s === o || s.nextSibling))
				for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
			else {
				Go.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
				const l = Go.content;
				if (r === "svg" || r === "mathml") {
					const a = l.firstChild;
					for (; a.firstChild;) l.appendChild(a.firstChild);
					l.removeChild(a)
				}
				t.insertBefore(l, n)
			}
			return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
		}
	},
	pt = "transition",
	an = "animation",
	Pn = Symbol("_vtc"),
	ga = (e, {
		slots: t
	}) => Rn(Ef, gd(e), t);
ga.displayName = "Transition";
const ya = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [String, Number, Object],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
};
ga.props = ge({}, zl, ya);
const Vt = (e, t = []) => {
		U(e) ? e.forEach(n => n(...t)) : e && e(...t)
	},
	Yo = e => e ? U(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function gd(e) {
	const t = {};
	for (const B in e) B in ya || (t[B] = e[B]);
	if (e.css === !1) return t;
	const {
		name: n = "v",
		type: r,
		duration: s,
		enterFromClass: o = `${n}-enter-from`,
		enterActiveClass: i = `${n}-enter-active`,
		enterToClass: l = `${n}-enter-to`,
		appearFromClass: a = o,
		appearActiveClass: c = i,
		appearToClass: u = l,
		leaveFromClass: f = `${n}-leave-from`,
		leaveActiveClass: p = `${n}-leave-active`,
		leaveToClass: m = `${n}-leave-to`
	} = e, y = yd(s), w = y && y[0], A = y && y[1], {
		onBeforeEnter: T,
		onEnter: b,
		onEnterCancelled: _,
		onLeave: R,
		onLeaveCancelled: V,
		onBeforeAppear: M = T,
		onAppear: D = b,
		onAppearCancelled: W = _
	} = t, N = (B, K, ce) => {
		Ft(B, K ? u : l), Ft(B, K ? c : i), ce && ce()
	}, z = (B, K) => {
		B._isLeaving = !1, Ft(B, f), Ft(B, m), Ft(B, p), K && K()
	}, Z = B => (K, ce) => {
		const me = B ? D : b,
			fe = () => N(K, B, ce);
		Vt(me, [K, fe]), Qo(() => {
			Ft(K, B ? a : o), ht(K, B ? u : l), Yo(me) || Jo(K, r, w, fe)
		})
	};
	return ge(t, {
		onBeforeEnter(B) {
			Vt(T, [B]), ht(B, o), ht(B, i)
		},
		onBeforeAppear(B) {
			Vt(M, [B]), ht(B, a), ht(B, c)
		},
		onEnter: Z(!1),
		onAppear: Z(!0),
		onLeave(B, K) {
			B._isLeaving = !0;
			const ce = () => z(B, K);
			ht(B, f), ht(B, p), _d(), Qo(() => {
				B._isLeaving && (Ft(B, f), ht(B, m), Yo(R) || Jo(B, r, A, ce))
			}), Vt(R, [B, ce])
		},
		onEnterCancelled(B) {
			N(B, !1), Vt(_, [B])
		},
		onAppearCancelled(B) {
			N(B, !0), Vt(W, [B])
		},
		onLeaveCancelled(B) {
			z(B), Vt(V, [B])
		}
	})
}

function yd(e) {
	if (e == null) return null;
	if (ae(e)) return [Kr(e.enter), Kr(e.leave)];
	{
		const t = Kr(e);
		return [t, t]
	}
}

function Kr(e) {
	return hu(e)
}

function ht(e, t) {
	t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Pn] || (e[Pn] = new Set)).add(t)
}

function Ft(e, t) {
	t.split(/\s+/).forEach(r => r && e.classList.remove(r));
	const n = e[Pn];
	n && (n.delete(t), n.size || (e[Pn] = void 0))
}

function Qo(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e)
	})
}
let bd = 0;

function Jo(e, t, n, r) {
	const s = e._endId = ++bd,
		o = () => {
			s === e._endId && r()
		};
	if (n) return setTimeout(o, n);
	const {
		type: i,
		timeout: l,
		propCount: a
	} = vd(e, t);
	if (!i) return r();
	const c = i + "end";
	let u = 0;
	const f = () => {
			e.removeEventListener(c, p), o()
		},
		p = m => {
			m.target === e && ++u >= a && f()
		};
	setTimeout(() => {
		u < a && f()
	}, l + 1), e.addEventListener(c, p)
}

function vd(e, t) {
	const n = window.getComputedStyle(e),
		r = y => (n[y] || "").split(", "),
		s = r(`${pt}Delay`),
		o = r(`${pt}Duration`),
		i = Zo(s, o),
		l = r(`${an}Delay`),
		a = r(`${an}Duration`),
		c = Zo(l, a);
	let u = null,
		f = 0,
		p = 0;
	t === pt ? i > 0 && (u = pt, f = i, p = o.length) : t === an ? c > 0 && (u = an, f = c, p = a.length) : (f = Math.max(i, c), u = f > 0 ? i > c ? pt : an : null, p = u ? u === pt ? o.length : a.length : 0);
	const m = u === pt && /\b(transform|all)(,|$)/.test(r(`${pt}Property`).toString());
	return {
		type: u,
		timeout: f,
		propCount: p,
		hasTransform: m
	}
}

function Zo(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((n, r) => Xo(n) + Xo(e[r])))
}

function Xo(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function _d() {
	return document.body.offsetHeight
}

function xd(e, t, n) {
	const r = e[Pn];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const pr = Symbol("_vod"),
	ba = Symbol("_vsh"),
	yb = {
		beforeMount(e, {
			value: t
		}, {
			transition: n
		}) {
			e[pr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : cn(e, t)
		},
		mounted(e, {
			value: t
		}, {
			transition: n
		}) {
			n && t && n.enter(e)
		},
		updated(e, {
			value: t,
			oldValue: n
		}, {
			transition: r
		}) {
			!t != !n && (r ? t ? (r.beforeEnter(e), cn(e, !0), r.enter(e)) : r.leave(e, () => {
				cn(e, !1)
			}) : cn(e, t))
		},
		beforeUnmount(e, {
			value: t
		}) {
			cn(e, t)
		}
	};

function cn(e, t) {
	e.style.display = t ? e[pr] : "none", e[ba] = !t
}
const Td = Symbol(""),
	Ed = /(^|;)\s*display\s*:/;

function wd(e, t, n) {
	const r = e.style,
		s = he(n);
	let o = !1;
	if (n && !s) {
		if (t)
			if (he(t))
				for (const i of t.split(";")) {
					const l = i.slice(0, i.indexOf(":")).trim();
					n[l] == null && sr(r, l, "")
				} else
					for (const i in t) n[i] == null && sr(r, i, "");
		for (const i in n) i === "display" && (o = !0), sr(r, i, n[i])
	} else if (s) {
		if (t !== n) {
			const i = r[Td];
			i && (n += ";" + i), r.cssText = n, o = Ed.test(n)
		}
	} else t && e.removeAttribute("style");
	pr in e && (e[pr] = o ? r.display : "", e[ba] && (r.display = "none"))
}
const ei = /\s*!important$/;

function sr(e, t, n) {
	if (U(n)) n.forEach(r => sr(e, t, r));
	else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
	else {
		const r = Sd(e, t);
		ei.test(n) ? e.setProperty(on(r), n.replace(ei, ""), "important") : e[r] = n
	}
}
const ti = ["Webkit", "Moz", "ms"],
	Gr = {};

function Sd(e, t) {
	const n = Gr[t];
	if (n) return n;
	let r = tt(t);
	if (r !== "filter" && r in e) return Gr[t] = r;
	r = Tr(r);
	for (let s = 0; s < ti.length; s++) {
		const o = ti[s] + r;
		if (o in e) return Gr[t] = o
	}
	return t
}
const ni = "http://www.w3.org/1999/xlink";

function Ad(e, t, n, r, s) {
	if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(ni, t.slice(6, t.length)) : e.setAttributeNS(ni, t, n);
	else {
		const o = Tu(t);
		n == null || o && !yl(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
	}
}

function Cd(e, t, n, r, s, o, i) {
	if (t === "innerHTML" || t === "textContent") {
		r && i(r, s, o), e[t] = n ?? "";
		return
	}
	const l = e.tagName;
	if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
		const c = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
			u = n ?? "";
		(c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
		return
	}
	let a = !1;
	if (n === "" || n == null) {
		const c = typeof e[t];
		c === "boolean" ? n = yl(n) : n == null && c === "string" ? (n = "", a = !0) : c === "number" && (n = 0, a = !0)
	}
	try {
		e[t] = n
	} catch {}
	a && e.removeAttribute(t)
}

function Wt(e, t, n, r) {
	e.addEventListener(t, n, r)
}

function Od(e, t, n, r) {
	e.removeEventListener(t, n, r)
}
const ri = Symbol("_vei");

function Rd(e, t, n, r, s = null) {
	const o = e[ri] || (e[ri] = {}),
		i = o[t];
	if (r && i) i.value = r;
	else {
		const [l, a] = Pd(t);
		if (r) {
			const c = o[t] = Id(r, s);
			Wt(e, l, c, a)
		} else i && (Od(e, l, i, a), o[t] = void 0)
	}
}
const si = /(?:Once|Passive|Capture)$/;

function Pd(e) {
	let t;
	if (si.test(e)) {
		t = {};
		let r;
		for (; r = e.match(si);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
	}
	return [e[2] === ":" ? e.slice(3) : on(e.slice(2)), t]
}
let Yr = 0;
const Md = Promise.resolve(),
	Bd = () => Yr || (Md.then(() => Yr = 0), Yr = Date.now());

function Id(e, t) {
	const n = r => {
		if (!r._vts) r._vts = Date.now();
		else if (r._vts <= n.attached) return;
		$e(Ld(r, n.value), t, 5, [r])
	};
	return n.value = e, n.attached = Bd(), n
}

function Ld(e, t) {
	if (U(t)) {
		const n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0
		}, t.map(r => s => !s._stopped && r && r(s))
	} else return t
}
const oi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
	Vd = (e, t, n, r, s, o, i, l, a) => {
		const c = s === "svg";
		t === "class" ? xd(e, r, c) : t === "style" ? wd(e, n, r) : vr(t) ? js(t) || Rd(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fd(e, t, r, c)) ? Cd(e, t, r, o, i, l, a) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ad(e, t, r, c))
	};

function Fd(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && oi(t) && Q(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		const s = e.tagName;
		if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
	}
	return oi(t) && he(n) ? !1 : t in e
}
const hr = e => {
	const t = e.props["onUpdate:modelValue"] || !1;
	return U(t) ? n => er(t, n) : t
};

function Nd(e) {
	e.target.composing = !0
}

function ii(e) {
	const t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const tn = Symbol("_assign"),
	bb = {
		created(e, {
			modifiers: {
				lazy: t,
				trim: n,
				number: r
			}
		}, s) {
			e[tn] = hr(s);
			const o = r || s.props && s.props.type === "number";
			Wt(e, t ? "change" : "input", i => {
				if (i.target.composing) return;
				let l = e.value;
				n && (l = l.trim()), o && (l = fs(l)), e[tn](l)
			}), n && Wt(e, "change", () => {
				e.value = e.value.trim()
			}), t || (Wt(e, "compositionstart", Nd), Wt(e, "compositionend", ii), Wt(e, "change", ii))
		},
		mounted(e, {
			value: t
		}) {
			e.value = t ?? ""
		},
		beforeUpdate(e, {
			value: t,
			modifiers: {
				lazy: n,
				trim: r,
				number: s
			}
		}, o) {
			if (e[tn] = hr(o), e.composing) return;
			const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? fs(e.value) : e.value,
				l = t ?? "";
			i !== l && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === l) || (e.value = l))
		}
	},
	vb = {
		deep: !0,
		created(e, t, n) {
			e[tn] = hr(n), Wt(e, "change", () => {
				const r = e._modelValue,
					s = jd(e),
					o = e.checked,
					i = e[tn];
				if (U(r)) {
					const l = bl(r, s),
						a = l !== -1;
					if (o && !a) i(r.concat(s));
					else if (!o && a) {
						const c = [...r];
						c.splice(l, 1), i(c)
					}
				} else if (_r(r)) {
					const l = new Set(r);
					o ? l.add(s) : l.delete(s), i(l)
				} else i(va(e, o))
			})
		},
		mounted: li,
		beforeUpdate(e, t, n) {
			e[tn] = hr(n), li(e, t, n)
		}
	};

function li(e, {
	value: t,
	oldValue: n
}, r) {
	e._modelValue = t, U(t) ? e.checked = bl(t, r.props.value) > -1 : _r(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = Sr(t, va(e, !0)))
}

function jd(e) {
	return "_value" in e ? e._value : e.value
}

function va(e, t) {
	const n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t
}
const kd = ["ctrl", "shift", "alt", "meta"],
	Dd = {
		stop: e => e.stopPropagation(),
		prevent: e => e.preventDefault(),
		self: e => e.target !== e.currentTarget,
		ctrl: e => !e.ctrlKey,
		shift: e => !e.shiftKey,
		alt: e => !e.altKey,
		meta: e => !e.metaKey,
		left: e => "button" in e && e.button !== 0,
		middle: e => "button" in e && e.button !== 1,
		right: e => "button" in e && e.button !== 2,
		exact: (e, t) => kd.some(n => e[`${n}Key`] && !t.includes(n))
	},
	_b = (e, t) => {
		const n = e._withMods || (e._withMods = {}),
			r = t.join(".");
		return n[r] || (n[r] = (s, ...o) => {
			for (let i = 0; i < t.length; i++) {
				const l = Dd[t[i]];
				if (l && l(s, t)) return
			}
			return e(s, ...o)
		})
	},
	Wd = ge({
		patchProp: Vd
	}, md);
let ai;

function $d() {
	return ai || (ai = Gf(Wd))
}
const Hd = (...e) => {
	const t = $d().createApp(...e),
		{
			mount: n
		} = t;
	return t.mount = r => {
		const s = qd(r);
		if (!s) return;
		const o = t._component;
		!Q(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
		const i = n(s, !1, Ud(s));
		return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
	}, t
};

function Ud(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function qd(e) {
	return he(e) ? document.querySelector(e) : e
}
const zd = ve({
		__name: "Alert",
		props: {
			message: {
				type: String,
				required: !0
			}
		},
		emits: ["close"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					showAlert: s
				} = ro();
			return Ae(() => s(n.message, () => r("close"))), (o, i) => null
		}
	}),
	Kd = ve({
		__name: "BackButton",
		props: {
			visible: {
				type: Boolean,
				default: !0
			}
		},
		emits: ["click"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					showBackButton: s,
					onBackButtonClicked: o,
					hideBackButton: i
				} = cp();
			return ee(() => n.visible, l => {
				l ? s() : i()
			}), o(() => r("click")), Ae(() => n.visible && s()), ut(() => i()), (l, a) => null
		}
	}),
	Gd = ve({
		__name: "BiometricManager",
		emits: ["init"],
		setup(e, {
			emit: t
		}) {
			const n = t,
				{
					initBiometric: r
				} = gp();
			return Ae(() => r(() => n("init"))), (s, o) => null
		}
	}),
	Yd = ve({
		__name: "ClosingConfirmation",
		setup(e) {
			const {
				enableClosingConfirmation: t,
				disableClosingConfirmation: n
			} = La();
			return Ae(() => t()), ut(() => n()), (r, s) => null
		}
	}),
	Qd = ve({
		__name: "Confirm",
		props: {
			message: {
				type: String,
				required: !0
			}
		},
		emits: ["close"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					showConfirm: s
				} = ro();
			return Ae(() => s(n.message, o => r("close", o))), (o, i) => null
		}
	}),
	Jd = ve({
		__name: "ExpandedViewport",
		props: {
			force: {
				type: Boolean,
				default: !1
			}
		},
		setup(e) {
			const t = e,
				{
					onViewportChanged: n,
					expand: r
				} = Ja();
			return n(({
				isStateStable: s
			}) => {
				t.force && s && r()
			}), Ae(() => r()), (s, o) => null
		}
	}),
	Zd = ve({
		__name: "MainButton",
		props: {
			text: {
				type: String
			},
			color: {
				type: String
			},
			textColor: {
				type: String
			},
			visible: {
				type: Boolean,
				default: !0
			},
			disabled: {
				type: Boolean,
				default: !1
			},
			progress: {
				type: Boolean,
				default: !1
			}
		},
		emits: ["click"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					setMainButtonParams: s,
					onMainButtonClicked: o,
					hideMainButton: i,
					showMainButtonProgress: l,
					hideMainButtonProgress: a
				} = _p();
			return ee(() => n.text, c => {
				s({
					text: c
				})
			}), ee(() => n.color, c => {
				s({
					color: c
				})
			}), ee(() => n.textColor, c => {
				s({
					text_color: c
				})
			}), ee(() => n.visible, c => {
				s({
					is_visible: c
				})
			}), ee(() => n.disabled, c => {
				s({
					is_active: !c
				})
			}), ee(() => n.progress, c => {
				c ? l() : a()
			}), o(() => r("click")), Ae(() => {
				n.progress ? l() : a(), s({
					text: n.text,
					text_color: n.textColor,
					color: n.color,
					is_active: !n.disabled,
					is_visible: n.visible
				})
			}), ut(() => {
				a(), i()
			}), (c, u) => null
		}
	}),
	Xd = ve({
		__name: "Popup",
		props: {
			title: {
				type: String
			},
			message: {
				type: String,
				required: !0
			},
			buttons: {
				type: Array
			}
		},
		emits: ["close"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					showPopup: s
				} = ro();
			return Ae(() => s({
				title: n.title,
				message: n.message,
				buttons: n.buttons
			}, o => r("close", o))), (o, i) => null
		}
	}),
	{
		initData: ep,
		initDataUnsafe: tp,
		version: np,
		platform: rp,
		isVersionAtLeast: sp,
		sendData: op,
		close: ip
	} = Telegram.WebApp,
	_a = F(!1),
	lp = (...e) => {
		Telegram.WebApp.ready(...e), _a.value = !0
	},
	xa = e => Telegram.WebApp.platform === e,
	Ta = xa("unknown"),
	ap = !Ta && Telegram.WebApp.initData === "";

function Ne() {
	return {
		initData: ep,
		initDataUnsafe: tp,
		version: np,
		platform: rp,
		isVersionAtLeast: sp,
		onEvent: (e, t, n = {
			manual: !1
		}) => {
			const {
				manual: r
			} = n, s = () => {
				Telegram.WebApp.onEvent(e, t)
			}, o = () => {
				Telegram.WebApp.offEvent(e, t)
			};
			return r ? s() : (Ae(s), ut(o)), {
				off: o
			}
		},
		sendData: op,
		ready: lp,
		close: ip,
		isReady: xe(_a),
		isPlatform: xa,
		isPlatformUnknown: Ta,
		canSendData: ap
	}
}
const Ea = F(Telegram.WebApp.BackButton.isVisible);

function wa() {
	Ea.value = Telegram.WebApp.BackButton.isVisible
}

function ci(...e) {
	Telegram.WebApp.BackButton.show(...e), wa()
}

function ui(...e) {
	Telegram.WebApp.BackButton.hide(...e), wa()
}

function cp() {
	const {
		onEvent: e
	} = Ne(), t = (n, r) => e("backButtonClicked", n, r);
	return {
		isBackButtonVisible: G({
			get() {
				return Ea.value
			},
			set(n) {
				n ? ci() : ui()
			}
		}),
		onBackButtonClicked: t,
		showBackButton: ci,
		hideBackButton: ui
	}
}
const {
	init: up,
	requestAccess: fp,
	authenticate: dp,
	updateBiometricToken: pp,
	openSettings: hp
} = Telegram.WebApp.BiometricManager, Sa = F(Telegram.WebApp.BiometricManager.isInited), Aa = F(Telegram.WebApp.BiometricManager.isBiometricAvailable), Ca = F(Telegram.WebApp.BiometricManager.biometricType), Oa = F(Telegram.WebApp.BiometricManager.isAccessRequested), Ra = F(Telegram.WebApp.BiometricManager.isAccessGranted), Pa = F(Telegram.WebApp.BiometricManager.isAccessGranted), Ma = F(Telegram.WebApp.BiometricManager.deviceId);

function mp() {
	Sa.value = Telegram.WebApp.BiometricManager.isInited, Aa.value = Telegram.WebApp.BiometricManager.isBiometricAvailable, Ca.value = Telegram.WebApp.BiometricManager.biometricType, Oa.value = Telegram.WebApp.BiometricManager.isAccessRequested, Ra.value = Telegram.WebApp.BiometricManager.isAccessGranted, Ma.value = Telegram.WebApp.BiometricManager.deviceId, Pa.value = Telegram.WebApp.BiometricManager.isBiometricTokenSaved
}

function gp() {
	const {
		onEvent: e
	} = Ne(), t = (s, o) => e("biometricManagerUpdated", s, o), n = (s, o) => e("biometricAuthRequested", s, o), r = (s, o) => e("biometricTokenUpdated", s, o);
	return t(mp), {
		isBiometricInited: xe(Sa),
		isBiometricAvailable: xe(Aa),
		biometricType: xe(Ca),
		isBiometricAccessRequested: xe(Oa),
		isBiometricAccessGranted: xe(Ra),
		isBiometricTokenSaved: xe(Pa),
		biometricDeviceId: xe(Ma),
		initBiometric: up,
		requestBiometricAccess: fp,
		authenticateBiometric: dp,
		updateBiometricToken: pp,
		openBiometricSettings: hp,
		onBiometricManagerUpdated: t,
		onBiometricAuthRequested: n,
		onBiometricTokenUpdated: r
	}
}
Telegram.WebApp;
const Ba = F(Telegram.WebApp.isClosingConfirmationEnabled);

function Ia() {
	Ba.value = Telegram.WebApp.isClosingConfirmationEnabled
}

function fi(...e) {
	Telegram.WebApp.enableClosingConfirmation(...e), Ia()
}

function di(...e) {
	Telegram.WebApp.disableClosingConfirmation(...e), Ia()
}

function La() {
	return {
		isClosingConfirmationEnabled: G({
			get() {
				return Ba.value
			},
			set(e) {
				e ? fi() : di()
			}
		}),
		enableClosingConfirmation: fi,
		disableClosingConfirmation: di
	}
}
Telegram.WebApp.CloudStorage;
const {
	impactOccurred: yp,
	notificationOccurred: bp,
	selectionChanged: vp
} = Telegram.WebApp.HapticFeedback;

function xb() {
	return {
		impactOccurred: yp,
		notificationOccurred: bp,
		selectionChanged: vp
	}
}
const Va = F(Telegram.WebApp.MainButton.text),
	Fa = F(Telegram.WebApp.MainButton.color),
	Na = F(Telegram.WebApp.MainButton.textColor),
	ja = F(Telegram.WebApp.MainButton.isVisible),
	ka = F(Telegram.WebApp.MainButton.isActive),
	Da = F(Telegram.WebApp.MainButton.isProgressVisible);

function Bt() {
	Va.value = Telegram.WebApp.MainButton.text, Fa.value = Telegram.WebApp.MainButton.color, Na.value = Telegram.WebApp.MainButton.textColor, ja.value = Telegram.WebApp.MainButton.isVisible, ka.value = Telegram.WebApp.MainButton.isActive, Da.value = Telegram.WebApp.MainButton.isProgressVisible
}

function pi(...e) {
	Telegram.WebApp.MainButton.setText(...e), Bt()
}

function hi(...e) {
	Telegram.WebApp.MainButton.show(...e), Bt()
}

function mi(...e) {
	Telegram.WebApp.MainButton.hide(...e), Bt()
}

function gi(...e) {
	Telegram.WebApp.MainButton.enable(...e), Bt()
}

function yi(...e) {
	Telegram.WebApp.MainButton.disable(...e), Bt()
}

function bi(...e) {
	Telegram.WebApp.MainButton.showProgress(...e), Bt()
}

function vi(...e) {
	Telegram.WebApp.MainButton.hideProgress(...e), Bt()
}

function Qr(...e) {
	Telegram.WebApp.MainButton.setParams(...e), Bt()
}

function _p() {
	const {
		onEvent: e
	} = Ne(), t = (n, r) => e("mainButtonClicked", n, r);
	return {
		mainButtonText: G({
			get() {
				return Va.value
			},
			set(n) {
				pi(n)
			}
		}),
		mainButtonColor: G({
			get() {
				return Fa.value
			},
			set(n) {
				Qr({
					color: n
				})
			}
		}),
		mainButtonTextColor: G({
			get() {
				return Na.value
			},
			set(n) {
				Qr({
					text_color: n
				})
			}
		}),
		isMainButtonVisible: G({
			get() {
				return ja.value
			},
			set(n) {
				n ? hi() : mi()
			}
		}),
		isMainButtonActive: G({
			get() {
				return ka.value
			},
			set(n) {
				n ? gi() : yi()
			}
		}),
		isMainButtonProgressVisible: G({
			get() {
				return Da.value
			},
			set(n) {
				n ? bi() : vi()
			}
		}),
		setMainButtonText: pi,
		onMainButtonClicked: t,
		showMainButton: hi,
		hideMainButton: mi,
		enableMainButton: gi,
		disableMainButton: yi,
		showMainButtonProgress: bi,
		hideMainButtonProgress: vi,
		setMainButtonParams: Qr
	}
}
Telegram.WebApp;
const {
	showPopup: xp,
	showAlert: Tp,
	showConfirm: Ep
} = Telegram.WebApp;

function ro() {
	const {
		onEvent: e
	} = Ne();
	return {
		showPopup: xp,
		showAlert: Tp,
		showConfirm: Ep,
		onPopupClosed: (t, n) => e("popupClosed", t, n)
	}
}
const {
	showScanQrPopup: wp,
	closeScanQrPopup: Sp
} = Telegram.WebApp;

function Ap() {
	const {
		onEvent: e
	} = Ne();
	return {
		showScanQrPopup: wp,
		closeScanQrPopup: Sp,
		onQrTextReceived: (t, n) => e("qrTextReceived", t, n)
	}
}
Telegram.WebApp;
Ne();
const Wa = F(Telegram.WebApp.SettingsButton.isVisible);

function $a() {
	Wa.value = Telegram.WebApp.SettingsButton.isVisible
}

function _i(...e) {
	Telegram.WebApp.SettingsButton.show(...e), $a()
}

function xi(...e) {
	Telegram.WebApp.SettingsButton.hide(...e), $a()
}

function Cp() {
	const {
		onEvent: e
	} = Ne(), t = (n, r) => e("settingsButtonClicked", n, r);
	return {
		isSettingsButtonVisible: G({
			get() {
				return Wa.value
			},
			set(n) {
				n ? _i() : xi()
			}
		}),
		onSettingsButtonClicked: t,
		showSettingsButton: _i,
		hideSettingsButton: xi
	}
}
const Ha = F(Telegram.WebApp.colorScheme),
	Ua = F(Telegram.WebApp.themeParams),
	qa = F(Telegram.WebApp.headerColor),
	za = F(Telegram.WebApp.backgroundColor);

function so() {
	Ha.value = Telegram.WebApp.colorScheme, Ua.value = {
		...Telegram.WebApp.themeParams
	}, qa.value = Telegram.WebApp.headerColor, za.value = Telegram.WebApp.backgroundColor
}

function Ti(...e) {
	Telegram.WebApp.setHeaderColor(...e), so()
}

function Ei(...e) {
	Telegram.WebApp.setBackgroundColor(...e), so()
}

function Op() {
	const {
		onEvent: e
	} = Ne(), t = (n, r) => e("themeChanged", n, r);
	return t(so), {
		colorScheme: xe(Ha),
		themeParams: xe(Ua),
		headerColor: G({
			get() {
				return qa.value
			},
			set(n) {
				Ti(n)
			}
		}),
		backgroundColor: G({
			get() {
				return za.value
			},
			set(n) {
				Ei(n)
			}
		}),
		setHeaderColor: Ti,
		setBackgroundColor: Ei,
		onThemeChanged: t
	}
}
const Ka = F(Telegram.WebApp.isExpanded),
	Ga = F(Telegram.WebApp.viewportHeight),
	Ya = F(Telegram.WebApp.viewportStableHeight);

function Qa() {
	Ka.value = Telegram.WebApp.isExpanded, Ga.value = Telegram.WebApp.viewportHeight, Ya.value = Telegram.WebApp.viewportStableHeight
}

function Rp(...e) {
	Telegram.WebApp.expand(...e), Qa()
}

function Ja() {
	const {
		onEvent: e
	} = Ne(), t = (n, r) => e("viewportChanged", n, r);
	return t(Qa), {
		isExpanded: xe(Ka),
		viewportHeight: xe(Ga),
		viewportStableHeight: xe(Ya),
		expand: Rp,
		onViewportChanged: t
	}
}
const Pp = ve({
		__name: "ScanQr",
		props: {
			text: {
				type: String
			}
		},
		emits: ["result"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					showScanQrPopup: s,
					closeScanQrPopup: o
				} = Ap();
			return Ae(() => s({
				text: n.text
			}, i => r("result", i))), ut(() => o()), (i, l) => null
		}
	}),
	Mp = ve({
		__name: "SettingsButton",
		props: {
			visible: {
				type: Boolean,
				default: !0
			}
		},
		emits: ["click"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = t,
				{
					showSettingsButton: s,
					onSettingsButtonClicked: o,
					hideSettingsButton: i
				} = Cp();
			return ee(() => n.visible, l => {
				l ? s() : i()
			}), o(() => r("click")), Ae(() => n.visible && s()), ut(() => i()), (l, a) => null
		}
	}),
	Bp = ve({
		__name: "ShareWidget",
		props: {
			url: {
				type: String,
				required: !0
			},
			comment: {
				type: String,
				default: null
			},
			size: {
				type: String,
				default: null
			},
			noLabel: {
				type: Boolean,
				default: !1
			},
			tag: {
				type: String,
				default: "div"
			}
		},
		setup(e) {
			const t = e,
				n = G(() => JSON.stringify(t));
			return (r, s) => (rt(), st(Ct(e.tag), {
				key: n.value
			}, {
				default: Fn(() => [(rt(), st(Ct("script"), {
					async: "",
					src: "https://telegram.org/js/telegram-widget.js?22",
					"data-telegram-share-url": e.url,
					"data-size": e.size,
					"data-comment": e.comment,
					"data-text": e.noLabel ? "notext" : null
				}, null, 8, ["data-telegram-share-url", "data-size", "data-comment", "data-text"]))]),
				_: 1
			}))
		}
	}),
	Ip = ve({
		__name: "PostWidget",
		props: {
			url: {
				type: String,
				required: !0
			},
			width: {
				type: String,
				default: null
			},
			authorPhoto: {
				type: Boolean,
				default: null
			},
			color: {
				type: String,
				default: null
			},
			darkColor: {
				type: String,
				default: null
			},
			dark: {
				type: Boolean,
				default: null
			},
			tag: {
				type: String,
				default: "div"
			}
		},
		setup(e) {
			const t = e,
				n = G(() => JSON.stringify(t));
			return (r, s) => (rt(), st(Ct(e.tag), {
				key: n.value
			}, {
				default: Fn(() => [(rt(), st(Ct("script"), {
					async: "",
					src: "https://telegram.org/js/telegram-widget.js?22",
					"data-telegram-post": e.url,
					"data-width": e.width,
					"data-userpic": e.authorPhoto,
					"data-color": e.color,
					"data-dark-color": e.darkColor,
					"data-dark": e.dark
				}, null, 8, ["data-telegram-post", "data-width", "data-userpic", "data-color", "data-dark-color", "data-dark"]))]),
				_: 1
			}))
		}
	}),
	Lp = ve({
		__name: "LoginWidget",
		props: {
			botUsername: {
				type: String,
				required: !0
			},
			redirectUrl: {
				type: String,
				default: null
			},
			size: {
				type: String,
				default: null
			},
			cornerRadius: {
				type: String,
				default: null
			},
			userPhoto: {
				type: Boolean,
				default: null
			},
			requestWrite: {
				type: Boolean,
				default: !1
			},
			tag: {
				type: String,
				default: "div"
			}
		},
		emits: ["auth"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				r = G(() => JSON.stringify(n)),
				s = t;
			return Ae(() => {
				window.onTelegramAuth = o => s("auth", o)
			}), (o, i) => (rt(), st(Ct(e.tag), {
				key: r.value
			}, {
				default: Fn(() => [(rt(), st(Ct("script"), {
					async: "",
					src: "https://telegram.org/js/telegram-widget.js?22",
					"data-telegram-login": e.botUsername,
					"data-size": e.size,
					"data-radius": e.cornerRadius,
					"data-userpic": e.userPhoto,
					"data-request-access": e.requestWrite ? "write" : null,
					"data-onauth": e.redirectUrl ? null : "onTelegramAuth(user)",
					"data-auth-url": e.redirectUrl
				}, null, 8, ["data-telegram-login", "data-size", "data-radius", "data-userpic", "data-request-access", "data-onauth", "data-auth-url"]))]),
				_: 1
			}))
		}
	}),
	Vp = ve({
		__name: "DiscussionWidget",
		props: {
			url: {
				type: String,
				required: !0
			},
			commentsLimit: {
				type: Number,
				default: null
			},
			height: {
				type: String,
				default: null
			},
			color: {
				type: String,
				default: null
			},
			darkColor: {
				type: String,
				default: null
			},
			dark: {
				type: Boolean,
				default: null
			},
			colorful: {
				type: Boolean,
				default: null
			},
			tag: {
				type: String,
				default: "div"
			}
		},
		setup(e) {
			const t = e,
				n = G(() => JSON.stringify(t));
			return (r, s) => (rt(), st(Ct(e.tag), {
				key: n.value
			}, {
				default: Fn(() => [(rt(), st(Ct("script"), {
					async: "",
					src: "https://telegram.org/js/telegram-widget.js?22",
					"data-telegram-discussion": e.url,
					"data-comments-limit": e.commentsLimit,
					"data-height": e.height,
					"data-color": e.color,
					"data-dark-color": e.darkColor,
					"data-dark": e.dark,
					"data-colorful": e.colorful
				}, null, 8, ["data-telegram-discussion", "data-comments-limit", "data-height", "data-color", "data-dark-color", "data-dark", "data-colorful"]))]),
				_: 1
			}))
		}
	}),
	Fp = {
		install(e) {
			e.component("TgAlert", zd), e.component("TgBackButton", Kd), e.component("TgBiometricManager", Gd), e.component("TgClosingConfirmation", Yd), e.component("TgConfirm", Qd), e.component("TgExpandedViewport", Jd), e.component("TgMainButton", Zd), e.component("TgPopup", Xd), e.component("TgScanQr", Pp), e.component("TgSettingsButton", Mp), e.component("TgShareWidget", Bp), e.component("TgPostWidget", Ip), e.component("TgLoginWidget", Lp), e.component("TgDiscussionWidget", Vp)
		}
	};

function or(e) {
	return JSON.stringify(e)
}

function Np(e) {
	return JSON.parse(e)
}

function Tb(e) {
	return e % 2 !== 0
}

function Eb() {
	document.body.style.overflowY = "auto"
}

function wb() {
	document.body.style.overflowY = "hidden"
}
const jp = "https://cmonkey.vip/",
	{
		initData: wi
	} = Ne();
async function Jr(e, t, n) {
	const r = F(!1),
		s = F(!1),
		o = F(null),
		i = F(0);
	if (!wi) return {
		isLoading: r,
		isError: s,
		data: o,
		statusCode: i
	};
	r.value = !0;
	try {
		const l = await fetch(`${jp}${t}`, {
			method: e,
			headers: {
				"content-type": "application/json",
				"init-data": btoa(wi)
			},
			body: or(n)
		});
		i.value = l.status, l.ok && (o.value = await l.json())
	} catch {
		s.value = !0
	} finally {
		r.value = !1
	}
	return {
		isLoading: r,
		isError: s,
		data: o,
		statusCode: i
	}
}
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Jt = typeof document < "u";

function kp(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ie = Object.assign;

function Zr(e, t) {
	const n = {};
	for (const r in t) {
		const s = t[r];
		n[r] = Ke(s) ? s.map(e) : e(s)
	}
	return n
}
const vn = () => {},
	Ke = Array.isArray,
	Za = /#/g,
	Dp = /&/g,
	Wp = /\//g,
	$p = /=/g,
	Hp = /\?/g,
	Xa = /\+/g,
	Up = /%5B/g,
	qp = /%5D/g,
	ec = /%5E/g,
	zp = /%60/g,
	tc = /%7B/g,
	Kp = /%7C/g,
	nc = /%7D/g,
	Gp = /%20/g;

function oo(e) {
	return encodeURI("" + e).replace(Kp, "|").replace(Up, "[").replace(qp, "]")
}

function Yp(e) {
	return oo(e).replace(tc, "{").replace(nc, "}").replace(ec, "^")
}

function Ss(e) {
	return oo(e).replace(Xa, "%2B").replace(Gp, "+").replace(Za, "%23").replace(Dp, "%26").replace(zp, "`").replace(tc, "{").replace(nc, "}").replace(ec, "^")
}

function Qp(e) {
	return Ss(e).replace($p, "%3D")
}

function Jp(e) {
	return oo(e).replace(Za, "%23").replace(Hp, "%3F")
}

function Zp(e) {
	return e == null ? "" : Jp(e).replace(Wp, "%2F")
}

function Mn(e) {
	try {
		return decodeURIComponent("" + e)
	} catch {}
	return "" + e
}
const Xp = /\/$/,
	eh = e => e.replace(Xp, "");

function Xr(e, t, n = "/") {
	let r, s = {},
		o = "",
		i = "";
	const l = t.indexOf("#");
	let a = t.indexOf("?");
	return l < a && l >= 0 && (a = -1), a > -1 && (r = t.slice(0, a), o = t.slice(a + 1, l > -1 ? l : t.length), s = e(o)), l > -1 && (r = r || t.slice(0, l), i = t.slice(l, t.length)), r = sh(r ?? t, n), {
		fullPath: r + (o && "?") + o + i,
		path: r,
		query: s,
		hash: Mn(i)
	}
}

function th(e, t) {
	const n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "")
}

function Si(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function nh(e, t, n) {
	const r = t.matched.length - 1,
		s = n.matched.length - 1;
	return r > -1 && r === s && rn(t.matched[r], n.matched[s]) && rc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function rn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t)
}

function rc(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const n in e)
		if (!rh(e[n], t[n])) return !1;
	return !0
}

function rh(e, t) {
	return Ke(e) ? Ai(e, t) : Ke(t) ? Ai(t, e) : e === t
}

function Ai(e, t) {
	return Ke(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function sh(e, t) {
	if (e.startsWith("/")) return e;
	if (!e) return t;
	const n = t.split("/"),
		r = e.split("/"),
		s = r[r.length - 1];
	(s === ".." || s === ".") && r.push("");
	let o = n.length - 1,
		i, l;
	for (i = 0; i < r.length; i++)
		if (l = r[i], l !== ".")
			if (l === "..") o > 1 && o--;
			else break;
	return n.slice(0, o).join("/") + "/" + r.slice(i).join("/")
}
var Bn;
(function(e) {
	e.pop = "pop", e.push = "push"
})(Bn || (Bn = {}));
var _n;
(function(e) {
	e.back = "back", e.forward = "forward", e.unknown = ""
})(_n || (_n = {}));

function oh(e) {
	if (!e)
		if (Jt) {
			const t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
		} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), eh(e)
}
const ih = /^[^#]+#/;

function lh(e, t) {
	return e.replace(ih, "#") + t
}

function ah(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	}
}
const Fr = () => ({
	left: window.scrollX,
	top: window.scrollY
});

function ch(e) {
	let t;
	if ("el" in e) {
		const n = e.el,
			r = typeof n == "string" && n.startsWith("#"),
			s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!s) return;
		t = ah(s, e)
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Ci(e, t) {
	return (history.state ? history.state.position - t : -1) + e
}
const As = new Map;

function uh(e, t) {
	As.set(e, t)
}

function fh(e) {
	const t = As.get(e);
	return As.delete(e), t
}
let dh = () => location.protocol + "//" + location.host;

function sc(e, t) {
	const {
		pathname: n,
		search: r,
		hash: s
	} = t, o = e.indexOf("#");
	if (o > -1) {
		let l = s.includes(e.slice(o)) ? e.slice(o).length : 1,
			a = s.slice(l);
		return a[0] !== "/" && (a = "/" + a), Si(a, "")
	}
	return Si(n, e) + r + s
}

function ph(e, t, n, r) {
	let s = [],
		o = [],
		i = null;
	const l = ({
		state: p
	}) => {
		const m = sc(e, location),
			y = n.value,
			w = t.value;
		let A = 0;
		if (p) {
			if (n.value = m, t.value = p, i && i === y) {
				i = null;
				return
			}
			A = w ? p.position - w.position : 0
		} else r(m);
		s.forEach(T => {
			T(n.value, y, {
				delta: A,
				type: Bn.pop,
				direction: A ? A > 0 ? _n.forward : _n.back : _n.unknown
			})
		})
	};

	function a() {
		i = n.value
	}

	function c(p) {
		s.push(p);
		const m = () => {
			const y = s.indexOf(p);
			y > -1 && s.splice(y, 1)
		};
		return o.push(m), m
	}

	function u() {
		const {
			history: p
		} = window;
		p.state && p.replaceState(ie({}, p.state, {
			scroll: Fr()
		}), "")
	}

	function f() {
		for (const p of o) p();
		o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u)
	}
	return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
		passive: !0
	}), {
		pauseListeners: a,
		listen: c,
		destroy: f
	}
}

function Oi(e, t, n, r = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: s ? Fr() : null
	}
}

function hh(e) {
	const {
		history: t,
		location: n
	} = window, r = {
		value: sc(e, n)
	}, s = {
		value: t.state
	};
	s.value || o(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);

	function o(a, c, u) {
		const f = e.indexOf("#"),
			p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : dh() + e + a;
		try {
			t[u ? "replaceState" : "pushState"](c, "", p), s.value = c
		} catch (m) {
			console.error(m), n[u ? "replace" : "assign"](p)
		}
	}

	function i(a, c) {
		const u = ie({}, t.state, Oi(s.value.back, a, s.value.forward, !0), c, {
			position: s.value.position
		});
		o(a, u, !0), r.value = a
	}

	function l(a, c) {
		const u = ie({}, s.value, t.state, {
			forward: a,
			scroll: Fr()
		});
		o(u.current, u, !0);
		const f = ie({}, Oi(r.value, a, null), {
			position: u.position + 1
		}, c);
		o(a, f, !1), r.value = a
	}
	return {
		location: r,
		state: s,
		push: l,
		replace: i
	}
}

function mh(e) {
	e = oh(e);
	const t = hh(e),
		n = ph(e, t.state, t.location, t.replace);

	function r(o, i = !0) {
		i || n.pauseListeners(), history.go(o)
	}
	const s = ie({
		location: "",
		base: e,
		go: r,
		createHref: lh.bind(null, e)
	}, t, n);
	return Object.defineProperty(s, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(s, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), s
}

function gh(e) {
	return typeof e == "string" || e && typeof e == "object"
}

function oc(e) {
	return typeof e == "string" || typeof e == "symbol"
}
const mt = {
		path: "/",
		name: void 0,
		params: {},
		query: {},
		hash: "",
		fullPath: "/",
		matched: [],
		meta: {},
		redirectedFrom: void 0
	},
	ic = Symbol("");
var Ri;
(function(e) {
	e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ri || (Ri = {}));

function sn(e, t) {
	return ie(new Error, {
		type: e,
		[ic]: !0
	}, t)
}

function it(e, t) {
	return e instanceof Error && ic in e && (t == null || !!(e.type & t))
}
const Pi = "[^/]+?",
	yh = {
		sensitive: !1,
		strict: !1,
		start: !0,
		end: !0
	},
	bh = /[.+*?^${}()[\]/\\]/g;

function vh(e, t) {
	const n = ie({}, yh, t),
		r = [];
	let s = n.start ? "^" : "";
	const o = [];
	for (const c of e) {
		const u = c.length ? [] : [90];
		n.strict && !c.length && (s += "/");
		for (let f = 0; f < c.length; f++) {
			const p = c[f];
			let m = 40 + (n.sensitive ? .25 : 0);
			if (p.type === 0) f || (s += "/"), s += p.value.replace(bh, "\\$&"), m += 40;
			else if (p.type === 1) {
				const {
					value: y,
					repeatable: w,
					optional: A,
					regexp: T
				} = p;
				o.push({
					name: y,
					repeatable: w,
					optional: A
				});
				const b = T || Pi;
				if (b !== Pi) {
					m += 10;
					try {
						new RegExp(`(${b})`)
					} catch (R) {
						throw new Error(`Invalid custom RegExp for param "${y}" (${b}): ` + R.message)
					}
				}
				let _ = w ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
				f || (_ = A && c.length < 2 ? `(?:/${_})` : "/" + _), A && (_ += "?"), s += _, m += 20, A && (m += -8), w && (m += -20), b === ".*" && (m += -50)
			}
			u.push(m)
		}
		r.push(u)
	}
	if (n.strict && n.end) {
		const c = r.length - 1;
		r[c][r[c].length - 1] += .7000000000000001
	}
	n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
	const i = new RegExp(s, n.sensitive ? "" : "i");

	function l(c) {
		const u = c.match(i),
			f = {};
		if (!u) return null;
		for (let p = 1; p < u.length; p++) {
			const m = u[p] || "",
				y = o[p - 1];
			f[y.name] = m && y.repeatable ? m.split("/") : m
		}
		return f
	}

	function a(c) {
		let u = "",
			f = !1;
		for (const p of e) {
			(!f || !u.endsWith("/")) && (u += "/"), f = !1;
			for (const m of p)
				if (m.type === 0) u += m.value;
				else if (m.type === 1) {
				const {
					value: y,
					repeatable: w,
					optional: A
				} = m, T = y in c ? c[y] : "";
				if (Ke(T) && !w) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
				const b = Ke(T) ? T.join("/") : T;
				if (!b)
					if (A) p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
					else throw new Error(`Missing required param "${y}"`);
				u += b
			}
		}
		return u || "/"
	}
	return {
		re: i,
		score: r,
		keys: o,
		parse: l,
		stringify: a
	}
}

function _h(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		const r = t[n] - e[n];
		if (r) return r;
		n++
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function xh(e, t) {
	let n = 0;
	const r = e.score,
		s = t.score;
	for (; n < r.length && n < s.length;) {
		const o = _h(r[n], s[n]);
		if (o) return o;
		n++
	}
	if (Math.abs(s.length - r.length) === 1) {
		if (Mi(r)) return 1;
		if (Mi(s)) return -1
	}
	return s.length - r.length
}

function Mi(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0
}
const Th = {
		type: 0,
		value: ""
	},
	Eh = /[a-zA-Z0-9_]/;

function wh(e) {
	if (!e) return [
		[]
	];
	if (e === "/") return [
		[Th]
	];
	if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

	function t(m) {
		throw new Error(`ERR (${n})/"${c}": ${m}`)
	}
	let n = 0,
		r = n;
	const s = [];
	let o;

	function i() {
		o && s.push(o), o = []
	}
	let l = 0,
		a, c = "",
		u = "";

	function f() {
		c && (n === 0 ? o.push({
			type: 0,
			value: c
		}) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), o.push({
			type: 1,
			value: c,
			regexp: u,
			repeatable: a === "*" || a === "+",
			optional: a === "*" || a === "?"
		})) : t("Invalid state to consume buffer"), c = "")
	}

	function p() {
		c += a
	}
	for (; l < e.length;) {
		if (a = e[l++], a === "\\" && n !== 2) {
			r = n, n = 4;
			continue
		}
		switch (n) {
			case 0:
				a === "/" ? (c && f(), i()) : a === ":" ? (f(), n = 1) : p();
				break;
			case 4:
				p(), n = r;
				break;
			case 1:
				a === "(" ? n = 2 : Eh.test(a) ? p() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
				break;
			case 2:
				a === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + a : n = 3 : u += a;
				break;
			case 3:
				f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, u = "";
				break;
			default:
				t("Unknown state");
				break
		}
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), s
}

function Sh(e, t, n) {
	const r = vh(wh(e.path), n),
		s = ie(r, {
			record: e,
			parent: t,
			children: [],
			alias: []
		});
	return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function Ah(e, t) {
	const n = [],
		r = new Map;
	t = Li({
		strict: !1,
		end: !0,
		sensitive: !1
	}, t);

	function s(u) {
		return r.get(u)
	}

	function o(u, f, p) {
		const m = !p,
			y = Ch(u);
		y.aliasOf = p && p.record;
		const w = Li(t, u),
			A = [y];
		if ("alias" in u) {
			const _ = typeof u.alias == "string" ? [u.alias] : u.alias;
			for (const R of _) A.push(ie({}, y, {
				components: p ? p.record.components : y.components,
				path: R,
				aliasOf: p ? p.record : y
			}))
		}
		let T, b;
		for (const _ of A) {
			const {
				path: R
			} = _;
			if (f && R[0] !== "/") {
				const V = f.record.path,
					M = V[V.length - 1] === "/" ? "" : "/";
				_.path = f.record.path + (R && M + R)
			}
			if (T = Sh(_, f, w), p ? p.alias.push(T) : (b = b || T, b !== T && b.alias.push(T), m && u.name && !Ii(T) && i(u.name)), y.children) {
				const V = y.children;
				for (let M = 0; M < V.length; M++) o(V[M], T, p && p.children[M])
			}
			p = p || T, (T.record.components && Object.keys(T.record.components).length || T.record.name || T.record.redirect) && a(T)
		}
		return b ? () => {
			i(b)
		} : vn
	}

	function i(u) {
		if (oc(u)) {
			const f = r.get(u);
			f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i))
		} else {
			const f = n.indexOf(u);
			f > -1 && (n.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i))
		}
	}

	function l() {
		return n
	}

	function a(u) {
		let f = 0;
		for (; f < n.length && xh(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !lc(u, n[f]));) f++;
		n.splice(f, 0, u), u.record.name && !Ii(u) && r.set(u.record.name, u)
	}

	function c(u, f) {
		let p, m = {},
			y, w;
		if ("name" in u && u.name) {
			if (p = r.get(u.name), !p) throw sn(1, {
				location: u
			});
			w = p.record.name, m = ie(Bi(f.params, p.keys.filter(b => !b.optional).concat(p.parent ? p.parent.keys.filter(b => b.optional) : []).map(b => b.name)), u.params && Bi(u.params, p.keys.map(b => b.name))), y = p.stringify(m)
		} else if (u.path != null) y = u.path, p = n.find(b => b.re.test(y)), p && (m = p.parse(y), w = p.record.name);
		else {
			if (p = f.name ? r.get(f.name) : n.find(b => b.re.test(f.path)), !p) throw sn(1, {
				location: u,
				currentLocation: f
			});
			w = p.record.name, m = ie({}, f.params, u.params), y = p.stringify(m)
		}
		const A = [];
		let T = p;
		for (; T;) A.unshift(T.record), T = T.parent;
		return {
			name: w,
			path: y,
			params: m,
			matched: A,
			meta: Rh(A)
		}
	}
	return e.forEach(u => o(u)), {
		addRoute: o,
		resolve: c,
		removeRoute: i,
		getRoutes: l,
		getRecordMatcher: s
	}
}

function Bi(e, t) {
	const n = {};
	for (const r of t) r in e && (n[r] = e[r]);
	return n
}

function Ch(e) {
	return {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: void 0,
		beforeEnter: e.beforeEnter,
		props: Oh(e),
		children: e.children || [],
		instances: {},
		leaveGuards: new Set,
		updateGuards: new Set,
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && {
			default: e.component
		}
	}
}

function Oh(e) {
	const t = {},
		n = e.props || !1;
	if ("component" in e) t.default = n;
	else
		for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t
}

function Ii(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent
	}
	return !1
}

function Rh(e) {
	return e.reduce((t, n) => ie(t, n.meta), {})
}

function Li(e, t) {
	const n = {};
	for (const r in e) n[r] = r in t ? t[r] : e[r];
	return n
}

function lc(e, t) {
	return t.children.some(n => n === e || lc(e, n))
}

function Ph(e) {
	const t = {};
	if (e === "" || e === "?") return t;
	const r = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let s = 0; s < r.length; ++s) {
		const o = r[s].replace(Xa, " "),
			i = o.indexOf("="),
			l = Mn(i < 0 ? o : o.slice(0, i)),
			a = i < 0 ? null : Mn(o.slice(i + 1));
		if (l in t) {
			let c = t[l];
			Ke(c) || (c = t[l] = [c]), c.push(a)
		} else t[l] = a
	}
	return t
}

function Vi(e) {
	let t = "";
	for (let n in e) {
		const r = e[n];
		if (n = Qp(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue
		}(Ke(r) ? r.map(o => o && Ss(o)) : [r && Ss(r)]).forEach(o => {
			o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o))
		})
	}
	return t
}

function Mh(e) {
	const t = {};
	for (const n in e) {
		const r = e[n];
		r !== void 0 && (t[n] = Ke(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
	}
	return t
}
const Bh = Symbol(""),
	Fi = Symbol(""),
	Nr = Symbol(""),
	io = Symbol(""),
	Cs = Symbol("");

function un() {
	let e = [];

	function t(r) {
		return e.push(r), () => {
			const s = e.indexOf(r);
			s > -1 && e.splice(s, 1)
		}
	}

	function n() {
		e = []
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	}
}

function xt(e, t, n, r, s, o = i => i()) {
	const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
	return () => new Promise((l, a) => {
		const c = p => {
				p === !1 ? a(sn(4, {
					from: n,
					to: t
				})) : p instanceof Error ? a(p) : gh(p) ? a(sn(2, {
					from: t,
					to: p
				})) : (i && r.enterCallbacks[s] === i && typeof p == "function" && i.push(p), l())
			},
			u = o(() => e.call(r && r.instances[s], t, n, c));
		let f = Promise.resolve(u);
		e.length < 3 && (f = f.then(c)), f.catch(p => a(p))
	})
}

function es(e, t, n, r, s = o => o()) {
	const o = [];
	for (const i of e)
		for (const l in i.components) {
			let a = i.components[l];
			if (!(t !== "beforeRouteEnter" && !i.instances[l]))
				if (Ih(a)) {
					const u = (a.__vccOpts || a)[t];
					u && o.push(xt(u, n, r, i, l, s))
				} else {
					let c = a();
					o.push(() => c.then(u => {
						if (!u) return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));
						const f = kp(u) ? u.default : u;
						i.components[l] = f;
						const m = (f.__vccOpts || f)[t];
						return m && xt(m, n, r, i, l, s)()
					}))
				}
		}
	return o
}

function Ih(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Ni(e) {
	const t = qe(Nr),
		n = qe(io),
		r = G(() => {
			const a = Fe(e.to);
			return t.resolve(a)
		}),
		s = G(() => {
			const {
				matched: a
			} = r.value, {
				length: c
			} = a, u = a[c - 1], f = n.matched;
			if (!u || !f.length) return -1;
			const p = f.findIndex(rn.bind(null, u));
			if (p > -1) return p;
			const m = ji(a[c - 2]);
			return c > 1 && ji(u) === m && f[f.length - 1].path !== m ? f.findIndex(rn.bind(null, a[c - 2])) : p
		}),
		o = G(() => s.value > -1 && Nh(n.params, r.value.params)),
		i = G(() => s.value > -1 && s.value === n.matched.length - 1 && rc(n.params, r.value.params));

	function l(a = {}) {
		return Fh(a) ? t[Fe(e.replace) ? "replace" : "push"](Fe(e.to)).catch(vn) : Promise.resolve()
	}
	return {
		route: r,
		href: G(() => r.value.href),
		isActive: o,
		isExactActive: i,
		navigate: l
	}
}
const Lh = ve({
		name: "RouterLink",
		compatConfig: {
			MODE: 3
		},
		props: {
			to: {
				type: [String, Object],
				required: !0
			},
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: {
				type: String,
				default: "page"
			}
		},
		useLink: Ni,
		setup(e, {
			slots: t
		}) {
			const n = nt(Ni(e)),
				{
					options: r
				} = qe(Nr),
				s = G(() => ({
					[ki(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
					[ki(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
				}));
			return () => {
				const o = t.default && t.default(n);
				return e.custom ? o : Rn("a", {
					"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
					href: n.href,
					onClick: n.navigate,
					class: s.value
				}, o)
			}
		}
	}),
	Vh = Lh;

function Fh(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			const t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return
		}
		return e.preventDefault && e.preventDefault(), !0
	}
}

function Nh(e, t) {
	for (const n in t) {
		const r = t[n],
			s = e[n];
		if (typeof r == "string") {
			if (r !== s) return !1
		} else if (!Ke(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1
	}
	return !0
}

function ji(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const ki = (e, t, n) => e ?? t ?? n,
	jh = ve({
		name: "RouterView",
		inheritAttrs: !1,
		props: {
			name: {
				type: String,
				default: "default"
			},
			route: Object
		},
		compatConfig: {
			MODE: 3
		},
		setup(e, {
			attrs: t,
			slots: n
		}) {
			const r = qe(Cs),
				s = G(() => e.route || r.value),
				o = qe(Fi, 0),
				i = G(() => {
					let c = Fe(o);
					const {
						matched: u
					} = s.value;
					let f;
					for (;
						(f = u[c]) && !f.components;) c++;
					return c
				}),
				l = G(() => s.value.matched[i.value]);
			nr(Fi, G(() => i.value + 1)), nr(Bh, l), nr(Cs, s);
			const a = F();
			return ee(() => [a.value, l.value, e.name], ([c, u, f], [p, m, y]) => {
				u && (u.instances[f] = c, m && m !== u && c && c === p && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), c && u && (!m || !rn(u, m) || !p) && (u.enterCallbacks[f] || []).forEach(w => w(c))
			}, {
				flush: "post"
			}), () => {
				const c = s.value,
					u = e.name,
					f = l.value,
					p = f && f.components[u];
				if (!p) return Di(n.default, {
					Component: p,
					route: c
				});
				const m = f.props[u],
					y = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null,
					A = Rn(p, ie({}, y, t, {
						onVnodeUnmounted: T => {
							T.component.isUnmounted && (f.instances[u] = null)
						},
						ref: a
					}));
				return Di(n.default, {
					Component: A,
					route: c
				}) || A
			}
		}
	});

function Di(e, t) {
	if (!e) return null;
	const n = e(t);
	return n.length === 1 ? n[0] : n
}
const kh = jh;

function Dh(e) {
	const t = Ah(e.routes, e),
		n = e.parseQuery || Ph,
		r = e.stringifyQuery || Vi,
		s = e.history,
		o = un(),
		i = un(),
		l = un(),
		a = Vl(mt);
	let c = mt;
	Jt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	const u = Zr.bind(null, x => "" + x),
		f = Zr.bind(null, Zp),
		p = Zr.bind(null, Mn);

	function m(x, j) {
		let I, $;
		return oc(x) ? (I = t.getRecordMatcher(x), $ = j) : $ = x, t.addRoute($, I)
	}

	function y(x) {
		const j = t.getRecordMatcher(x);
		j && t.removeRoute(j)
	}

	function w() {
		return t.getRoutes().map(x => x.record)
	}

	function A(x) {
		return !!t.getRecordMatcher(x)
	}

	function T(x, j) {
		if (j = ie({}, j || a.value), typeof x == "string") {
			const h = Xr(n, x, j.path),
				g = t.resolve({
					path: h.path
				}, j),
				E = s.createHref(h.fullPath);
			return ie(h, g, {
				params: p(g.params),
				hash: Mn(h.hash),
				redirectedFrom: void 0,
				href: E
			})
		}
		let I;
		if (x.path != null) I = ie({}, x, {
			path: Xr(n, x.path, j.path).path
		});
		else {
			const h = ie({}, x.params);
			for (const g in h) h[g] == null && delete h[g];
			I = ie({}, x, {
				params: f(h)
			}), j.params = f(j.params)
		}
		const $ = t.resolve(I, j),
			oe = x.hash || "";
		$.params = u(p($.params));
		const pe = th(r, ie({}, x, {
				hash: Yp(oe),
				path: $.path
			})),
			d = s.createHref(pe);
		return ie({
			fullPath: pe,
			hash: oe,
			query: r === Vi ? Mh(x.query) : x.query || {}
		}, $, {
			redirectedFrom: void 0,
			href: d
		})
	}

	function b(x) {
		return typeof x == "string" ? Xr(n, x, a.value.path) : ie({}, x)
	}

	function _(x, j) {
		if (c !== x) return sn(8, {
			from: j,
			to: x
		})
	}

	function R(x) {
		return D(x)
	}

	function V(x) {
		return R(ie(b(x), {
			replace: !0
		}))
	}

	function M(x) {
		const j = x.matched[x.matched.length - 1];
		if (j && j.redirect) {
			const {
				redirect: I
			} = j;
			let $ = typeof I == "function" ? I(x) : I;
			return typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = b($) : {
				path: $
			}, $.params = {}), ie({
				query: x.query,
				hash: x.hash,
				params: $.path != null ? {} : x.params
			}, $)
		}
	}

	function D(x, j) {
		const I = c = T(x),
			$ = a.value,
			oe = x.state,
			pe = x.force,
			d = x.replace === !0,
			h = M(I);
		if (h) return D(ie(b(h), {
			state: typeof h == "object" ? ie({}, oe, h.state) : oe,
			force: pe,
			replace: d
		}), j || I);
		const g = I;
		g.redirectedFrom = j;
		let E;
		return !pe && nh(r, $, I) && (E = sn(16, {
			to: g,
			from: $
		}), Ge($, $, !0, !1)), (E ? Promise.resolve(E) : z(g, $)).catch(v => it(v) ? it(v, 2) ? v : ft(v) : se(v, g, $)).then(v => {
			if (v) {
				if (it(v, 2)) return D(ie({
					replace: d
				}, b(v.to), {
					state: typeof v.to == "object" ? ie({}, oe, v.to.state) : oe,
					force: pe
				}), j || g)
			} else v = B(g, $, !0, d, oe);
			return Z(g, $, v), v
		})
	}

	function W(x, j) {
		const I = _(x, j);
		return I ? Promise.reject(I) : Promise.resolve()
	}

	function N(x) {
		const j = Gt.values().next().value;
		return j && typeof j.runWithContext == "function" ? j.runWithContext(x) : x()
	}

	function z(x, j) {
		let I;
		const [$, oe, pe] = Wh(x, j);
		I = es($.reverse(), "beforeRouteLeave", x, j);
		for (const h of $) h.leaveGuards.forEach(g => {
			I.push(xt(g, x, j))
		});
		const d = W.bind(null, x, j);
		return I.push(d), Ee(I).then(() => {
			I = [];
			for (const h of o.list()) I.push(xt(h, x, j));
			return I.push(d), Ee(I)
		}).then(() => {
			I = es(oe, "beforeRouteUpdate", x, j);
			for (const h of oe) h.updateGuards.forEach(g => {
				I.push(xt(g, x, j))
			});
			return I.push(d), Ee(I)
		}).then(() => {
			I = [];
			for (const h of pe)
				if (h.beforeEnter)
					if (Ke(h.beforeEnter))
						for (const g of h.beforeEnter) I.push(xt(g, x, j));
					else I.push(xt(h.beforeEnter, x, j));
			return I.push(d), Ee(I)
		}).then(() => (x.matched.forEach(h => h.enterCallbacks = {}), I = es(pe, "beforeRouteEnter", x, j, N), I.push(d), Ee(I))).then(() => {
			I = [];
			for (const h of i.list()) I.push(xt(h, x, j));
			return I.push(d), Ee(I)
		}).catch(h => it(h, 8) ? h : Promise.reject(h))
	}

	function Z(x, j, I) {
		l.list().forEach($ => N(() => $(x, j, I)))
	}

	function B(x, j, I, $, oe) {
		const pe = _(x, j);
		if (pe) return pe;
		const d = j === mt,
			h = Jt ? history.state : {};
		I && ($ || d ? s.replace(x.fullPath, ie({
			scroll: d && h && h.scroll
		}, oe)) : s.push(x.fullPath, oe)), a.value = x, Ge(x, j, I, d), ft()
	}
	let K;

	function ce() {
		K || (K = s.listen((x, j, I) => {
			if (!Un.listening) return;
			const $ = T(x),
				oe = M($);
			if (oe) {
				D(ie(oe, {
					replace: !0
				}), $).catch(vn);
				return
			}
			c = $;
			const pe = a.value;
			Jt && uh(Ci(pe.fullPath, I.delta), Fr()), z($, pe).catch(d => it(d, 12) ? d : it(d, 2) ? (D(d.to, $).then(h => {
				it(h, 20) && !I.delta && I.type === Bn.pop && s.go(-1, !1)
			}).catch(vn), Promise.reject()) : (I.delta && s.go(-I.delta, !1), se(d, $, pe))).then(d => {
				d = d || B($, pe, !1), d && (I.delta && !it(d, 8) ? s.go(-I.delta, !1) : I.type === Bn.pop && it(d, 20) && s.go(-1, !1)), Z($, pe, d)
			}).catch(vn)
		}))
	}
	let me = un(),
		fe = un(),
		re;

	function se(x, j, I) {
		ft(x);
		const $ = fe.list();
		return $.length ? $.forEach(oe => oe(x, j, I)) : console.error(x), Promise.reject(x)
	}

	function ot() {
		return re && a.value !== mt ? Promise.resolve() : new Promise((x, j) => {
			me.add([x, j])
		})
	}

	function ft(x) {
		return re || (re = !x, ce(), me.list().forEach(([j, I]) => x ? I(x) : j()), me.reset()), x
	}

	function Ge(x, j, I, $) {
		const {
			scrollBehavior: oe
		} = e;
		if (!Jt || !oe) return Promise.resolve();
		const pe = !I && fh(Ci(x.fullPath, 0)) || ($ || !I) && history.state && history.state.scroll || null;
		return Or().then(() => oe(x, j, pe)).then(d => d && ch(d)).catch(d => se(d, x, j))
	}
	const Re = x => s.go(x);
	let Kt;
	const Gt = new Set,
		Un = {
			currentRoute: a,
			listening: !0,
			addRoute: m,
			removeRoute: y,
			hasRoute: A,
			getRoutes: w,
			resolve: T,
			options: e,
			push: R,
			replace: V,
			go: Re,
			back: () => Re(-1),
			forward: () => Re(1),
			beforeEach: o.add,
			beforeResolve: i.add,
			afterEach: l.add,
			onError: fe.add,
			isReady: ot,
			install(x) {
				const j = this;
				x.component("RouterLink", Vh), x.component("RouterView", kh), x.config.globalProperties.$router = j, Object.defineProperty(x.config.globalProperties, "$route", {
					enumerable: !0,
					get: () => Fe(a)
				}), Jt && !Kt && a.value === mt && (Kt = !0, R(s.location).catch(oe => {}));
				const I = {};
				for (const oe in mt) Object.defineProperty(I, oe, {
					get: () => a.value[oe],
					enumerable: !0
				});
				x.provide(Nr, j), x.provide(io, Bl(I)), x.provide(Cs, a);
				const $ = x.unmount;
				Gt.add(x), x.unmount = function() {
					Gt.delete(x), Gt.size < 1 && (c = mt, K && K(), K = null, a.value = mt, Kt = !1, re = !1), $()
				}
			}
		};

	function Ee(x) {
		return x.reduce((j, I) => j.then(() => N(I)), Promise.resolve())
	}
	return Un
}

function Wh(e, t) {
	const n = [],
		r = [],
		s = [],
		o = Math.max(t.matched.length, e.matched.length);
	for (let i = 0; i < o; i++) {
		const l = t.matched[i];
		l && (e.matched.find(c => rn(c, l)) ? r.push(l) : n.push(l));
		const a = e.matched[i];
		a && (t.matched.find(c => rn(c, a)) || s.push(a))
	}
	return [n, r, s]
}

function ac() {
	return qe(Nr)
}

function Sb() {
	return qe(io)
}
const fn = F(),
	Wi = F(),
	$i = F({
		soundAllowed: 0,
		vibrationAllowed: !1
	}),
	Hi = F(0),
	Ui = F(!1),
	Qt = F({
		isBanned: !1,
		isWarned: !1
	});

function cc() {
	const e = ac(),
		{
			initDataUnsafe: t
		} = Ne();
	fn.value = t.user;
	async function n(i) {
		if (!i) {
			await e.push({
				name: "closed"
			});
			return
		}
		const {
			data: l,
			isError: a,
			statusCode: c
		} = await Jr("POST", `api/users?invited_by=${i}`, {
			user_id: fn.value.id,
			username: fn.value.username || fn.value.first_name,
			invited_by: i || null
		});
		if (c.value === 400) return await e.push({
			name: "closed"
		})
	}
	async function r() {
		const {
			data: i,
			statusCode: l
		} = await Jr("GET", "api/users/status/");
		return i.value && (Wi.value = i.value, Hi.value = i.value.energyRemain, Ui.value = i.value.minigame), l.value
	}
	async function s(i) {
		await r() === 401 && (await n(i), await r())
	}
	async function o() {
		const {
			data: i
		} = await Jr("GET", "api/users/settings");
		i.value && ($i.value = i.value)
	}
	return ee(Qt, () => {
		if (Qt.value.isWarned) {
			e.push({
				name: "ban-page",
				query: {
					type: "warn"
				}
			}), Qt.value.isWarned = !1;
			return
		}
		Qt.value.isBanned && (e.push({
			name: "ban-page"
		}), Qt.value.isBanned = !1)
	}, {
		deep: !0
	}), {
		userTgInfo: fn,
		userInfo: Wi,
		userEnergyRemain: Hi,
		userBanInfo: Qt,
		getUserSettings: o,
		userSettings: $i,
		isShowMiniGame: Ui,
		getUser: s
	}
}

function Rt(e) {
	return _l() ? (Au(e), !0) : !1
}

function we(e) {
	return typeof e == "function" ? e() : Fe(e)
}
const St = typeof window < "u" && typeof document < "u",
	$h = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope,
	Hh = e => typeof e < "u",
	Uh = e => e != null,
	qh = Object.prototype.toString,
	mr = e => qh.call(e) === "[object Object]",
	ze = () => {};

function uc(e, t) {
	function n(...r) {
		return new Promise((s, o) => {
			Promise.resolve(e(() => t.apply(this, r), {
				fn: t,
				thisArg: this,
				args: r
			})).then(s).catch(o)
		})
	}
	return n
}

function zh(e, t = {}) {
	let n, r, s = ze;
	const o = l => {
		clearTimeout(l), s(), s = ze
	};
	return l => {
		const a = we(e),
			c = we(t.maxWait);
		return n && o(n), a <= 0 || c !== void 0 && c <= 0 ? (r && (o(r), r = null), Promise.resolve(l())) : new Promise((u, f) => {
			s = t.rejectOnCancel ? f : u, c && !r && (r = setTimeout(() => {
				n && o(n), r = null, u(l())
			}, c)), n = setTimeout(() => {
				r && o(r), r = null, u(l())
			}, a)
		})
	}
}

function Kh(...e) {
	let t = 0,
		n, r = !0,
		s = ze,
		o, i, l, a, c;
	!be(e[0]) && typeof e[0] == "object" ? {
		delay: i,
		trailing: l = !0,
		leading: a = !0,
		rejectOnCancel: c = !1
	} = e[0] : [i, l = !0, a = !0, c = !1] = e;
	const u = () => {
		n && (clearTimeout(n), n = void 0, s(), s = ze)
	};
	return p => {
		const m = we(i),
			y = Date.now() - t,
			w = () => o = p();
		return u(), m <= 0 ? (t = Date.now(), w()) : (y > m && (a || !r) ? (t = Date.now(), w()) : l && (o = new Promise((A, T) => {
			s = c ? T : A, n = setTimeout(() => {
				t = Date.now(), r = !0, A(w()), u()
			}, Math.max(0, m - y))
		})), !a && !n && (n = setTimeout(() => r = !0, m)), r = !1, o)
	}
}

function Gh(e) {
	let t;

	function n() {
		return t || (t = e()), t
	}
	return n.reset = async () => {
		const r = t;
		t = void 0, r && await r
	}, n
}

function fc(e) {
	return Nn()
}

function Yh(...e) {
	if (e.length !== 1) return tf(...e);
	const t = e[0];
	return typeof t == "function" ? xe(Zu(() => ({
		get: t,
		set: ze
	}))) : F(t)
}

function Qh(e, t = 200, n = {}) {
	return uc(zh(t, n), e)
}

function Jh(e, t = 200, n = !1, r = !0, s = !1) {
	return uc(Kh(t, n, r, s), e)
}

function lo(e, t = !0, n) {
	fc() ? Ae(e, n) : t ? e() : Or(e)
}

function Zh(e, t) {
	fc() && ut(e, t)
}

function Xh(e, t = 1e3, n = {}) {
	const {
		immediate: r = !0,
		immediateCallback: s = !1
	} = n;
	let o = null;
	const i = F(!1);

	function l() {
		o && (clearInterval(o), o = null)
	}

	function a() {
		i.value = !1, l()
	}

	function c() {
		const u = we(t);
		u <= 0 || (i.value = !0, s && e(), l(), o = setInterval(e, u))
	}
	if (r && St && c(), be(t) || typeof t == "function") {
		const u = ee(t, () => {
			i.value && St && c()
		});
		Rt(u)
	}
	return Rt(a), {
		isActive: i,
		pause: a,
		resume: c
	}
}

function em(e, t, n = {}) {
	const {
		immediate: r = !0
	} = n, s = F(!1);
	let o = null;

	function i() {
		o && (clearTimeout(o), o = null)
	}

	function l() {
		s.value = !1, i()
	}

	function a(...c) {
		i(), s.value = !0, o = setTimeout(() => {
			s.value = !1, o = null, e(...c)
		}, we(t))
	}
	return r && (s.value = !0, St && a()), Rt(l), {
		isPending: xe(s),
		start: a,
		stop: l
	}
}

function We(e) {
	var t;
	const n = we(e);
	return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const zt = St ? window : void 0,
	dc = St ? window.navigator : void 0;

function _e(...e) {
	let t, n, r, s;
	if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, s] = e, t = zt) : [t, n, r, s] = e, !t) return ze;
	Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
	const o = [],
		i = () => {
			o.forEach(u => u()), o.length = 0
		},
		l = (u, f, p, m) => (u.addEventListener(f, p, m), () => u.removeEventListener(f, p, m)),
		a = ee(() => [We(t), we(s)], ([u, f]) => {
			if (i(), !u) return;
			const p = mr(f) ? {
				...f
			} : f;
			o.push(...n.flatMap(m => r.map(y => l(u, m, y, p))))
		}, {
			immediate: !0,
			flush: "post"
		}),
		c = () => {
			a(), i()
		};
	return Rt(c), c
}

function tm() {
	const e = F(!1),
		t = Nn();
	return t && Ae(() => {
		e.value = !0
	}, t), e
}

function kn(e) {
	const t = tm();
	return G(() => (t.value, !!e()))
}

function nm(e, t = {}) {
	const {
		window: n = zt
	} = t, r = kn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
	let s;
	const o = F(!1),
		i = c => {
			o.value = c.matches
		},
		l = () => {
			s && ("removeEventListener" in s ? s.removeEventListener("change", i) : s.removeListener(i))
		},
		a = vf(() => {
			r.value && (l(), s = n.matchMedia(we(e)), "addEventListener" in s ? s.addEventListener("change", i) : s.addListener(i), o.value = s.matches)
		});
	return Rt(() => {
		a(), l(), s = void 0
	}), o
}

function qi(e, t = {}) {
	const {
		controls: n = !1,
		navigator: r = dc
	} = t, s = kn(() => r && "permissions" in r);
	let o;
	const i = typeof e == "string" ? {
			name: e
		} : e,
		l = F(),
		a = () => {
			o && (l.value = o.state)
		},
		c = Gh(async () => {
			if (s.value) {
				if (!o) try {
					o = await r.permissions.query(i), _e(o, "change", a), a()
				} catch {
					l.value = "prompt"
				}
				return o
			}
		});
	return c(), n ? {
		state: l,
		isSupported: s,
		query: c
	} : l
}

function Ab(e = {}) {
	const {
		navigator: t = dc,
		read: n = !1,
		source: r,
		copiedDuring: s = 1500,
		legacy: o = !1
	} = e, i = kn(() => t && "clipboard" in t), l = qi("clipboard-read"), a = qi("clipboard-write"), c = G(() => i.value || o), u = F(""), f = F(!1), p = em(() => f.value = !1, s);

	function m() {
		i.value && T(l.value) ? t.clipboard.readText().then(b => {
			u.value = b
		}) : u.value = A()
	}
	c.value && n && _e(["copy", "cut"], m);
	async function y(b = we(r)) {
		c.value && b != null && (i.value && T(a.value) ? await t.clipboard.writeText(b) : w(b), u.value = b, f.value = !0, p.start())
	}

	function w(b) {
		const _ = document.createElement("textarea");
		_.value = b ?? "", _.style.position = "absolute", _.style.opacity = "0", document.body.appendChild(_), _.select(), document.execCommand("copy"), _.remove()
	}

	function A() {
		var b, _, R;
		return (R = (_ = (b = document == null ? void 0 : document.getSelection) == null ? void 0 : b.call(document)) == null ? void 0 : _.toString()) != null ? R : ""
	}

	function T(b) {
		return b === "granted" || b === "prompt"
	}
	return {
		isSupported: c,
		text: u,
		copied: f,
		copy: y
	}
}

function rm(e) {
	return JSON.parse(JSON.stringify(e))
}

function sm(e, t, n = {}) {
	const {
		window: r = zt,
		...s
	} = n;
	let o;
	const i = kn(() => r && "ResizeObserver" in r),
		l = () => {
			o && (o.disconnect(), o = void 0)
		},
		a = G(() => Array.isArray(e) ? e.map(f => We(f)) : [We(e)]),
		c = ee(a, f => {
			if (l(), i.value && r) {
				o = new ResizeObserver(t);
				for (const p of f) p && o.observe(p, s)
			}
		}, {
			immediate: !0,
			flush: "post"
		}),
		u = () => {
			l(), c()
		};
	return Rt(u), {
		isSupported: i,
		stop: u
	}
}

function om(e, t = {
	width: 0,
	height: 0
}, n = {}) {
	const {
		window: r = zt,
		box: s = "content-box"
	} = n, o = G(() => {
		var f, p;
		return (p = (f = We(e)) == null ? void 0 : f.namespaceURI) == null ? void 0 : p.includes("svg")
	}), i = F(t.width), l = F(t.height), {
		stop: a
	} = sm(e, ([f]) => {
		const p = s === "border-box" ? f.borderBoxSize : s === "content-box" ? f.contentBoxSize : f.devicePixelContentBoxSize;
		if (r && o.value) {
			const m = We(e);
			if (m) {
				const y = m.getBoundingClientRect();
				i.value = y.width, l.value = y.height
			}
		} else if (p) {
			const m = Array.isArray(p) ? p : [p];
			i.value = m.reduce((y, {
				inlineSize: w
			}) => y + w, 0), l.value = m.reduce((y, {
				blockSize: w
			}) => y + w, 0)
		} else i.value = f.contentRect.width, l.value = f.contentRect.height
	}, n);
	lo(() => {
		const f = We(e);
		f && (i.value = "offsetWidth" in f ? f.offsetWidth : t.width, l.value = "offsetHeight" in f ? f.offsetHeight : t.height)
	});
	const c = ee(() => We(e), f => {
		i.value = f ? t.width : 0, l.value = f ? t.height : 0
	});

	function u() {
		a(), c()
	}
	return {
		width: i,
		height: l,
		stop: u
	}
}

function im(e, t, n = {}) {
	const {
		root: r,
		rootMargin: s = "0px",
		threshold: o = .1,
		window: i = zt,
		immediate: l = !0
	} = n, a = kn(() => i && "IntersectionObserver" in i), c = G(() => {
		const y = we(e);
		return (Array.isArray(y) ? y : [y]).map(We).filter(Uh)
	});
	let u = ze;
	const f = F(l),
		p = a.value ? ee(() => [c.value, We(r), f.value], ([y, w]) => {
			if (u(), !f.value || !y.length) return;
			const A = new IntersectionObserver(t, {
				root: We(w),
				rootMargin: s,
				threshold: o
			});
			y.forEach(T => T && A.observe(T)), u = () => {
				A.disconnect(), u = ze
			}
		}, {
			immediate: l,
			flush: "post"
		}) : ze,
		m = () => {
			u(), p(), f.value = !1
		};
	return Rt(m), {
		isSupported: a,
		isActive: f,
		pause() {
			u(), f.value = !1
		},
		resume() {
			f.value = !0
		},
		stop: m
	}
}
const zi = 1;

function Cb(e, t = {}) {
	const {
		throttle: n = 0,
		idle: r = 200,
		onStop: s = ze,
		onScroll: o = ze,
		offset: i = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		},
		eventListenerOptions: l = {
			capture: !1,
			passive: !0
		},
		behavior: a = "auto",
		window: c = zt,
		onError: u = D => {
			console.error(D)
		}
	} = t, f = F(0), p = F(0), m = G({
		get() {
			return f.value
		},
		set(D) {
			w(D, void 0)
		}
	}), y = G({
		get() {
			return p.value
		},
		set(D) {
			w(void 0, D)
		}
	});

	function w(D, W) {
		var N, z, Z, B;
		if (!c) return;
		const K = we(e);
		if (!K) return;
		(Z = K instanceof Document ? c.document.body : K) == null || Z.scrollTo({
			top: (N = we(W)) != null ? N : y.value,
			left: (z = we(D)) != null ? z : m.value,
			behavior: we(a)
		});
		const ce = ((B = K == null ? void 0 : K.document) == null ? void 0 : B.documentElement) || (K == null ? void 0 : K.documentElement) || K;
		m != null && (f.value = ce.scrollLeft), y != null && (p.value = ce.scrollTop)
	}
	const A = F(!1),
		T = nt({
			left: !0,
			right: !1,
			top: !0,
			bottom: !1
		}),
		b = nt({
			left: !1,
			right: !1,
			top: !1,
			bottom: !1
		}),
		_ = D => {
			A.value && (A.value = !1, b.left = !1, b.right = !1, b.top = !1, b.bottom = !1, s(D))
		},
		R = Qh(_, n + r),
		V = D => {
			var W;
			if (!c) return;
			const N = ((W = D == null ? void 0 : D.document) == null ? void 0 : W.documentElement) || (D == null ? void 0 : D.documentElement) || We(D),
				{
					display: z,
					flexDirection: Z
				} = getComputedStyle(N),
				B = N.scrollLeft;
			b.left = B < f.value, b.right = B > f.value;
			const K = Math.abs(B) <= (i.left || 0),
				ce = Math.abs(B) + N.clientWidth >= N.scrollWidth - (i.right || 0) - zi;
			z === "flex" && Z === "row-reverse" ? (T.left = ce, T.right = K) : (T.left = K, T.right = ce), f.value = B;
			let me = N.scrollTop;
			D === c.document && !me && (me = c.document.body.scrollTop), b.top = me < p.value, b.bottom = me > p.value;
			const fe = Math.abs(me) <= (i.top || 0),
				re = Math.abs(me) + N.clientHeight >= N.scrollHeight - (i.bottom || 0) - zi;
			z === "flex" && Z === "column-reverse" ? (T.top = re, T.bottom = fe) : (T.top = fe, T.bottom = re), p.value = me
		},
		M = D => {
			var W;
			if (!c) return;
			const N = (W = D.target.documentElement) != null ? W : D.target;
			V(N), A.value = !0, R(D), o(D)
		};
	return _e(e, "scroll", n ? Jh(M, n, !0, !1) : M, l), lo(() => {
		try {
			const D = we(e);
			if (!D) return;
			V(D)
		} catch (D) {
			u(D)
		}
	}), _e(e, "scrollend", _, l), {
		x: m,
		y,
		isScrolling: A,
		arrivedState: T,
		directions: b,
		measure() {
			const D = we(e);
			c && D && V(D)
		}
	}
}

function Ob(e, t, n, r = {}) {
	var s, o, i;
	const {
		clone: l = !1,
		passive: a = !1,
		eventName: c,
		deep: u = !1,
		defaultValue: f,
		shouldEmit: p
	} = r, m = Nn(), y = n || (m == null ? void 0 : m.emit) || ((s = m == null ? void 0 : m.$emit) == null ? void 0 : s.bind(m)) || ((i = (o = m == null ? void 0 : m.proxy) == null ? void 0 : o.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
	let w = c;
	w = w || `update:${t.toString()}`;
	const A = _ => l ? typeof l == "function" ? l(_) : rm(_) : _,
		T = () => Hh(e[t]) ? A(e[t]) : f,
		b = _ => {
			p ? p(_) && y(w, _) : y(w, _)
		};
	if (a) {
		const _ = T(),
			R = F(_);
		let V = !1;
		return ee(() => e[t], M => {
			V || (V = !0, R.value = A(M), Or(() => V = !1))
		}), ee(R, M => {
			!V && (M !== e[t] || u) && b(M)
		}, {
			deep: u
		}), R
	} else return G({
		get() {
			return T()
		},
		set(_) {
			b(_)
		}
	})
}

function Rb(e, t) {
	const {
		containerStyle: n,
		wrapperProps: r,
		scrollTo: s,
		calculateRange: o,
		currentList: i,
		containerRef: l
	} = "itemHeight" in t ? cm(t, e) : am(t, e);
	return {
		list: i,
		scrollTo: s,
		containerProps: {
			ref: l,
			onScroll: () => {
				o()
			},
			style: n
		},
		wrapperProps: r
	}
}

function pc(e) {
	const t = F(null),
		n = om(t),
		r = F([]),
		s = Vl(e);
	return {
		state: F({
			start: 0,
			end: 10
		}),
		source: s,
		currentList: r,
		size: n,
		containerRef: t
	}
}

function hc(e, t, n) {
	return r => {
		if (typeof n == "number") return Math.ceil(r / n);
		const {
			start: s = 0
		} = e.value;
		let o = 0,
			i = 0;
		for (let l = s; l < t.value.length; l++) {
			const a = n(l);
			if (o += a, i = l, o > r) break
		}
		return i - s
	}
}

function mc(e, t) {
	return n => {
		if (typeof t == "number") return Math.floor(n / t) + 1;
		let r = 0,
			s = 0;
		for (let o = 0; o < e.value.length; o++) {
			const i = t(o);
			if (r += i, r >= n) {
				s = o;
				break
			}
		}
		return s + 1
	}
}

function gc(e, t, n, r, {
	containerRef: s,
	state: o,
	currentList: i,
	source: l
}) {
	return () => {
		const a = s.value;
		if (a) {
			const c = n(e === "vertical" ? a.scrollTop : a.scrollLeft),
				u = r(e === "vertical" ? a.clientHeight : a.clientWidth),
				f = c - t,
				p = c + u + t;
			o.value = {
				start: f < 0 ? 0 : f,
				end: p > l.value.length ? l.value.length : p
			}, i.value = l.value.slice(o.value.start, o.value.end).map((m, y) => ({
				data: m,
				index: y + o.value.start
			}))
		}
	}
}

function yc(e, t) {
	return n => typeof e == "number" ? n * e : t.value.slice(0, n).reduce((s, o, i) => s + e(i), 0)
}

function bc(e, t, n, r) {
	ee([e.width, e.height, t, n], () => {
		r()
	})
}

function vc(e, t) {
	return G(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, r, s) => n + e(s), 0))
}
const lm = {
	horizontal: "scrollLeft",
	vertical: "scrollTop"
};

function _c(e, t, n, r) {
	return s => {
		r.value && (r.value[lm[e]] = n(s), t())
	}
}

function am(e, t) {
	const n = pc(t),
		{
			state: r,
			source: s,
			currentList: o,
			size: i,
			containerRef: l
		} = n,
		a = {
			overflowX: "auto"
		},
		{
			itemWidth: c,
			overscan: u = 5
		} = e,
		f = hc(r, s, c),
		p = mc(s, c),
		m = gc("horizontal", u, p, f, n),
		y = yc(c, s),
		w = G(() => y(r.value.start)),
		A = vc(c, s);
	bc(i, t, l, m);
	const T = _c("horizontal", m, y, l),
		b = G(() => ({
			style: {
				height: "100%",
				width: `${A.value-w.value}px`,
				marginLeft: `${w.value}px`,
				display: "flex"
			}
		}));
	return {
		scrollTo: T,
		calculateRange: m,
		wrapperProps: b,
		containerStyle: a,
		currentList: o,
		containerRef: l
	}
}

function cm(e, t) {
	const n = pc(t),
		{
			state: r,
			source: s,
			currentList: o,
			size: i,
			containerRef: l
		} = n,
		a = {
			overflowY: "auto"
		},
		{
			itemHeight: c,
			overscan: u = 5
		} = e,
		f = hc(r, s, c),
		p = mc(s, c),
		m = gc("vertical", u, p, f, n),
		y = yc(c, s),
		w = G(() => y(r.value.start)),
		A = vc(c, s);
	bc(i, t, l, m);
	const T = _c("vertical", m, y, l),
		b = G(() => ({
			style: {
				width: "100%",
				height: `${A.value-w.value}px`,
				marginTop: `${w.value}px`
			}
		}));
	return {
		calculateRange: m,
		scrollTo: T,
		containerStyle: a,
		wrapperProps: b,
		currentList: o,
		containerRef: l
	}
}
const Ki = "ping";

function ts(e) {
	return e === !0 ? {} : e
}

function um(e, t = {}) {
	const {
		onConnected: n,
		onDisconnected: r,
		onError: s,
		onMessage: o,
		immediate: i = !0,
		autoClose: l = !0,
		protocols: a = []
	} = t, c = F(null), u = F("CLOSED"), f = F(), p = Yh(e);
	let m, y, w = !1,
		A = 0,
		T = [],
		b;
	const _ = () => {
			if (T.length && f.value && u.value === "OPEN") {
				for (const N of T) f.value.send(N);
				T = []
			}
		},
		R = () => {
			clearTimeout(b), b = void 0
		},
		V = (N = 1e3, z) => {
			!St || !f.value || (w = !0, R(), m == null || m(), f.value.close(N, z), f.value = void 0)
		},
		M = (N, z = !0) => !f.value || u.value !== "OPEN" ? (z && T.push(N), !1) : (_(), f.value.send(N), !0),
		D = () => {
			if (w || typeof p.value > "u") return;
			const N = new WebSocket(p.value, a);
			f.value = N, u.value = "CONNECTING", N.onopen = () => {
				u.value = "OPEN", n == null || n(N), y == null || y(), _()
			}, N.onclose = z => {
				if (u.value = "CLOSED", r == null || r(N, z), !w && t.autoReconnect) {
					const {
						retries: Z = -1,
						delay: B = 1e3,
						onFailed: K
					} = ts(t.autoReconnect);
					A += 1, typeof Z == "number" && (Z < 0 || A < Z) || typeof Z == "function" && Z() ? setTimeout(D, B) : K == null || K()
				}
			}, N.onerror = z => {
				s == null || s(N, z)
			}, N.onmessage = z => {
				if (t.heartbeat) {
					R();
					const {
						message: Z = Ki
					} = ts(t.heartbeat);
					if (z.data === Z) return
				}
				c.value = z.data, o == null || o(N, z)
			}
		};
	if (t.heartbeat) {
		const {
			message: N = Ki,
			interval: z = 1e3,
			pongTimeout: Z = 1e3
		} = ts(t.heartbeat), {
			pause: B,
			resume: K
		} = Xh(() => {
			M(N, !1), b == null && (b = setTimeout(() => {
				V(), w = !1
			}, Z))
		}, z, {
			immediate: !1
		});
		m = B, y = K
	}
	l && (St && _e("beforeunload", () => V()), Rt(V));
	const W = () => {
		!St && !$h || (V(), w = !1, A = 0, D())
	};
	return i && W(), ee(p, W), {
		data: c,
		status: u,
		close: V,
		send: M,
		open: W,
		ws: f
	}
}

function Pb(e = {}) {
	const {
		window: t = zt,
		initialWidth: n = Number.POSITIVE_INFINITY,
		initialHeight: r = Number.POSITIVE_INFINITY,
		listenOrientation: s = !0,
		includeScrollbar: o = !0
	} = e, i = F(n), l = F(r), a = () => {
		t && (o ? (i.value = t.innerWidth, l.value = t.innerHeight) : (i.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight))
	};
	if (a(), lo(a), _e("resize", a, {
			passive: !0
		}), s) {
		const c = nm("(orientation: portrait)");
		ee(c, () => a())
	}
	return {
		width: i,
		height: l
	}
}
const {
	userTgInfo: fm,
	userInfo: Gi,
	userEnergyRemain: dm,
	isShowMiniGame: pm,
	userBanInfo: Yi
} = cc();

function hm() {
	const {
		initData: e
	} = Ne();
	return btoa(e)
}
const mm = "wss://cmonkey.vip/";
var fl;
const {
	status: Qi,
	data: ns,
	send: gm,
	open: ym,
	close: bm
} = um(`${mm}api/users/${(fl=fm.value)==null?void 0:fl.id}/actions?init-data=${hm()}`, {
	autoReconnect: !0
});
ee(ns, () => {
	console.log(ns.value);
	const e = Np(ns.value);
	if ((e == null ? void 0 : e.banStatus) === "warned") {
		Yi.value.isWarned = !0;
		return
	}
	if ((e == null ? void 0 : e.banStatus) === "banned") {
		Yi.value.isBanned = !0;
		return
	}
	Gi.value.coinCount = e.coins, Gi.value.energyRefilledAt = e.energyRefilledAt, dm.value = e.energy, pm.value = e.minigame
});

function Mb() {
	function e(t, n, r) {
		if (Qi.value === "CONNECTING") return;
		Qi.value === "CLOSED" && ym();
		const s = {
			game: or({
				type: "game",
				click: 1
			}),
			minigame: or({
				type: "minigame",
				success: n,
				result: r
			}),
			refresh_energy: or({
				type: "refresh_energy"
			})
		};
		gm(s[t])
	}
	return {
		sendData: e,
		close: bm
	}
}
const vm = ve({
		__name: "App",
		setup(e) {
			const {
				enableClosingConfirmation: t
			} = La();
			t();
			const {
				expand: n
			} = Ja();
			n();
			const r = ac(),
				s = G(() => {
					const c = new URLSearchParams(window.location.search);
					return c.get("tgWebAppStartParam") || c.get("startapp")
				}),
				{
					getUser: o
				} = cc();
			o(s.value);
			const {
				platform: i
			} = Ne();
			i === "tdesktop" && r.push({
				name: "mobile-club"
			});
			const {
				backgroundColor: l,
				headerColor: a
			} = Op();
			return l.value = "#000", a.value = "#000", (c, u) => {
				const f = Hl("router-view");
				return rt(), st(f)
			}
		}
	}),
	_m = "modulepreload",
	xm = function(e) {
		return "/" + e
	},
	Ji = {},
	gt = function(t, n, r) {
		let s = Promise.resolve();
		if (n && n.length > 0) {
			document.getElementsByTagName("link");
			const o = document.querySelector("meta[property=csp-nonce]"),
				i = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
			s = Promise.all(n.map(l => {
				if (l = xm(l), l in Ji) return;
				Ji[l] = !0;
				const a = l.endsWith(".css"),
					c = a ? '[rel="stylesheet"]' : "";
				if (document.querySelector(`link[href="${l}"]${c}`)) return;
				const u = document.createElement("link");
				if (u.rel = a ? "stylesheet" : _m, a || (u.as = "script", u.crossOrigin = ""), u.href = l, i && u.setAttribute("nonce", i), document.head.appendChild(u), a) return new Promise((f, p) => {
					u.addEventListener("load", f), u.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${l}`)))
				})
			}))
		}
		return s.then(() => t()).catch(o => {
			const i = new Event("vite:preloadError", {
				cancelable: !0
			});
			if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o
		})
	},
	Tm = [{
		path: "/",
		name: "home",
		component: () => gt(() => import("./HomeView-B2Xg55Ab.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]))
	}, {
		path: "/invites",
		name: "invites",
		component: () => gt(() => import("./InvitesView-CYdplSnV.js"), __vite__mapDeps([8, 1, 6, 9, 2, 3, 10, 11, 12]))
	}, {
		path: "/boost",
		name: "boost",
		component: () => gt(() => import("./BoostView-5wn7TEPT.js"), __vite__mapDeps([13, 2, 4, 14, 3, 15, 9, 10, 11, 16]))
	}, {
		path: "/leaderboard",
		name: "leaderboard",
		component: () => gt(() => import("./LeaderboardView-DvCn_akV.js"), __vite__mapDeps([17, 4, 5, 6, 3, 11, 18]))
	}, {
		path: "/settings",
		name: "settings",
		component: () => gt(() => import("./SettingsView-D11oFNgU.js"), __vite__mapDeps([19, 4, 3, 11, 20]))
	}, {
		path: "/closed",
		name: "closed",
		component: () => gt(() => import("./ClosedView-Da5Ls5T_.js"), __vite__mapDeps([21, 3, 22]))
	}, {
		path: "/mobile-club",
		name: "mobile-club",
		component: () => gt(() => import("./MobileOnlyView-DJzrGNP1.js"), __vite__mapDeps([23, 3, 24]))
	}, {
		path: "/banned",
		name: "ban-page",
		component: () => gt(() => import("./BannedView-DGBO9AqZ.js"), __vite__mapDeps([25, 14, 3, 15, 26]))
	}],
	Em = Dh({
		history: mh(),
		routes: Tm
	});

function rs(e) {
	if (e === null || typeof e != "object") return !1;
	const t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function Os(e, t, n = ".", r) {
	if (!rs(t)) return Os(e, {}, n, r);
	const s = Object.assign({}, t);
	for (const o in e) {
		if (o === "__proto__" || o === "constructor") continue;
		const i = e[o];
		i != null && (r && r(s, o, i, n) || (Array.isArray(i) && Array.isArray(s[o]) ? s[o] = [...i, ...s[o]] : rs(i) && rs(s[o]) ? s[o] = Os(i, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = i))
	}
	return s
}

function wm(e) {
	return (...t) => t.reduce((n, r) => Os(n, r, "", e), {})
}
const Sm = wm(),
	xc = 1 / 60 * 1e3,
	Am = typeof performance < "u" ? () => performance.now() : () => Date.now(),
	Tc = typeof window < "u" ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(Am()), xc);

function Cm(e) {
	let t = [],
		n = [],
		r = 0,
		s = !1,
		o = !1;
	const i = new WeakSet,
		l = {
			schedule: (a, c = !1, u = !1) => {
				const f = u && s,
					p = f ? t : n;
				return c && i.add(a), p.indexOf(a) === -1 && (p.push(a), f && s && (r = t.length)), a
			},
			cancel: a => {
				const c = n.indexOf(a);
				c !== -1 && n.splice(c, 1), i.delete(a)
			},
			process: a => {
				if (s) {
					o = !0;
					return
				}
				if (s = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
					for (let c = 0; c < r; c++) {
						const u = t[c];
						u(a), i.has(u) && (l.schedule(u), e())
					}
				s = !1, o && (o = !1, l.process(a))
			}
		};
	return l
}
const Om = 40;
let Rs = !0,
	In = !1,
	Ps = !1;
const nn = {
		delta: 0,
		timestamp: 0
	},
	Dn = ["read", "update", "preRender", "render", "postRender"],
	jr = Dn.reduce((e, t) => (e[t] = Cm(() => In = !0), e), {}),
	Ms = Dn.reduce((e, t) => {
		const n = jr[t];
		return e[t] = (r, s = !1, o = !1) => (In || Mm(), n.schedule(r, s, o)), e
	}, {}),
	Rm = Dn.reduce((e, t) => (e[t] = jr[t].cancel, e), {});
Dn.reduce((e, t) => (e[t] = () => jr[t].process(nn), e), {});
const Pm = e => jr[e].process(nn),
	Ec = e => {
		In = !1, nn.delta = Rs ? xc : Math.max(Math.min(e - nn.timestamp, Om), 1), nn.timestamp = e, Ps = !0, Dn.forEach(Pm), Ps = !1, In && (Rs = !1, Tc(Ec))
	},
	Mm = () => {
		In = !0, Rs = !0, Ps || Tc(Ec)
	},
	wc = () => nn;

function Sc(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
	return n
}
var Zi = function() {};
const Bs = (e, t, n) => Math.min(Math.max(n, e), t),
	ss = .001,
	Bm = .01,
	Im = 10,
	Lm = .05,
	Vm = 1;

function Fm({
	duration: e = 800,
	bounce: t = .25,
	velocity: n = 0,
	mass: r = 1
}) {
	let s, o, i = 1 - t;
	i = Bs(Lm, Vm, i), e = Bs(Bm, Im, e / 1e3), i < 1 ? (s = c => {
		const u = c * i,
			f = u * e,
			p = u - n,
			m = Is(c, i),
			y = Math.exp(-f);
		return ss - p / m * y
	}, o = c => {
		const f = c * i * e,
			p = f * n + n,
			m = Math.pow(i, 2) * Math.pow(c, 2) * e,
			y = Math.exp(-f),
			w = Is(Math.pow(c, 2), i);
		return (-s(c) + ss > 0 ? -1 : 1) * ((p - m) * y) / w
	}) : (s = c => {
		const u = Math.exp(-c * e),
			f = (c - n) * e + 1;
		return -ss + u * f
	}, o = c => {
		const u = Math.exp(-c * e),
			f = (n - c) * (e * e);
		return u * f
	});
	const l = 5 / e,
		a = jm(s, o, l);
	if (e = e * 1e3, isNaN(a)) return {
		stiffness: 100,
		damping: 10,
		duration: e
	};
	{
		const c = Math.pow(a, 2) * r;
		return {
			stiffness: c,
			damping: i * 2 * Math.sqrt(r * c),
			duration: e
		}
	}
}
const Nm = 12;

function jm(e, t, n) {
	let r = n;
	for (let s = 1; s < Nm; s++) r = r - e(r) / t(r);
	return r
}

function Is(e, t) {
	return e * Math.sqrt(1 - t * t)
}
const km = ["duration", "bounce"],
	Dm = ["stiffness", "damping", "mass"];

function Xi(e, t) {
	return t.some(n => e[n] !== void 0)
}

function Wm(e) {
	let t = Object.assign({
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1
	}, e);
	if (!Xi(e, Dm) && Xi(e, km)) {
		const n = Fm(e);
		t = Object.assign(Object.assign(Object.assign({}, t), n), {
			velocity: 0,
			mass: 1
		}), t.isResolvedFromDuration = !0
	}
	return t
}

function ao(e) {
	var {
		from: t = 0,
		to: n = 1,
		restSpeed: r = 2,
		restDelta: s
	} = e, o = Sc(e, ["from", "to", "restSpeed", "restDelta"]);
	const i = {
		done: !1,
		value: t
	};
	let {
		stiffness: l,
		damping: a,
		mass: c,
		velocity: u,
		duration: f,
		isResolvedFromDuration: p
	} = Wm(o), m = el, y = el;

	function w() {
		const A = u ? -(u / 1e3) : 0,
			T = n - t,
			b = a / (2 * Math.sqrt(l * c)),
			_ = Math.sqrt(l / c) / 1e3;
		if (s === void 0 && (s = Math.min(Math.abs(n - t) / 100, .4)), b < 1) {
			const R = Is(_, b);
			m = V => {
				const M = Math.exp(-b * _ * V);
				return n - M * ((A + b * _ * T) / R * Math.sin(R * V) + T * Math.cos(R * V))
			}, y = V => {
				const M = Math.exp(-b * _ * V);
				return b * _ * M * (Math.sin(R * V) * (A + b * _ * T) / R + T * Math.cos(R * V)) - M * (Math.cos(R * V) * (A + b * _ * T) - R * T * Math.sin(R * V))
			}
		} else if (b === 1) m = R => n - Math.exp(-_ * R) * (T + (A + _ * T) * R);
		else {
			const R = _ * Math.sqrt(b * b - 1);
			m = V => {
				const M = Math.exp(-b * _ * V),
					D = Math.min(R * V, 300);
				return n - M * ((A + b * _ * T) * Math.sinh(D) + R * T * Math.cosh(D)) / R
			}
		}
	}
	return w(), {
		next: A => {
			const T = m(A);
			if (p) i.done = A >= f;
			else {
				const b = y(A) * 1e3,
					_ = Math.abs(b) <= r,
					R = Math.abs(n - T) <= s;
				i.done = _ && R
			}
			return i.value = i.done ? n : T, i
		},
		flipTarget: () => {
			u = -u, [t, n] = [n, t], w()
		}
	}
}
ao.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const el = e => 0,
	Ac = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r
	},
	co = (e, t, n) => -n * e + n * t + e,
	Cc = (e, t) => n => Math.max(Math.min(n, t), e),
	xn = e => e % 1 ? Number(e.toFixed(5)) : e,
	Ln = /(-)?([\d]*\.?[\d])+/g,
	Ls = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	$m = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function Wn(e) {
	return typeof e == "string"
}
const $n = {
		test: e => typeof e == "number",
		parse: parseFloat,
		transform: e => e
	},
	Tn = Object.assign(Object.assign({}, $n), {
		transform: Cc(0, 1)
	}),
	Zn = Object.assign(Object.assign({}, $n), {
		default: 1
	}),
	uo = e => ({
		test: t => Wn(t) && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`
	}),
	Nt = uo("deg"),
	En = uo("%"),
	J = uo("px"),
	tl = Object.assign(Object.assign({}, En), {
		parse: e => En.parse(e) / 100,
		transform: e => En.transform(e * 100)
	}),
	fo = (e, t) => n => !!(Wn(n) && $m.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
	Oc = (e, t, n) => r => {
		if (!Wn(r)) return r;
		const [s, o, i, l] = r.match(Ln);
		return {
			[e]: parseFloat(s),
			[t]: parseFloat(o),
			[n]: parseFloat(i),
			alpha: l !== void 0 ? parseFloat(l) : 1
		}
	},
	Ht = {
		test: fo("hsl", "hue"),
		parse: Oc("hue", "saturation", "lightness"),
		transform: ({
			hue: e,
			saturation: t,
			lightness: n,
			alpha: r = 1
		}) => "hsla(" + Math.round(e) + ", " + En.transform(xn(t)) + ", " + En.transform(xn(n)) + ", " + xn(Tn.transform(r)) + ")"
	},
	Hm = Cc(0, 255),
	os = Object.assign(Object.assign({}, $n), {
		transform: e => Math.round(Hm(e))
	}),
	Tt = {
		test: fo("rgb", "red"),
		parse: Oc("red", "green", "blue"),
		transform: ({
			red: e,
			green: t,
			blue: n,
			alpha: r = 1
		}) => "rgba(" + os.transform(e) + ", " + os.transform(t) + ", " + os.transform(n) + ", " + xn(Tn.transform(r)) + ")"
	};

function Um(e) {
	let t = "",
		n = "",
		r = "",
		s = "";
	return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), s = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), s = e.substr(4, 1), t += t, n += n, r += r, s += s), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: s ? parseInt(s, 16) / 255 : 1
	}
}
const Vs = {
		test: fo("#"),
		parse: Um,
		transform: Tt.transform
	},
	Me = {
		test: e => Tt.test(e) || Vs.test(e) || Ht.test(e),
		parse: e => Tt.test(e) ? Tt.parse(e) : Ht.test(e) ? Ht.parse(e) : Vs.parse(e),
		transform: e => Wn(e) ? e : e.hasOwnProperty("red") ? Tt.transform(e) : Ht.transform(e)
	},
	Rc = "${c}",
	Pc = "${n}";

function qm(e) {
	var t, n, r, s;
	return isNaN(e) && Wn(e) && ((n = (t = e.match(Ln)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((s = (r = e.match(Ls)) === null || r === void 0 ? void 0 : r.length) !== null && s !== void 0 ? s : 0) > 0
}

function Mc(e) {
	typeof e == "number" && (e = `${e}`);
	const t = [];
	let n = 0;
	const r = e.match(Ls);
	r && (n = r.length, e = e.replace(Ls, Rc), t.push(...r.map(Me.parse)));
	const s = e.match(Ln);
	return s && (e = e.replace(Ln, Pc), t.push(...s.map($n.parse))), {
		values: t,
		numColors: n,
		tokenised: e
	}
}

function Bc(e) {
	return Mc(e).values
}

function Ic(e) {
	const {
		values: t,
		numColors: n,
		tokenised: r
	} = Mc(e), s = t.length;
	return o => {
		let i = r;
		for (let l = 0; l < s; l++) i = i.replace(l < n ? Rc : Pc, l < n ? Me.transform(o[l]) : xn(o[l]));
		return i
	}
}
const zm = e => typeof e == "number" ? 0 : e;

function Km(e) {
	const t = Bc(e);
	return Ic(e)(t.map(zm))
}
const Hn = {
		test: qm,
		parse: Bc,
		createTransformer: Ic,
		getAnimatableNone: Km
	},
	Gm = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Ym(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(Ln) || [];
	if (!r) return e;
	const s = n.replace(r, "");
	let o = Gm.has(t) ? 1 : 0;
	return r !== n && (o *= 100), t + "(" + o + s + ")"
}
const Qm = /([a-z-]*)\(.*?\)/g,
	Fs = Object.assign(Object.assign({}, Hn), {
		getAnimatableNone: e => {
			const t = e.match(Qm);
			return t ? t.map(Ym).join(" ") : e
		}
	});

function is(e, t, n) {
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function nl({
	hue: e,
	saturation: t,
	lightness: n,
	alpha: r
}) {
	e /= 360, t /= 100, n /= 100;
	let s = 0,
		o = 0,
		i = 0;
	if (!t) s = o = i = n;
	else {
		const l = n < .5 ? n * (1 + t) : n + t - n * t,
			a = 2 * n - l;
		s = is(a, l, e + 1 / 3), o = is(a, l, e), i = is(a, l, e - 1 / 3)
	}
	return {
		red: Math.round(s * 255),
		green: Math.round(o * 255),
		blue: Math.round(i * 255),
		alpha: r
	}
}
const Jm = (e, t, n) => {
		const r = e * e,
			s = t * t;
		return Math.sqrt(Math.max(0, n * (s - r) + r))
	},
	Zm = [Vs, Tt, Ht],
	rl = e => Zm.find(t => t.test(e)),
	Lc = (e, t) => {
		let n = rl(e),
			r = rl(t),
			s = n.parse(e),
			o = r.parse(t);
		n === Ht && (s = nl(s), n = Tt), r === Ht && (o = nl(o), r = Tt);
		const i = Object.assign({}, s);
		return l => {
			for (const a in i) a !== "alpha" && (i[a] = Jm(s[a], o[a], l));
			return i.alpha = co(s.alpha, o.alpha, l), n.transform(i)
		}
	},
	Xm = e => typeof e == "number",
	eg = (e, t) => n => t(e(n)),
	Vc = (...e) => e.reduce(eg);

function Fc(e, t) {
	return Xm(e) ? n => co(e, t, n) : Me.test(e) ? Lc(e, t) : jc(e, t)
}
const Nc = (e, t) => {
		const n = [...e],
			r = n.length,
			s = e.map((o, i) => Fc(o, t[i]));
		return o => {
			for (let i = 0; i < r; i++) n[i] = s[i](o);
			return n
		}
	},
	tg = (e, t) => {
		const n = Object.assign(Object.assign({}, e), t),
			r = {};
		for (const s in n) e[s] !== void 0 && t[s] !== void 0 && (r[s] = Fc(e[s], t[s]));
		return s => {
			for (const o in r) n[o] = r[o](s);
			return n
		}
	};

function sl(e) {
	const t = Hn.parse(e),
		n = t.length;
	let r = 0,
		s = 0,
		o = 0;
	for (let i = 0; i < n; i++) r || typeof t[i] == "number" ? r++ : t[i].hue !== void 0 ? o++ : s++;
	return {
		parsed: t,
		numNumbers: r,
		numRGB: s,
		numHSL: o
	}
}
const jc = (e, t) => {
		const n = Hn.createTransformer(t),
			r = sl(e),
			s = sl(t);
		return r.numHSL === s.numHSL && r.numRGB === s.numRGB && r.numNumbers >= s.numNumbers ? Vc(Nc(r.parsed, s.parsed), n) : i => `${i>0?t:e}`
	},
	ng = (e, t) => n => co(e, t, n);

function rg(e) {
	if (typeof e == "number") return ng;
	if (typeof e == "string") return Me.test(e) ? Lc : jc;
	if (Array.isArray(e)) return Nc;
	if (typeof e == "object") return tg
}

function sg(e, t, n) {
	const r = [],
		s = n || rg(e[0]),
		o = e.length - 1;
	for (let i = 0; i < o; i++) {
		let l = s(e[i], e[i + 1]);
		if (t) {
			const a = Array.isArray(t) ? t[i] : t;
			l = Vc(a, l)
		}
		r.push(l)
	}
	return r
}

function og([e, t], [n]) {
	return r => n(Ac(e, t, r))
}

function ig(e, t) {
	const n = e.length,
		r = n - 1;
	return s => {
		let o = 0,
			i = !1;
		if (s <= e[0] ? i = !0 : s >= e[r] && (o = r - 1, i = !0), !i) {
			let a = 1;
			for (; a < n && !(e[a] > s || a === r); a++);
			o = a - 1
		}
		const l = Ac(e[o], e[o + 1], s);
		return t[o](l)
	}
}

function kc(e, t, {
	clamp: n = !0,
	ease: r,
	mixer: s
} = {}) {
	const o = e.length;
	Zi(o === t.length), Zi(!r || !Array.isArray(r) || r.length === o - 1), e[0] > e[o - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	const i = sg(t, r, s),
		l = o === 2 ? og(e, i) : ig(e, i);
	return n ? a => l(Bs(e[0], e[o - 1], a)) : l
}
const kr = e => t => 1 - e(1 - t),
	po = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	lg = e => t => Math.pow(t, e),
	Dc = e => t => t * t * ((e + 1) * t - e),
	ag = e => {
		const t = Dc(e);
		return n => (n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
	},
	Wc = 1.525,
	cg = 4 / 11,
	ug = 8 / 11,
	fg = 9 / 10,
	$c = e => e,
	ho = lg(2),
	dg = kr(ho),
	Hc = po(ho),
	Uc = e => 1 - Math.sin(Math.acos(e)),
	qc = kr(Uc),
	pg = po(qc),
	mo = Dc(Wc),
	hg = kr(mo),
	mg = po(mo),
	gg = ag(Wc),
	yg = 4356 / 361,
	bg = 35442 / 1805,
	vg = 16061 / 1805,
	gr = e => {
		if (e === 1 || e === 0) return e;
		const t = e * e;
		return e < cg ? 7.5625 * t : e < ug ? 9.075 * t - 9.9 * e + 3.4 : e < fg ? yg * t - bg * e + vg : 10.8 * e * e - 20.52 * e + 10.72
	},
	_g = kr(gr),
	xg = e => e < .5 ? .5 * (1 - gr(1 - e * 2)) : .5 * gr(e * 2 - 1) + .5;

function Tg(e, t) {
	return e.map(() => t || Hc).splice(0, e.length - 1)
}

function Eg(e) {
	const t = e.length;
	return e.map((n, r) => r !== 0 ? r / (t - 1) : 0)
}

function wg(e, t) {
	return e.map(n => n * t)
}

function ir({
	from: e = 0,
	to: t = 1,
	ease: n,
	offset: r,
	duration: s = 300
}) {
	const o = {
			done: !1,
			value: e
		},
		i = Array.isArray(t) ? t : [e, t],
		l = wg(r && r.length === i.length ? r : Eg(i), s);

	function a() {
		return kc(l, i, {
			ease: Array.isArray(n) ? n : Tg(i, n)
		})
	}
	let c = a();
	return {
		next: u => (o.value = c(u), o.done = u >= s, o),
		flipTarget: () => {
			i.reverse(), c = a()
		}
	}
}

function Sg({
	velocity: e = 0,
	from: t = 0,
	power: n = .8,
	timeConstant: r = 350,
	restDelta: s = .5,
	modifyTarget: o
}) {
	const i = {
		done: !1,
		value: t
	};
	let l = n * e;
	const a = t + l,
		c = o === void 0 ? a : o(a);
	return c !== a && (l = c - t), {
		next: u => {
			const f = -l * Math.exp(-u / r);
			return i.done = !(f > s || f < -s), i.value = i.done ? c : c + f, i
		},
		flipTarget: () => {}
	}
}
const ol = {
	keyframes: ir,
	spring: ao,
	decay: Sg
};

function Ag(e) {
	if (Array.isArray(e.to)) return ir;
	if (ol[e.type]) return ol[e.type];
	const t = new Set(Object.keys(e));
	return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? ir : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? ao : ir
}

function zc(e, t, n = 0) {
	return e - t - n
}

function Cg(e, t, n = 0, r = !0) {
	return r ? zc(t + -e, t, n) : t - (e - t) + n
}

function Og(e, t, n, r) {
	return r ? e >= t + n : e <= -n
}
const Rg = e => {
	const t = ({
		delta: n
	}) => e(n);
	return {
		start: () => Ms.update(t, !0),
		stop: () => Rm.update(t)
	}
};

function Kc(e) {
	var t, n, {
			from: r,
			autoplay: s = !0,
			driver: o = Rg,
			elapsed: i = 0,
			repeat: l = 0,
			repeatType: a = "loop",
			repeatDelay: c = 0,
			onPlay: u,
			onStop: f,
			onComplete: p,
			onRepeat: m,
			onUpdate: y
		} = e,
		w = Sc(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
	let {
		to: A
	} = w, T, b = 0, _ = w.duration, R, V = !1, M = !0, D;
	const W = Ag(w);
	!((n = (t = W).needsInterpolation) === null || n === void 0) && n.call(t, r, A) && (D = kc([0, 100], [r, A], {
		clamp: !1
	}), r = 0, A = 100);
	const N = W(Object.assign(Object.assign({}, w), {
		from: r,
		to: A
	}));

	function z() {
		b++, a === "reverse" ? (M = b % 2 === 0, i = Cg(i, _, c, M)) : (i = zc(i, _, c), a === "mirror" && N.flipTarget()), V = !1, m && m()
	}

	function Z() {
		T.stop(), p && p()
	}

	function B(ce) {
		if (M || (ce = -ce), i += ce, !V) {
			const me = N.next(Math.max(0, i));
			R = me.value, D && (R = D(R)), V = M ? me.done : i <= 0
		}
		y == null || y(R), V && (b === 0 && (_ ?? (_ = i)), b < l ? Og(i, _, c, M) && z() : Z())
	}

	function K() {
		u == null || u(), T = o(B), T.start()
	}
	return s && K(), {
		stop: () => {
			f == null || f(), T.stop()
		}
	}
}

function Gc(e, t) {
	return t ? e * (1e3 / t) : 0
}

function Pg({
	from: e = 0,
	velocity: t = 0,
	min: n,
	max: r,
	power: s = .8,
	timeConstant: o = 750,
	bounceStiffness: i = 500,
	bounceDamping: l = 10,
	restDelta: a = 1,
	modifyTarget: c,
	driver: u,
	onUpdate: f,
	onComplete: p,
	onStop: m
}) {
	let y;

	function w(_) {
		return n !== void 0 && _ < n || r !== void 0 && _ > r
	}

	function A(_) {
		return n === void 0 ? r : r === void 0 || Math.abs(n - _) < Math.abs(r - _) ? n : r
	}

	function T(_) {
		y == null || y.stop(), y = Kc(Object.assign(Object.assign({}, _), {
			driver: u,
			onUpdate: R => {
				var V;
				f == null || f(R), (V = _.onUpdate) === null || V === void 0 || V.call(_, R)
			},
			onComplete: p,
			onStop: m
		}))
	}

	function b(_) {
		T(Object.assign({
			type: "spring",
			stiffness: i,
			damping: l,
			restDelta: a
		}, _))
	}
	if (w(e)) b({
		from: e,
		velocity: t,
		to: A(e)
	});
	else {
		let _ = s * t + e;
		typeof c < "u" && (_ = c(_));
		const R = A(_),
			V = R === n ? -1 : 1;
		let M, D;
		const W = N => {
			M = D, D = N, t = Gc(N - M, wc().delta), (V === 1 && N > R || V === -1 && N < R) && b({
				from: N,
				to: R,
				velocity: t
			})
		};
		T({
			type: "decay",
			from: e,
			velocity: t,
			timeConstant: o,
			power: s,
			restDelta: a,
			modifyTarget: c,
			onUpdate: w(_) ? W : void 0
		})
	}
	return {
		stop: () => y == null ? void 0 : y.stop()
	}
}
const Yc = (e, t) => 1 - 3 * t + 3 * e,
	Qc = (e, t) => 3 * t - 6 * e,
	Jc = e => 3 * e,
	yr = (e, t, n) => ((Yc(t, n) * e + Qc(t, n)) * e + Jc(t)) * e,
	Zc = (e, t, n) => 3 * Yc(t, n) * e * e + 2 * Qc(t, n) * e + Jc(t),
	Mg = 1e-7,
	Bg = 10;

function Ig(e, t, n, r, s) {
	let o, i, l = 0;
	do i = t + (n - t) / 2, o = yr(i, r, s) - e, o > 0 ? n = i : t = i; while (Math.abs(o) > Mg && ++l < Bg);
	return i
}
const Lg = 8,
	Vg = .001;

function Fg(e, t, n, r) {
	for (let s = 0; s < Lg; ++s) {
		const o = Zc(t, n, r);
		if (o === 0) return t;
		const i = yr(t, n, r) - e;
		t -= i / o
	}
	return t
}
const lr = 11,
	Xn = 1 / (lr - 1);

function Ng(e, t, n, r) {
	if (e === t && n === r) return $c;
	const s = new Float32Array(lr);
	for (let i = 0; i < lr; ++i) s[i] = yr(i * Xn, e, n);

	function o(i) {
		let l = 0,
			a = 1;
		const c = lr - 1;
		for (; a !== c && s[a] <= i; ++a) l += Xn;
		--a;
		const u = (i - s[a]) / (s[a + 1] - s[a]),
			f = l + u * Xn,
			p = Zc(f, e, n);
		return p >= Vg ? Fg(i, f, e, n) : p === 0 ? f : Ig(i, l, l + Xn, e, n)
	}
	return i => i === 0 || i === 1 ? i : yr(o(i), t, r)
}
const ls = {};
var jg = Object.defineProperty,
	kg = (e, t, n) => t in e ? jg(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	Dg = (e, t, n) => (kg(e, t + "", n), n);
class Wg {
	constructor() {
		Dg(this, "subscriptions", new Set)
	}
	add(t) {
		return this.subscriptions.add(t), () => this.subscriptions.delete(t)
	}
	notify(t, n, r) {
		if (this.subscriptions.size)
			for (const s of this.subscriptions) s(t, n, r)
	}
	clear() {
		this.subscriptions.clear()
	}
}
var $g = Object.defineProperty,
	Hg = (e, t, n) => t in e ? $g(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	Je = (e, t, n) => (Hg(e, typeof t != "symbol" ? t + "" : t, n), n);

function il(e) {
	return !isNaN(parseFloat(e))
}
class Ug {
	constructor(t) {
		Je(this, "current"), Je(this, "prev"), Je(this, "timeDelta", 0), Je(this, "lastUpdated", 0), Je(this, "updateSubscribers", new Wg), Je(this, "stopAnimation"), Je(this, "canTrackVelocity", !1), Je(this, "updateAndNotify", n => {
			this.prev = this.current, this.current = n;
			const {
				delta: r,
				timestamp: s
			} = wc();
			this.lastUpdated !== s && (this.timeDelta = r, this.lastUpdated = s), Ms.postRender(this.scheduleVelocityCheck), this.updateSubscribers.notify(this.current)
		}), Je(this, "scheduleVelocityCheck", () => Ms.postRender(this.velocityCheck)), Je(this, "velocityCheck", ({
			timestamp: n
		}) => {
			this.canTrackVelocity || (this.canTrackVelocity = il(this.current)), n !== this.lastUpdated && (this.prev = this.current)
		}), this.prev = this.current = t, this.canTrackVelocity = il(this.current)
	}
	onChange(t) {
		return this.updateSubscribers.add(t)
	}
	clearListeners() {
		this.updateSubscribers.clear()
	}
	set(t) {
		this.updateAndNotify(t)
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		return this.canTrackVelocity ? Gc(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
	}
	start(t) {
		return this.stop(), new Promise(n => {
			const {
				stop: r
			} = t(n);
			this.stopAnimation = r
		}).then(() => this.clearAnimation())
	}
	stop() {
		this.stopAnimation && this.stopAnimation(), this.clearAnimation()
	}
	isAnimating() {
		return !!this.stopAnimation
	}
	clearAnimation() {
		this.stopAnimation = null
	}
	destroy() {
		this.updateSubscribers.clear(), this.stop()
	}
}

function qg(e) {
	return new Ug(e)
}
const {
	isArray: zg
} = Array;

function Kg() {
	const e = F({}),
		t = r => {
			const s = o => {
				e.value[o] && (e.value[o].stop(), e.value[o].destroy(), delete e.value[o])
			};
			r ? zg(r) ? r.forEach(s) : s(r) : Object.keys(e.value).forEach(s)
		},
		n = (r, s, o) => {
			if (e.value[r]) return e.value[r];
			const i = qg(s);
			return i.onChange(l => o[r] = l), e.value[r] = i, i
		};
	return Zh(t), {
		motionValues: e,
		get: n,
		stop: t
	}
}

function Gg(e) {
	return Array.isArray(e)
}

function jt() {
	return {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restDelta: .5,
		restSpeed: 10
	}
}

function as(e) {
	return {
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restDelta: .01,
		restSpeed: 10
	}
}

function Yg(e) {
	return {
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 100 : 30,
		restDelta: .01,
		restSpeed: 10
	}
}

function cs() {
	return {
		type: "keyframes",
		ease: "linear",
		duration: 300
	}
}

function Qg(e) {
	return {
		type: "keyframes",
		duration: 800,
		values: e
	}
}
const ll = {
	default: Yg,
	x: jt,
	y: jt,
	z: jt,
	rotate: jt,
	rotateX: jt,
	rotateY: jt,
	rotateZ: jt,
	scaleX: as,
	scaleY: as,
	scale: as,
	backgroundColor: cs,
	color: cs,
	opacity: cs
};

function Xc(e, t) {
	let n;
	return Gg(t) ? n = Qg : n = ll[e] || ll.default, {
		to: t,
		...n(t)
	}
}
const al = {
		...$n,
		transform: Math.round
	},
	eu = {
		color: Me,
		backgroundColor: Me,
		outlineColor: Me,
		fill: Me,
		stroke: Me,
		borderColor: Me,
		borderTopColor: Me,
		borderRightColor: Me,
		borderBottomColor: Me,
		borderLeftColor: Me,
		borderWidth: J,
		borderTopWidth: J,
		borderRightWidth: J,
		borderBottomWidth: J,
		borderLeftWidth: J,
		borderRadius: J,
		radius: J,
		borderTopLeftRadius: J,
		borderTopRightRadius: J,
		borderBottomRightRadius: J,
		borderBottomLeftRadius: J,
		width: J,
		maxWidth: J,
		height: J,
		maxHeight: J,
		size: J,
		top: J,
		right: J,
		bottom: J,
		left: J,
		padding: J,
		paddingTop: J,
		paddingRight: J,
		paddingBottom: J,
		paddingLeft: J,
		margin: J,
		marginTop: J,
		marginRight: J,
		marginBottom: J,
		marginLeft: J,
		rotate: Nt,
		rotateX: Nt,
		rotateY: Nt,
		rotateZ: Nt,
		scale: Zn,
		scaleX: Zn,
		scaleY: Zn,
		scaleZ: Zn,
		skew: Nt,
		skewX: Nt,
		skewY: Nt,
		distance: J,
		translateX: J,
		translateY: J,
		translateZ: J,
		x: J,
		y: J,
		z: J,
		perspective: J,
		transformPerspective: J,
		opacity: Tn,
		originX: tl,
		originY: tl,
		originZ: J,
		zIndex: al,
		filter: Fs,
		WebkitFilter: Fs,
		fillOpacity: Tn,
		strokeOpacity: Tn,
		numOctaves: al
	},
	go = e => eu[e];

function tu(e, t) {
	return t && typeof e == "number" && t.transform ? t.transform(e) : e
}

function Jg(e, t) {
	let n = go(e);
	return n !== Fs && (n = Hn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Zg = {
	linear: $c,
	easeIn: ho,
	easeInOut: Hc,
	easeOut: dg,
	circIn: Uc,
	circInOut: pg,
	circOut: qc,
	backIn: mo,
	backInOut: mg,
	backOut: hg,
	anticipate: gg,
	bounceIn: _g,
	bounceInOut: xg,
	bounceOut: gr
};

function cl(e) {
	if (Array.isArray(e)) {
		const [t, n, r, s] = e;
		return Ng(t, n, r, s)
	} else if (typeof e == "string") return Zg[e];
	return e
}

function Xg(e) {
	return Array.isArray(e) && typeof e[0] != "number"
}

function ul(e, t) {
	return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Hn.test(t) && !t.startsWith("url("))
}

function ey(e) {
	return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to], e.to[0] = e.from), e
}

function ty({
	ease: e,
	times: t,
	delay: n,
	...r
}) {
	const s = {
		...r
	};
	return t && (s.offset = t), e && (s.ease = Xg(e) ? e.map(cl) : cl(e)), n && (s.elapsed = -n), s
}

function ny(e, t, n) {
	return Array.isArray(t.to) && (e.duration || (e.duration = 800)), ey(t), ry(e) || (e = {
		...e,
		...Xc(n, t.to)
	}), {
		...t,
		...ty(e)
	}
}

function ry({
	delay: e,
	repeat: t,
	repeatType: n,
	repeatDelay: r,
	from: s,
	...o
}) {
	return !!Object.keys(o).length
}

function sy(e, t) {
	return e[t] || e.default || e
}

function oy(e, t, n, r, s) {
	const o = sy(r, e);
	let i = o.from === null || o.from === void 0 ? t.get() : o.from;
	const l = ul(e, n);
	i === "none" && l && typeof n == "string" && (i = Jg(e, n));
	const a = ul(e, i);

	function c(f) {
		const p = {
			from: i,
			to: n,
			velocity: r.velocity ? r.velocity : t.getVelocity(),
			onUpdate: m => t.set(m)
		};
		return o.type === "inertia" || o.type === "decay" ? Pg({
			...p,
			...o
		}) : Kc({
			...ny(o, p, e),
			onUpdate: m => {
				p.onUpdate(m), o.onUpdate && o.onUpdate(m)
			},
			onComplete: () => {
				r.onComplete && r.onComplete(), s && s(), f && f()
			}
		})
	}

	function u(f) {
		return t.set(n), r.onComplete && r.onComplete(), s && s(), f && f(), {
			stop: () => {}
		}
	}
	return !a || !l || o.type === !1 ? u : c
}

function iy() {
	const {
		motionValues: e,
		stop: t,
		get: n
	} = Kg();
	return {
		motionValues: e,
		stop: t,
		push: (s, o, i, l = {}, a) => {
			const c = i[s],
				u = n(s, c, i);
			if (l && l.immediate) {
				u.set(o);
				return
			}
			const f = oy(s, u, o, l, a);
			u.start(f)
		}
	}
}

function ly(e, t = {}, {
	motionValues: n,
	push: r,
	stop: s
} = iy()) {
	const o = Fe(t),
		i = F(!1);
	ee(n, f => {
		i.value = Object.values(f).filter(p => p.isAnimating()).length > 0
	}, {
		immediate: !0,
		deep: !0
	});
	const l = f => {
			if (!o || !o[f]) throw new Error(`The variant ${f} does not exist.`);
			return o[f]
		},
		a = f => (typeof f == "string" && (f = l(f)), Promise.all(Object.entries(f).map(([p, m]) => {
			if (p !== "transition") return new Promise(y => r(p, m, e, f.transition || Xc(p, f[p]), y))
		}).filter(Boolean)));
	return {
		isAnimating: i,
		apply: a,
		set: f => {
			const p = mr(f) ? f : l(f);
			Object.entries(p).forEach(([m, y]) => {
				m !== "transition" && r(m, y, e, {
					immediate: !0
				})
			})
		},
		leave: async f => {
			let p;
			if (o && (o.leave && (p = o.leave), !o.leave && o.initial && (p = o.initial)), !p) {
				f();
				return
			}
			await a(p), f()
		},
		stop: s
	}
}
const yo = typeof window < "u",
	ay = () => yo && window.onpointerdown === null,
	cy = () => yo && window.ontouchstart === null,
	uy = () => yo && window.onmousedown === null;

function fy({
	target: e,
	state: t,
	variants: n,
	apply: r
}) {
	const s = Fe(n),
		o = F(!1),
		i = F(!1),
		l = F(!1),
		a = G(() => {
			let u = [];
			return s && (s.hovered && (u = [...u, ...Object.keys(s.hovered)]), s.tapped && (u = [...u, ...Object.keys(s.tapped)]), s.focused && (u = [...u, ...Object.keys(s.focused)])), u
		}),
		c = G(() => {
			const u = {};
			Object.assign(u, t.value), o.value && s.hovered && Object.assign(u, s.hovered), i.value && s.tapped && Object.assign(u, s.tapped), l.value && s.focused && Object.assign(u, s.focused);
			for (const f in u) a.value.includes(f) || delete u[f];
			return u
		});
	s.hovered && (_e(e, "mouseenter", () => o.value = !0), _e(e, "mouseleave", () => {
		o.value = !1, i.value = !1
	}), _e(e, "mouseout", () => {
		o.value = !1, i.value = !1
	})), s.tapped && (uy() && (_e(e, "mousedown", () => i.value = !0), _e(e, "mouseup", () => i.value = !1)), ay() && (_e(e, "pointerdown", () => i.value = !0), _e(e, "pointerup", () => i.value = !1)), cy() && (_e(e, "touchstart", () => i.value = !0), _e(e, "touchend", () => i.value = !1))), s.focused && (_e(e, "focus", () => l.value = !0), _e(e, "blur", () => l.value = !1)), ee(c, r)
}

function dy({
	set: e,
	target: t,
	variants: n,
	variant: r
}) {
	const s = Fe(n);
	ee(() => t, () => {
		s && (s.initial && e("initial"), s.enter && (r.value = "enter"))
	}, {
		immediate: !0,
		flush: "pre"
	})
}

function py({
	state: e,
	apply: t
}) {
	ee(e, n => {
		n && t(n)
	}, {
		immediate: !0
	})
}

function nu({
	target: e,
	variants: t,
	variant: n
}) {
	const r = Fe(t);
	r && (r.visible || r.visibleOnce) && im(e, ([{
		isIntersecting: s
	}]) => {
		r.visible ? s ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (s && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
	})
}

function hy(e, t = {
	syncVariants: !0,
	lifeCycleHooks: !0,
	visibilityHooks: !0,
	eventListeners: !0
}) {
	t.lifeCycleHooks && dy(e), t.syncVariants && py(e), t.visibilityHooks && nu(e), t.eventListeners && fy(e)
}

function ru(e = {}) {
	const t = nt({
			...e
		}),
		n = F({});
	return ee(t, () => {
		const r = {};
		for (const [s, o] of Object.entries(t)) {
			const i = go(s),
				l = tu(o, i);
			r[s] = l
		}
		n.value = r
	}, {
		immediate: !0,
		deep: !0
	}), {
		state: t,
		style: n
	}
}

function bo(e, t) {
	ee(() => We(e), n => {
		n && t(n)
	}, {
		immediate: !0
	})
}
const my = {
	x: "translateX",
	y: "translateY",
	z: "translateZ"
};

function su(e = {}, t = !0) {
	const n = nt({
			...e
		}),
		r = F("");
	return ee(n, s => {
		let o = "",
			i = !1;
		if (t && (s.x || s.y || s.z)) {
			const l = [s.x || 0, s.y || 0, s.z || 0].map(J.transform).join(",");
			o += `translate3d(${l}) `, i = !0
		}
		for (const [l, a] of Object.entries(s)) {
			if (t && (l === "x" || l === "y" || l === "z")) continue;
			const c = go(l),
				u = tu(a, c);
			o += `${my[l]||l}(${u}) `
		}
		t && !i && (o += "translateZ(0px) "), r.value = o.trim()
	}, {
		immediate: !0,
		deep: !0
	}), {
		state: n,
		transform: r
	}
}
const gy = ["", "X", "Y", "Z"],
	yy = ["perspective", "translate", "scale", "rotate", "skew"],
	ou = ["transformPerspective", "x", "y", "z"];
yy.forEach(e => {
	gy.forEach(t => {
		const n = e + t;
		ou.push(n)
	})
});
const by = new Set(ou);

function vo(e) {
	return by.has(e)
}
const vy = new Set(["originX", "originY", "originZ"]);

function iu(e) {
	return vy.has(e)
}

function _y(e) {
	const t = {},
		n = {};
	return Object.entries(e).forEach(([r, s]) => {
		vo(r) || iu(r) ? t[r] = s : n[r] = s
	}), {
		transform: t,
		style: n
	}
}

function lu(e) {
	const {
		transform: t,
		style: n
	} = _y(e), {
		transform: r
	} = su(t), {
		style: s
	} = ru(n);
	return r.value && (s.value.transform = r.value), s.value
}

function xy(e, t) {
	let n, r;
	const {
		state: s,
		style: o
	} = ru();
	return bo(e, i => {
		r = i;
		for (const l of Object.keys(eu)) i.style[l] === null || i.style[l] === "" || vo(l) || iu(l) || (s[l] = i.style[l]);
		n && Object.entries(n).forEach(([l, a]) => i.style[l] = a), t && t(s)
	}), ee(o, i => {
		if (!r) {
			n = i;
			return
		}
		for (const l in i) r.style[l] = i[l]
	}, {
		immediate: !0
	}), {
		style: s
	}
}

function Ty(e) {
	const t = e.trim().split(/\) |\)/);
	if (t.length === 1) return {};
	const n = r => r.endsWith("px") || r.endsWith("deg") ? parseFloat(r) : isNaN(Number(r)) ? Number(r) : r;
	return t.reduce((r, s) => {
		if (!s) return r;
		const [o, i] = s.split("("), a = i.split(",").map(u => n(u.endsWith(")") ? u.replace(")", "") : u.trim())), c = a.length === 1 ? a[0] : a;
		return {
			...r,
			[o]: c
		}
	}, {})
}

function Ey(e, t) {
	Object.entries(Ty(t)).forEach(([n, r]) => {
		const s = ["x", "y", "z"];
		if (n === "translate3d") {
			if (r === 0) {
				s.forEach(o => e[o] = 0);
				return
			}
			r.forEach((o, i) => e[s[i]] = o);
			return
		}
		if (r = parseFloat(r), n === "translateX") {
			e.x = r;
			return
		}
		if (n === "translateY") {
			e.y = r;
			return
		}
		if (n === "translateZ") {
			e.z = r;
			return
		}
		e[n] = r
	})
}

function wy(e, t) {
	let n, r;
	const {
		state: s,
		transform: o
	} = su();
	return bo(e, i => {
		r = i, i.style.transform && Ey(s, i.style.transform), n && (i.style.transform = n), t && t(s)
	}), ee(o, i => {
		if (!r) {
			n = i;
			return
		}
		r.style.transform = i
	}, {
		immediate: !0
	}), {
		transform: s
	}
}

function Sy(e, t) {
	const n = nt({}),
		r = i => Object.entries(i).forEach(([l, a]) => n[l] = a),
		{
			style: s
		} = xy(e, r),
		{
			transform: o
		} = wy(e, r);
	return ee(n, i => {
		Object.entries(i).forEach(([l, a]) => {
			const c = vo(l) ? o : s;
			c[l] && c[l] === a || (c[l] = a)
		})
	}, {
		immediate: !0,
		deep: !0
	}), bo(e, () => t), {
		motionProperties: n,
		style: s,
		transform: o
	}
}

function Ay(e = {}) {
	const t = Fe(e),
		n = F();
	return {
		state: G(() => {
			if (n.value) return t[n.value]
		}),
		variant: n
	}
}

function au(e, t = {}, n) {
	const {
		motionProperties: r
	} = Sy(e), {
		variant: s,
		state: o
	} = Ay(t), i = ly(r, t), l = {
		target: e,
		variant: s,
		variants: t,
		state: o,
		motionProperties: r,
		...i
	};
	return hy(l, n), l
}
const Cy = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];

function Oy(e, t) {
	const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
	n && (n.variants && mr(n.variants) && (t.value = {
		...t.value,
		...n.variants
	}), Cy.forEach(r => {
		if (r === "delay") {
			if (n && n[r] && typeof n[r] == "number") {
				const s = n[r];
				t && t.value && (t.value.enter && (t.value.enter.transition || (t.value.enter.transition = {}), t.value.enter.transition = {
					delay: s,
					...t.value.enter.transition
				}), t.value.visible && (t.value.visible.transition || (t.value.visible.transition = {}), t.value.visible.transition = {
					delay: s,
					...t.value.visible.transition
				}), t.value.visibleOnce && (t.value.visibleOnce.transition || (t.value.visibleOnce.transition = {}), t.value.visibleOnce.transition = {
					delay: s,
					...t.value.visibleOnce.transition
				}))
			}
			return
		}
		if (n && n[r] && mr(n[r])) {
			const s = n[r];
			r === "visible-once" && (r = "visibleOnce"), t.value[r] = s
		}
	}))
}

function us(e) {
	return {
		created: (r, s, o) => {
			const i = s.value && typeof s.value == "string" ? s.value : o.key;
			i && ls[i] && ls[i].stop();
			const l = F(e || {});
			typeof s.value == "object" && (l.value = s.value), Oy(o, l);
			const c = au(r, l, {
				eventListeners: !0,
				lifeCycleHooks: !0,
				syncVariants: !0,
				visibilityHooks: !1
			});
			r.motionInstance = c, i && (ls[i] = c)
		},
		mounted: (r, s, o) => {
			r.motionInstance && nu(r.motionInstance)
		},
		getSSRProps(r, s) {
			let {
				initial: o
			} = r.value || s && (s == null ? void 0 : s.props) || {};
			o = Fe(o);
			const i = Sm((e == null ? void 0 : e.initial) || {}, o || {});
			return !i || Object.keys(i).length === 0 ? void 0 : {
				style: lu(i)
			}
		}
	}
}
const Ry = {
		initial: {
			opacity: 0
		},
		enter: {
			opacity: 1
		}
	},
	Py = {
		initial: {
			opacity: 0
		},
		visible: {
			opacity: 1
		}
	},
	My = {
		initial: {
			opacity: 0
		},
		visibleOnce: {
			opacity: 1
		}
	},
	By = {
		initial: {
			scale: 0,
			opacity: 0
		},
		enter: {
			scale: 1,
			opacity: 1
		}
	},
	Iy = {
		initial: {
			scale: 0,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1
		}
	},
	Ly = {
		initial: {
			scale: 0,
			opacity: 0
		},
		visibleOnce: {
			scale: 1,
			opacity: 1
		}
	},
	Vy = {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		enter: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Fy = {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		visible: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Ny = {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	jy = {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		enter: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	ky = {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		visible: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Dy = {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Wy = {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		enter: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	$y = {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		visible: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Hy = {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Uy = {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		enter: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	qy = {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		visible: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	zy = {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	Ky = {
		initial: {
			x: -100,
			opacity: 0
		},
		enter: {
			x: 0,
			opacity: 1
		}
	},
	Gy = {
		initial: {
			x: -100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1
		}
	},
	Yy = {
		initial: {
			x: -100,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			opacity: 1
		}
	},
	Qy = {
		initial: {
			x: 100,
			opacity: 0
		},
		enter: {
			x: 0,
			opacity: 1
		}
	},
	Jy = {
		initial: {
			x: 100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1
		}
	},
	Zy = {
		initial: {
			x: 100,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			opacity: 1
		}
	},
	Xy = {
		initial: {
			y: -100,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1
		}
	},
	eb = {
		initial: {
			y: -100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	},
	tb = {
		initial: {
			y: -100,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			opacity: 1
		}
	},
	nb = {
		initial: {
			y: 100,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1
		}
	},
	rb = {
		initial: {
			y: 100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	},
	sb = {
		initial: {
			y: 100,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			opacity: 1
		}
	},
	Ns = {
		__proto__: null,
		fade: Ry,
		fadeVisible: Py,
		fadeVisibleOnce: My,
		pop: By,
		popVisible: Iy,
		popVisibleOnce: Ly,
		rollBottom: Uy,
		rollLeft: Vy,
		rollRight: jy,
		rollTop: Wy,
		rollVisibleBottom: qy,
		rollVisibleLeft: Fy,
		rollVisibleOnceBottom: zy,
		rollVisibleOnceLeft: Ny,
		rollVisibleOnceRight: Dy,
		rollVisibleOnceTop: Hy,
		rollVisibleRight: ky,
		rollVisibleTop: $y,
		slideBottom: nb,
		slideLeft: Ky,
		slideRight: Qy,
		slideTop: Xy,
		slideVisibleBottom: rb,
		slideVisibleLeft: Gy,
		slideVisibleOnceBottom: sb,
		slideVisibleOnceLeft: Yy,
		slideVisibleOnceRight: Zy,
		slideVisibleOnceTop: tb,
		slideVisibleRight: Jy,
		slideVisibleTop: eb
	},
	ob = ve({
		props: {
			is: {
				type: [String, Object],
				required: !1
			},
			preset: {
				type: String,
				required: !1
			},
			instance: {
				type: Object,
				required: !1
			},
			variants: {
				type: Object,
				required: !1
			},
			initial: {
				type: Object,
				required: !1
			},
			enter: {
				type: Object,
				required: !1
			},
			leave: {
				type: Object,
				required: !1
			},
			visible: {
				type: Object,
				required: !1
			},
			visibleOnce: {
				type: Object,
				required: !1
			},
			hovered: {
				type: Object,
				required: !1
			},
			tapped: {
				type: Object,
				required: !1
			},
			focused: {
				type: Object,
				required: !1
			},
			delay: {
				type: [Number, String],
				required: !1
			}
		},
		setup(e) {
			var l;
			const t = Lf(),
				n = nt({});
			if (!e.is && !t.default) return () => Rn("div", {});
			const r = G(() => {
					let a;
					return e.preset && (a = Ns[e.preset]), a
				}),
				s = G(() => ({
					initial: e.initial,
					enter: e.enter,
					leave: e.leave,
					visible: e.visible,
					visibleOnce: e.visibleOnce,
					hovered: e.hovered,
					tapped: e.tapped,
					focused: e.focused
				})),
				o = G(() => {
					const a = {
						...s.value,
						...r.value || {},
						...e.variants || {}
					};
					return e.delay && (a.enter.transition = {
						...a.enter.transition
					}, a.enter.transition.delay = parseInt(e.delay)), a
				}),
				i = G(() => {
					if (!e.is) return;
					let a = e.is;
					return typeof i.value == "string" && !_u(a) && (a = Hl(a)), a
				});
			if (((l = process == null ? void 0 : process.env) == null ? void 0 : l.NODE_ENV) === "development" || process != null && process.dev) {
				const a = c => {
					var u;
					(u = c.variants) != null && u.initial && c.set("initial"), setTimeout(() => {
						var f, p, m;
						(f = c.variants) != null && f.enter && c.apply("enter"), (p = c.variants) != null && p.visible && c.apply("visible"), (m = c.variants) != null && m.visibleOnce && c.apply("visibleOnce")
					}, 10)
				};
				Ql(() => Object.entries(n).forEach(([c, u]) => a(u)))
			}
			return {
				slots: t,
				component: i,
				motionConfig: o,
				instances: n
			}
		},
		render({
			slots: e,
			motionConfig: t,
			instances: n,
			component: r
		}) {
			var l;
			const s = lu(t.initial || {}),
				o = (a, c) => (a.props || (a.props = {}), a.props.style = s, a.props.onVnodeMounted = ({
					el: u
				}) => {
					const f = au(u, t);
					n[c] = f
				}, a);
			if (r) {
				const a = Rn(r, void 0, e);
				return o(a, 0), a
			}
			return (((l = e.default) == null ? void 0 : l.call(e)) || []).map((a, c) => o(a, c))
		}
	});

function ib(e) {
	const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",
		n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",
		r = new RegExp(t.split("").join("|"), "g");
	return e.toString().replace(/[A-Z]/g, s => `-${s}`).toLowerCase().replace(/\s+/g, "-").replace(r, s => n.charAt(t.indexOf(s))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const lb = {
	install(e, t) {
		if (e.directive("motion", us()), e.component("Motion", ob), !t || t && !t.excludePresets)
			for (const n in Ns) {
				const r = Ns[n];
				e.directive(`motion-${ib(n)}`, us(r))
			}
		if (t && t.directives)
			for (const n in t.directives) {
				const r = t.directives[n];
				!r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`), e.directive(`motion-${n}`, us(r))
			}
	}
};
Hd(vm).use(Em).use(lb).use(Fp).mount("#app");
export {
	Pb as A, Cf as B, st as C, ac as D, Hl as E, Ze as F, Fn as G, yb as H, wb as I, Eb as J, Ab as K, Jr as L, _b as M, bb as N, Rb as O, xb as P, Cb as Q, rd as R, ab as S, ga as T, td as U, Tb as V, vb as W, be as X, cp as Y, Sb as Z, hb as a, Fe as b, mb as c, ve as d, Er as e, au as f, da as g, cc as h, nt as i, Mb as j, G as k, db as l, pb as m, wr as n, rt as o, Ve as p, ub as q, F as r, fb as s, Ae as t, Ob as u, cb as v, ee as w, gb as x, ut as y, nd as z
};