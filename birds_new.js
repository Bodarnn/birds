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
