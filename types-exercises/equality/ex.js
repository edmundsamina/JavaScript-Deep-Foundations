// TODO: write `findAll(..)`

function findAll(matchValue, array){
	//initalise empty array to push all the matching values into, before returning
const returnArray = []
//loop though the array checking each value against the matchValue.
for(let i = 0; i < array.length; i++){
			//first check which values are equal WITHOUT coercion, if they match without coersion they would be the same value.
	if(Object.is(matchValue, array[i])){
		//if this if statement resolves to be true, then the values do match and it can be pushed to the returnArray
		returnArray.push(array[i])
		//next check which values and be coerced into matching, the array should also include all coersice matches

		//checl if both the types are booleans first (booleans can only match booleans in the excercise instructions)
	} else if(typeof matchValue == 'boolean' &&  typeof array[i] == 'boolean'){
		//if they are both booleans check if they are equal to each other, we can use the double == because we know both the types are the same
		if(matchValue == array[i]){
			returnArray.push(array[i])

		}
		//checking for string matches
	} else if (typeof matchValue == 'string' &&  matchValue.trim() !== '' && typeof array[i] == 'number' && !Object.is(array[i], -0)){
		if(matchValue == array[i])
		{
			returnArray.push(array[i])
		}

	} else if (typeof matchValue == 'number' && matchValue !== NaN && matchValue !== Infinity && matchValue !== -Infinity && typeof array[i] == 'string' && array[i].trim() !== '' && !Object.is(matchValue, -0)){
		if(matchValue == array[i])
		{
			returnArray.push(array[i])
		}

	} else if (matchValue == null  && array[i] == undefined ){
		returnArray.push(array[i])

	}
}

return returnArray
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
