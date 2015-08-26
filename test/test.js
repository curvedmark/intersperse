var assert = require('assert');
var intersperse = require('..');

describe('intersperse', function () {
	it("should return a new array for empty array", function () {
		var arr = [];
		var newArr = intersperse(arr);

		assert.deepEqual(newArr, []);
		assert.deepEqual(arr, []);
		assert.ok(newArr !== arr);
	});

	it("should return a new array for single-item array", function () {
		var arr = [1];
		var newArr = intersperse(arr);

		assert.deepEqual(newArr, [1]);
		assert.deepEqual(arr, [1]);
		assert.ok(newArr !== arr);
	});

	it("should return a new interspersed array", function () {
		var arr = [1, 2, 3];
		var newArr = intersperse(arr, 'a');

		assert.deepEqual(newArr, [1, 'a', 2, 'a', 3]);
		assert.deepEqual(arr, [1, 2, 3]);
	});

	it("should accept function as a parameter", function () {
		var arr = [1, 2, 3];
		var newArr = intersperse(arr, function() {
			return 'a';
		});

		assert.deepEqual(newArr, [1, 'a', 2, 'a', 3]);
		assert.deepEqual(arr, [1, 2, 3]);
	});

	it("should input previous, next and index values for function", function () {
		var arr = [1, 2];
		var newArr = intersperse(arr, function(prev, next, i) {
			assert.equal(prev, 1);
			assert.equal(next, 2);
			assert.equal(i, 1);
		});
	});
});
