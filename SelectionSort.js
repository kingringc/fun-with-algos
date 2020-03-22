/**
* Selection Sort
*
* WIP, to feature both ascending &
* descending order sort.
* The current algo supports ascending order.
*/

export const selectionSort = array => {
	if (array.length && array.length > 1) {
		let _array = array.slice();
		const length = _array.length;
		let counter = 0;
		while (counter < length) {
			let arrayItem = _array[counter],
				smallestValue = arrayItem,
				smallestIndex = counter;
			for (let j = counter; j < length; j++) {
				if (_array[j] < smallestValue) {
					smallestValue = _array[j];
					smallestIndex = j;
				}
			}
			_array[smallestIndex] = arrayItem;
			_array[counter] = smallestValue;
			counter += 1;
		}
		return _array;
	}
	return array;
}