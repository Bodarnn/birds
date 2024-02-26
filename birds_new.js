// https://github.com/zloirock/core-js/blob/master/deno/corejs/index.js
// file:///C:/Users/Brand/Desktop/test/index.html

// arr_1 = [1, 2, 3, 4];
// arr_2 = [5, 6, 7, 8];
// obj_1 = {"a": 1, "b": 2, "c": 3, "d": 4};
// obj_2 = {"e": 5, "f": 6, "g": 7, "h": 8};
// bd = new Birds.Array();

// Note to self:
// Copy Array: copy = array.slice();
// Iterate Object: for...in
// Iterate Array: for...of

const Birds = { // Birds namespace
	Array: function (values, keys) { // Array constructor
		if (values === undefined || values === null) { // values is undefined...
			if (keys === undefined || keys === null) { // ...and keys is undefined
				this.values = [];
				this.keys = [];
				this.length = 0;
			} else if (Array.isArray(keys)) { // ...and keys is an Array
				this.values = [];
				this.keys = keys.slice();
				this.length = this.values.length = keys.length;
			} else if (typeof keys === "object") { // ...and keys is an Object
				this.values = [];
				this.keys = [];
				for (const key in keys) {
					if (keys.hasOwnProperty(key)) {
						this.values.push(key); // Testing
						this.keys.push(keys[key]); // Testing
					}
				}
				this.length = this.values.length = this.keys.length;
			}
		} else if (Array.isArray(values)) { // values is an Array...
			if (keys === undefined || keys === null) { // ...and keys is undefined
				this.values = values.slice();
				this.keys = [];
				this.length = this.keys.length = values.length;
			} else if (Array.isArray(keys)) { // ...and keys is an Array
				this.values = values.slice();
				this.keys = keys.slice();
				this.length = this.keys.length = this.values.length = Math.max(values.length, keys.length);
			} else if (typeof keys === "object") { // ...and keys is in Object
				this.values = values.slice();
				this.keys = [];
				for (const key in keys) {
					if (keys.hasOwnProperty(key)) {
						this.keys.push(key); // Testing
					}
				}
				this.length = this.keys.length = this.values.length = Math.max(values.length, this.keys.length);
			}
		} else if (typeof values === "object") { // values is an Object...
			if (keys === undefined || keys === null) { // ...and keys is undefined
				this.values = [];
				this.keys = [];
				for (const key in values) {
					if (values.hasOwnProperty(key)) {
						this.values.push(values[key]);
						this.keys.push(key);
					}
				}
				this.length = this.values.length;
			} else if (Array.isArray(keys)) { // ...and keys is an Array
				this.values = [];
				for (const key in values) {
					if (values.hasOwnProperty(key)) {
						this.values.push(values[key]);
					}
				}
				this.keys = keys.slice();
				this.length = this.keys.length = this.values.length = Math.max(this.values.length, keys.length);
			} else if (typeof keys === "object") { // ...and keys is an Object
				this.values = [];
				for (const key in values) {
					if (values.hasOwnProperty(key)) {
						this.values.push(values[key]);
					}
				}
				this.keys = [];
				for (const key in keys) {
					if (keys.hasOwnProperty(key)) {
						this.keys.push(key); // Testing
					}
				}
				this.length = this.keys.length = this.values.length = Math.max(this.values.length, this.keys.length);
			}
		} else {
			throw new Error("Bird not found");
		}
		return new Proxy(this, { // Proxy handler
			get: function (target, property) { // Get trap
				if (property in target) { // Get special properties and methods
					return target[property];
				}
				if (property % 1 === 0) { // Get integer key
					if (property < 0) {
						property -= -target.length;
					}
					return target.values[property];
				}
				for (let i = 0; i < target.length; i++) { // Get string key
					if (target.keys[i] === property) {
						return target.values[i];
					}
				}
			},
			set: function (target, property, value) { // Set trap
				if (property === "values") { // Set value
					if (Array.isArray(value)) {
						target.values = value;
						target.length = target.keys.length = value.length;
					} else {
						throw new Error("values must be an Array");
					}
				} else if (property === "keys") { // Set keys
					if (Array.isArray(keys)) {
						target.keys = value;
						target.length = target.values.length = value.length;
					} else {
						throw new Error("keys must be an Array");
					}
				} else if (property === "length") { // Set length
					if (value % 1 === 0) {
						target.length = target.keys.length = target.values.length = Number.parseInt(value); // bd.length = [5]
					} else {
						throw new Error("length must be an Integer");
					}
				} else if (property % 1 === 0) { // Set integer key
					if (property < 0) {
						property -= -target.length;
						if (property < 0) {
							return false;
						}
					}
					target.values[property] = value;
					target.length = target.keys.length = target.values.length; // Every time?
				} else { // Set string key
					for (let i = 0; i < target.length; i++) {
						if (target.keys[i] === property) {
							target.values[i] = value;
							return true;
						}
					}
					target.values.push(value);
					target.keys.push(property);
					target.length++;
				}
				return true;
			}
		});
	}
};

Birds.Array.prototype.at = function (index) {
	return this[index];
};

Birds.Array.prototype.concat = function (values, keys) {
	if (values === undefined || values === null) {
		if (keys === undefined || keys === null) {
			//
		} else if (Array.isArray(keys)) {
			//
		} else if (keys instanceof Birds.Array) {
			//
		} else if (typeof keys === "object") {
			//
		}
	} else if (Array.isArray(values)) {
		if (keys === undefined || keys === null) {
			//
		} else if (Array.isArray(keys)) {
			//
		} else if (keys instanceof Birds.Array) {
			//
		} else if (typeof keys === "object") {
			//
		}
	} else if (values instanceof Birds.Array) {
		if (keys === undefined || keys === null) {
			//
		} else if (Array.isArray(keys)) {
			//
		} else if (keys instanceof Birds.Array) {
			//
		} else if (typeof keys === "object") {
			//
		}
	} else if (typeof values === "object") {
		if (keys === undefined || keys === null) {
			//
		} else if (Array.isArray(keys)) {
			//
		} else if (keys instanceof Birds.Array) {
			//
		} else if (typeof keys === "object") {
			//
		}
	}
};

Birds.Array.prototype.map = function (callbackfn) {
	const values = this.values;
	const m = this.length;
	let result = new Array(m);
	for (let j = 0; j < m; j++) {
		result[j] = callbackfn(values[j]);
	}
	return new Birds.Array(result, this.keys);
};

Birds.Array.prototype[Symbol.iterator] = function () {
	const values = this.values;
	const m = this.length;
	let j = 0;
	return {
		next: function () {
			if (j < m) {
				return { value: values[j++], done: false };
			} else {
				return { done: true };
			}
		}
	};
};

Birds.Array.prototype.myMethod = function () {
	// Your method code here
};

// https://minify-js.com/
// https://unminify.com/
// Benchmark for getting keys and values
function benchmarkObject() { const e = {}; for (let o = 0; o < 1e4; o++)e[`k${o}`] = `v${o}`; const o = 1e3; let n, r; console.log("Get Keys"), n = performance.now(); for (let n = 0; n < o; n++) { const o = Object.keys(e) } r = performance.now(), console.log(`Object.keys(): ${(r - n) / o} ms`), n = performance.now(); for (let n = 0; n < o; n++) { let o = []; for (const n in e) e.hasOwnProperty(n) && o.push(n) } r = performance.now(), console.log(`for...in: ${(r - n) / o} ms`), console.log("Get Values"), n = performance.now(); for (let n = 0; n < o; n++) { let o = []; for (const n in e) e.hasOwnProperty(n) && o.push(e[n]) } r = performance.now(), console.log(`for...in: ${(r - n) / o} ms`), n = performance.now(); for (let n = 0; n < o; n++) { const o = Object.values(e) } r = performance.now(), console.log(`Object.values(): ${(r - n) / o} ms`), console.log("Get Entries"), n = performance.now(); for (let n = 0; n < o; n++) { const o = Object.keys(e); let n = []; for (let r = 0; r < o.length; r++)n.push(e[o[r]]) } r = performance.now(), console.log(`Object.keys() & for: ${(r - n) / o} ms`), n = performance.now(); for (let n = 0; n < o; n++) { let o = [], n = []; for (const r in e) e.hasOwnProperty(r) && (o.push(r), n.push(e[r])) } r = performance.now(), console.log(`for...in: ${(r - n) / o} ms`), n = performance.now(); for (let n = 0; n < o; n++) { let o = [], n = []; for (const [r, s] of Object.entries(e)) o.push(r), n.push(s) } r = performance.now(), console.log(`Object.entries(): ${(r - n) / o} ms`), n = performance.now(); for (let n = 0; n < o; n++) { const o = Object.keys(e), n = Object.values(e) } r = performance.now(), console.log(`Object.keys() & Object.values(): ${(r - n) / o} ms`) }
// Benchmark for copying Arrays
function benchmarkArray() { const o = Array.from({ length: 1e4 }, ((o, e) => `index${e + 1}`)), e = 1e3; let r, n; console.log("Copy Array"), r = performance.now(); for (let r = 0; r < e; r++) { const e = o.slice() } n = performance.now(), console.log(`Arr.slice(): ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = o.concat() } n = performance.now(), console.log(`Array.concat(): ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = Object.values(o) } n = performance.now(), console.log(`Object.values(): ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = []; for (let r = 0; r < o.length; r++)e.push(o[r]) } n = performance.now(), console.log(`for: ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = o.map((o => o)) } n = performance.now(), console.log(`Array.map(): ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = []; o.forEach((o => e.push(o))) } n = performance.now(), console.log(`Array.forEach(): ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = Array.from(o) } n = performance.now(), console.log(`Array.from(): ${(n - r) / e} ms`), r = performance.now(); for (let r = 0; r < e; r++) { const e = [...o] } n = performance.now(), console.log(`...: ${(n - r) / e} ms`) }
// Benchmark for loops
function benchmarkLoop() { const o = Array.from({ length: 1e4 }, ((o, e) => `index${e + 1}`)), e = 1e3; let n, r; n = performance.now(); for (let n = 0; n < e; n++) { let e = []; for (const n of o) e.push(n + 1) } r = performance.now(), console.log(`for...of: ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = []; for (let n = 0; n < o.length; n++)e.push(o[n] + 1) } r = performance.now(), console.log(`for loop (push): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = []; for (let n = 0; n < o.length; n++)e[n] = o[n] + 1 } r = performance.now(), console.log(`for loop (index): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = 0, n = []; for (; e < o.length;)n.push(o[e] + 1), e++ } r = performance.now(), console.log(`while (push): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = 0, n = []; for (; e < o.length;)n[e] = o[e] + 1, e++ } r = performance.now(), console.log(`while (index): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = 0, n = []; do { n.push(o[e] + 1), e++ } while (e < o.length) } r = performance.now(), console.log(`do-while (push): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = 0, n = []; do { n[e] = o[e] + 1, e++ } while (e < o.length) } r = performance.now(), console.log(`do-while (index): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = []; o.forEach((o => { e.push(o + 1) })) } r = performance.now(), console.log(`forEach (push): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = []; o.forEach(((o, n) => { e[n] = o + 1 })) } r = performance.now(), console.log(`forEach (index): ${(r - n) / e} ms`), n = performance.now(); for (let n = 0; n < e; n++) { let e = o.map((o => o + 1)) } r = performance.now(), console.log(`map: ${(r - n) / e} ms`) }