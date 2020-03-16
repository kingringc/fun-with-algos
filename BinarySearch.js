/**
* A simple logic to find the sum (subarray) from the
* given array
* Eg: [2, 3, 4, 5, 5, 7, 3]
* Answer: [[5, 5], [7, 3]]
*/
export const findSubarray = (inputArray, sum) => {
	const _inputArray = inputArray.slice();
	const arrayLength = _inputArray.length;
	let counter = 0;
	let subArray = [];
	if (arrayLength && arrayLength > 1) {
		while (counter < arrayLength) {
			let firstItem = _inputArray[counter];
			for (let j = counter + 1; j < arrayLength; j++) {
				if (_inputArray[counter] + _inputArray[j] ===  sum) {
					subArray.push([_inputArray[counter], _inputArray[j]])
				} 
			}
			counter += 1;
		}
		return subArray;
	}
	return inputArray;
}
