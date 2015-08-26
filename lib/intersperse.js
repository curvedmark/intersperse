module.exports = intersperse;

function intersperse(arr, value) {
	if (!arr.length) return [];
	if (arr.length === 1) return arr.slice(0);

	var items = [arr[0]];
	for (var i = 1, len = arr.length; i < len; ++i) {
		var obj = typeof value === 'function' ? value(arr[i - 1], arr[i], i) : value;
		items.push(obj, arr[i]);
	}

	return items;
}