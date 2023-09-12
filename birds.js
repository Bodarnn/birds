/**
 * An array of data about birds!
 */
class BirdArray {
	/**
	 * Creates a new BirdArray.
	 * @param {Array} [data=[]] - An array.
	 */
	constructor(data = []) {
		this.data = data;
		return new Proxy(this, {
			/**
			 * Intercepts property assignment.
			 * @param {Object} target - A target.
			 * @param {string|symbol} property - A property.
			 * @param {*} value - A value.
			 * @returns {boolean} True.
			 */
			set(target, property, value) {
				if (property in target) {
					target[property] = value;
					return true;
				} else {
					const data = target.data;
					data[property] = value;
					return true;
				}
			},
			/**
			 * Intercepts property access.
			 * @param {Object} target - A target.
			 * @param {string|symbol} property - A property.
			 * @returns {*} A value.
			 */
			get(target, property) {
				if (property in target) {
					return target[property];
				} else {
					const data = target.data;
					return data[property];
				}
			}
		});
	}

	/**
	 * Converts a BirdArray to an Array.
	 * @returns {Array} An Array.
	 */
	array() {
		return this.data;
	} // TODO: this.data.slice()?

	/**
     * Calls a function for each element.
     * @param {function} callback - A callback function.
     * @returns {BirdArray} A BirdArray.
     */
	map(callback) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = callback(val);
		}
		return new BirdArray(result);
	}

	/**
	 * Adds a value to each element.
	 * @param {number} [x=0] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	add(x = 0) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val + x;
		}
		return new BirdArray(result);
	}

	/**
	 * Subtracts a value from each element.
	 * @param {number} [x=0] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	sub(x = 0) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val - x;
		}
		return new BirdArray(result);
	}

	/**
	 * Multiplies each element by a value.
	 * @param {number} [x=1] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	mult(x = 1) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val * x;
		}
		return new BirdArray(result);
	}

	/**
	 * Divides each element by a value.
	 * @param {number} [x=1] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	div(x = 1) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val / x;
		}
		return new BirdArray(result);
	}

	/**
	 * Raises each element to a value.
	 * @param {number} [x=1] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	power(x = 1) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val ** x;
		}
		return new BirdArray(result);
	}

	/**
	 * Takes a root of each element.
	 * @param {number} [x=1] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	root(x = 1) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val ** (1 / x);
		}
		return new BirdArray(result);
	}

	/**
	 * Takes the log of each element.
	 * @param {number} [x=Math.E] - A value.
	 * @returns {BirdArray} A BirdArray.
	 */
	log(x = Math.E) {
        const data = this.data;
        const n = data.length;
        let result = new Array(n);
        for (let i = 0; i < n; i++) {
            const val = data[i];
			const num = Math.log(val);
			const den = Math.log(x);
            result[i] = num / den;
        }
        return new BirdArray(result);
    }

	/**
	 * Finds the minimum value.
	 * @returns {number} A number.
	 */
	min() {
		const data = this.data;
		const n = data.length;
		let result = Infinity;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			if (val < result) {
				result = val;
			}
		}
		return result;
	}

	/**
	 * Finds the maximum value.
	 * @returns {number} A number.
	 */
	max() {
		const data = this.data;
		const n = data.length;
		let result = -Infinity;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			if (val > result) {
				result = val;
			}
		}
		return result;
	}

	/**
	 * Finds the range.
	 * @returns {number} A number.
	 */
	range() {
		const min = this.min();
		const max = this.max();
		return max - min;
	}

	/**
	 * Finds the median.
	 * @returns {number} A number.
	 */
	median() {
		const data = this.data;
		const n = data.length;
		const result = data.slice();
		result.sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		const i = Math.floor(n / 2);
		if (n % 2 === 0) {
			return (result[i - 1] + result[i]) / 2;
		} else {
			return result[i];
		}
	}

	/**
	 * Finds the first-quartile.
	 * @returns {number} A number.
	 */
	q1() {
		const data = this.data;
		const n = data.length;
		const result = data.slice();
		result.sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		const i = Math.floor(n / 4);
		if (n % 4 === 0) {
			return (result[i - 1] + result[i]) / 2;
		} else {
			return result[i];
		}
	}

	/**
	 * Finds the third-quartile.
	 * @returns {number} A number.
	 */
	q3() {
		const data = this.data;
		const n = data.length;
		const result = data.slice();
		result.sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		const i = Math.floor(3 * n / 4);
		if (n % 4 === 0) {
			return (result[i - 1] + result[i]) / 2;
		} else {
			return result[i];
		}
	}

	/**
	 * Finds the inter-quartile range.
	 * @returns {number} A number.
	 */
	iqr() {
		const q1 = this.q1();
		const q3 = this.q3();
		return q3 - q1;
	}

	/**
	 * Counts the number elements.
	 * @returns {number} A number.
	 */
	count() {
		const data = this.data;
		const n = data.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			if (val !== null) {
				result++
			}
		}
		return result;
	}

	/**
	 * Counts the number of elements that meet some condition(s).
	 * @param {function} [callback=(val) => val !== null] - A function that takes an element and returns a boolean.
	 * @returns {number} A number.
	 */
	countif(callback = (val) => val !== null) {
		const data = this.data;
		const n = data.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			if (callback(val)) {
				result++
			}
		}
		return result;
	}

	/**
	 * Calculates the sum.
	 * @returns {number} A number.
	 */
	sum() {
		const data = this.data;
		const n = data.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result += val;
		}
		return result;
	}

	/**
	 * Calculates the sum of elements that meet some condition(s).
	 * @param {function} [callback=(val) => true] - A function that takes an element and returns a boolean.
	 * @returns {number} A number.
	 */
	sumif(callback = (val) => true) {
		const data = this.data;
		const n = data.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			if (callback(val)) {
				result += val;
			}
		}
		return result;
	}

	/**
	 * Calculates the average.
	 * @returns {number} A number.
	 */
	avg() {
		const sum = this.sum();
		const count = this.count();
		return sum / count;
	}

	/**
	 * Calculates the total sum of squares.
	 * @returns {number} A number.
	 */
	tss() {
		const data = this.data;
		const n = data.length;
		const avg = this.avg();
		let result = 0;
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result += (val - avg) ** 2;
		}
		return result;
	}

	/**
	 * Calculates the variance.
	 * @param {boolean} [sample=true] - Whether to calculate the sample variance.
	 * @returns {number} A number.
	 */
	var(sample = true) {
		const tss = this.tss();
		const count = this.count();
		if (sample) {
			return tss / (count - 1);
		} else {
			return tss / count;
		}
	}

	/**
	 * Calculates the standard deviation.
	 * @param {boolean} [sample=true] - Whether to calculate the sample standard deviation.
	 * @returns {number} A number.
	 */
	stdev(sample = true) {
		const _var = this.var(sample);
		return _var ** 0.5;
	}

	/**
	 * Calculates the standard error.
	 * @param {boolean} [estimate=true] - Whether to estimate the standard error.
	 * @returns A number.
	 */
	sem(estimate = true) {
		const stdev = this.stdev(estimate);
		const count = this.count();
		return stdev / count ** 0.5
	}

	/**
	 * Finds the unique elements.
	 * @returns {BirdArray} A BirdArray.
	 */
	unique() {
		const data = this.data;
		const n = data.length;
		let result = new Set();
		for (let i = 0; i < n; i++) {
			const val = data[i];
			if (val !== null) {
				result.add(val);
			}
		}
		result = [...result];
		return new BirdArray(result);
	}

	/**
	 * Sorts the BirdArray.
	 * @param {number} [order=1] - How to sort. 1 for ascending. -1 for descending.
	 * @returns {BirdArray} A BirdArray.
	 */
	sort(order = 1) {
		const data = this.data;
		const result = data.slice();
		result.sort((a, b) => {
			if (a > b) return order;
			if (a < b) return -order;
			return 0;
		});
		return new BirdArray(result);
	}

	/**
	 * Filters the BirdArray.
	 * @param {function} [callback=(val) => true] - A function that takes an element and returns a boolean.
	 * @returns {BirdArray} A BirdArray.
	 */
	filter(callback = (val) => true) {
		const data = this.data;
		const result = data.filter(callback);
		return new BirdArray(result);
	}

	/**
	 * Replaces patterns in elements.
	 * @param {string|RegExp} pattern - A pattern.
	 * @param {string} replacement - A replacement.
	 * @returns {BirdArray} A BirdArray.
	 */
	replace(pattern, replacement) {
		const data = this.data;
		const n = data.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const val = data[i];
			result[i] = val.replace(pattern, replacement);
		}
		return new BirdArray(result);
	}

}

/**
 * A collection of data about birds!
 */
class Bird {
	/**
	 * Creates a new Bird.
	 * @param {Object[]} [data=[]] - An array of objects.
	 */
	constructor(data = []) {
		this.data = data;
		return new Proxy(this, {
			/**
			 * Intercepts property assignment.
			 * @param {Object} target - A target.
			 * @param {string|symbol} property - A property.
			 * @param {*} value - A value.
			 * @returns {boolean} True.
			 */
			set(target, property, value) {
				if (property in target) {
					target[property] = value;
				} else {
					const data = target.data;
					const n = data.length;
					for (let i = 0; i < n; i++) {
						const row = data[i];
						const val = value[i];
						row[property] = val;
					}
					const N = value.length;
					for (let i = n; i < N; i++) {
						const row = {};
						const val = value[i];
						row[property] = val;
						data.push(row);
					}
				}
				return true;
			},
			/**
			 * Intercepts property access.
			 * @param {Object} target - A target.
			 * @param {string|symbol} property - A property.
			 * @returns {*} A value.
			 */
			get(target, property) {
				if (property in target) {
					return target[property];
				} else {
					const data = target.data;
					const n = data.length;
					let result = new Array(n);
					for (let i = 0; i < n; i++) {
						const row = data[i];
						const value = row[property];
						result[i] = value;
					}
					return new BirdArray(result);
				}
			}
		});
	}

	/**
	 * Creates a Bird of birds!
	 * @returns {Bird} A Bird.
	 */
	static example() {
		return new Bird([
			{
				"species": "sparrow",
				"color": "brown",
				"diet": "seeds",
				"weight": 24,
				"lifespan": 4,
				"wingspan": 19
			},
			{
				"species": "parrot",
				"color": "green",
				"diet": "fruit",
				"weight": 150,
				"lifespan": 80,
				"wingspan": 20
			},
			{
				"species": "pigeon",
				"color": "gray",
				"diet": "seeds",
				"weight": 300,
				"lifespan": 6,
				"wingspan": 50
			},
			{
				"species": "eagle",
				"color": "brown",
				"diet": "meat",
				"weight": 4000,
				"lifespan": 20,
				"wingspan": 200
			},
			{
				"species": "owl",
				"color": "black",
				"diet": "meat",
				"weight": 1500,
				"lifespan": 10,
				"wingspan": 150
			}
		]);
	}

	/**
	 * Gets the unique columns.
	 * @returns {Array} An array.
	 */
	get cols() {
		const data = this.data;
		const n = data.length;
		let result = new Set();
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (const col in row) {
				result.add(col);
			}
		}
		return [...result];
	}

	/**
	 * Gets the length.
	 * @returns {number} A number.
	 */
	get length() {
		return this.data.length;
	}

	/**
	 * Yields the values of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @yields {*} A generator.
	 */
	*vals(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				yield val;
			}
		}
	} // TODO: Remove? Unused. +space complexity. -time complexity.

	/**
	 * Calculates the element-wise sums of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	add(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result[i] += val;
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Calculates the element-wise differences of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	sub(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result[i] -= val;
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Calculates the element-wise products of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	mult(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result[i] *= val;
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Calculates the element-wise quotients of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	div(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result[i] /= val;
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Calculates the element-wise powers of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	power(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result[i] = result[i] ** val;
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Calculates the element-wise roots of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	root(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result[i] = result[i] ** (1 / val);
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Calculates the element-wise log of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	log(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			const col = cols[0];
			const val = row[col];
			result[i] = val;
		}
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 1; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				const num = Math.log(result[i]);
				const den = Math.log(val);
				result[i] = num / den;
			}
		}
		return new BirdArray(result);
	}

	/**
	 * Finds the minimum value of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	min(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = Infinity;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				if (val < result) {
					result = val;
				}
			}
		}
		return result;
	}

	/**
	 * Finds the maximum value of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	max(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = -Infinity;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				if (val > result) {
					result = val;
				}
			}
		}
		return result;
	}

	/**
	 * Finds the range of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	range(cols = this.cols) {
		const min = this.min(cols);
		const max = this.max(cols);
		return max - min;
	}

	/**
	 * Finds the median of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	median(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = [];
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result.push(val);
			}
		}
		result.sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		const i = Math.floor(n / 2);
		if (n % 2 === 0) {
			return (result[i - 1] + result[i]) / 2;
		} else {
			return result[i];
		}
	}

	/**
	 * Finds the first-quartile of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	q1(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = [];
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result.push(val);
			}
		}
		result.sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		const i = Math.floor(n / 4);
		if (n % 4 === 0) {
			return (result[i - 1] + result[i]) / 2;
		} else {
			return result[i];
		}
	}

	/**
	 * Finds the third-quartile of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	q3(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = [];
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result.push(val);
			}
		}
		result.sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		const i = Math.floor(3 * n / 4);
		if (n % 4 === 0) {
			return (result[i - 1] + result[i]) / 2;
		} else {
			return result[i];
		}
	}

	/**
	 * Finds the inter-quartile range of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	iqr(cols = this.cols) {
		const q1 = this.q1(cols);
		const q3 = this.q3(cols);
		return q3 - q1;
	}

	/**
	 * Counts the number of elements in columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	count(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				if (val !== null) {
					result++;
				}
			}
		}
		return result;
	}

	/**
	 * Counts the number of elements in columns that meet some condition(s).
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @param {function} [callback=(val) => val !== null] - A function that takes an element and returns a boolean.
	 * @returns {number} A number.
	 */
	countif(cols = this.cols, callback = (val) => val !== null) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				if (callback(val)) {
					result++;
				}
			}
		}
		return result;
	}

	/**
	 * Calculates the sum of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	sum(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result += val;
			}
		}
		return result;
	}

	/**
	 * Calculates the sum of columns that meet some condition(s).
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @param {function} [callback=(val) => true] - A function that takes an element and returns a boolean.
	 * @param {string[]|symbol[]} [sumCols=undefined] - An array of columns.
	 * @returns {number} A number.
	 */
	sumif(cols = this.cols, callback = (val) => true, sumCols = undefined) {
		if (sumCols === undefined) {
			sumCols = cols;
		}
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = 0;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				const sumCol = sumCols[j];
				const sumVal = row[sumCol];
				if (callback(val)) {
					result += sumVal;
				}
			}
		}
		return result;
	}

	/**
	 * Calculates the average of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	avg(cols = this.cols) {
		const sum = this.sum(cols);
		const count = this.count(cols);
		return sum / count;
	}

	/**
	 * Calculates the total sum of squares of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {number} A number.
	 */
	tss(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		const avg = this.avg(cols);
		let result = 0;
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				result += (val - avg) ** 2;
			}
		}
		return result;
	}

	/**
	 * Calculates the variance of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @param {boolean} [sample=true] - Whether to calculate the sample variance.
	 * @returns {number} A number.
	 */
	var(cols = this.cols, sample = true) {
			const tss = this.tss(cols);
			const count = this.count(cols);
		if (sample) {
			return tss / (count - 1);
		} else {
			return tss / count;
		}
	}

	/**
	 * Calculates the standard deviation of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @param {boolean} [sample=true] - Whether to calculate the sample standard deviation.
	 * @returns {number} A number.
	 */
	stdev(cols = this.cols, sample = true) {
		const _var = this.var(cols, sample);
		return _var ** 0.5;
	}

	/**
	 * Calculates the standard error of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @param {boolean} [estimate=true] - Whether to estimate the standard error.
	 * @returns A number.
	 */
	sem(cols = this.cols, estimate = true) {
		const stdev = this.stdev(cols, estimate);
		const count = this.count(cols);
		return stdev / count ** 0.5
	}

	/**
	 * Finds the unique elements of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @returns {BirdArray} A BirdArray.
	 */
	unique(cols = this.cols) {
		const data = this.data;
		const n = data.length;
		const m = cols.length;
		let result = new Set();
		for (let i = 0; i < n; i++) {
			const row = data[i];
			for (let j = 0; j < m; j++) {
				const col = cols[j];
				const val = row[col];
				if (val !== null) {
					result.add(val);
				}
			}
		}
		result = [...result];
		return new BirdArray(result);
	}

	/**
	 * Sorts the BirdArray by a column.
	 * @param {string} [col=this.cols[0]] - A column.
	 * @param {number} [order=1] - How to sort. 1 for ascending. -1 for descending.
	 * @returns {Bird} A Bird.
	 */
	sortby(col = this.cols[0], ascending = 1) {
		const data = this.data;
		const result = data.slice();
		result.sort((a, b) => {
			const x = a[col];
			const y = b[col];
			if (x > y) return order;
			if (x < y) return -order;
			return order;
		});
		return new Bird(result);
	}

	/**
	 * Filters the BirdArray.
	 * @param {function} [callback=(row) => true] - A function that takes an object and returns a boolean.
	 * @returns {Bird} A Bird.
	 */
	filterby(callback = (row) => true) {
		const data = this.data;
		const result = data.filter(callback);
		return new Bird(result);
	}

	/**
	 * Replaces pattern in elements of columns.
	 * @param {string[]|symbol[]} [cols=this.cols] - An array of columns.
	 * @param {string|RegExp} pattern - A pattern.
	 * @param {string} replacement - A replacement.
	 * @returns {Bird} A Bird.
	 */
	replace(cols = this.cols, pattern, replacement) {
		const data = this.data;
		const n = data.length;
		const allCols = this.cols;
		const m = allCols.length;
		let result = new Array(n);
		for (let i = 0; i < n; i++) {
			const row = data[i];
			let temp = {};
			for (let j = 0; j < m; j++) {
				const col = allCols[j];
				let val = row[col];
				if (cols.includes(col)) {
					val = val.replace(pattern, replacement);
				}
				temp[col] = val;
			}
			result[i] = temp;
		}
		return new Bird(result);
	} // TODO: I just don't like this.

	/**
	 * Slices the first n rows.
	 * @param {number} [rows=10] - The number of rows.
	 * @returns {Bird} A Bird.
	 */
	head(rows = 10) {
		const data = this.data;
		const N = data.length;
		let n = rows <= N ? rows : N;
		const result = data.slice(0, n);
		return new Bird(result);
	}

	/**
	 * Slices the last n rows.
	 * @param {number} [rows=10] - The number of rows.
	 * @returns {Bird} A Bird.
	 */
	tail(rows = 10) {
		const data = this.data;
		const N = data.length;
		let n = rows <= N ? rows : N;
		const result = data.slice(N - n);
		return new Bird(result);
	}

	/**
	 * Prints the Bird.
	 */
	print() {
		const data = this.data;
		console.table(data);
	}

}