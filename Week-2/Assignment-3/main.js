function count(input) { 
	let counter1 = {};
	for(let val of input){
		counter1[val]=(counter1[val]||0)+1;
	}
	return counter1;
} 

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x']; 
console.log(count(input1));  
// should print {'a':3, 'b':1, 'c':2, ‘x':1} 

function groupByKey(input) { 
	let counter2={};
	for(let val of input){
		counter2[val.key]=(counter2[val.key]||0)+val.value;
	}
	return counter2;
} 

let input2 = [ 
    {key: 'a', value: 3}, 
    {key: 'b', value: 1}, 
    {key: 'c', value: 2}, 
    {key: 'a', value: 3}, 
    {key: 'c', value: 5} 
] 
console.log(groupByKey(input2));  
// should print {'a':6, 'b':1, ‘c’:7} 

