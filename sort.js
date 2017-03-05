var Either = require('data.either');

function checkElm(elm) {
	console.log(elm);
	if(elm=='invalid elm')
		return Either.Left("error there was invalid element");
	return Either.Right("");
}
function isSmaller(elm1, elm2){
	return elm1<elm2;
}

//Wrost case: O(n^2) 
//Avg/Best case: O(n log n)
function quicksort(arr) {
    var pivot, 
        pi = Math.floor(Math.random() * arr.length), // Random pivot index
        below = [], 
        above = [], 
        i, l;
		
    if(arr.length < 2) return Either.Right(arr);

    pivot = arr.splice(pi, 1).pop();

    for (i = 0, l = arr.length; i < l; i++) {

				var maybeError = checkElm(arr[i]);
				if (maybeError.isLeft) return maybeError;

        if (isSmaller(arr[i],pivot)) 
					below.push(arr[i]);
        else 
					above.push(arr[i]);
    }

    return quicksort(below)
		.chain(leftArr=> 
			quicksort(above).map(rightArr=>
				[].concat(leftArr,pivot,rightArr)
			)
		);
}

module.exports = quicksort;
