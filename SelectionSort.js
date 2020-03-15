/**
* Selection Sort
*
*/

/**
* WIP, to feature both ascending &
* descending order sort.
*
*/
export const selectionSort = (numberArray, asc = true) => {
	if (numberArray.length && numberArray.length > 1) {
		let _numberAray = numberArray.slice();
		const length = _numberAray.length;
		let counter = 0;
		while(counter < length) {
			let arrayItem = _numberAray[counter],
				smallestValue = arrayItem,
				smallestIndex = counter;
			for(let j = counter; j < length; j++) {
				if (_numberAray[j] < smallestValue) {
					smallestValue = _numberAray[j];
					smallestIndex = j;
				}
			}
			_numberAray[smallestIndex] = arrayItem;
			_numberAray[counter] = smallestValue;
			counter += 1;
		}
		return _numberAray;
	}
	return numberArray;
}