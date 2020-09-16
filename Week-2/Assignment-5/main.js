function binarySearchPosition(numbers, target) { 
 	let firstIdx=0,lastIdx=numbers.length-1,midIdx=Math.floor((firstIdx+lastIdx)/2);
 	while(numbers[midIdx]!=target && firstIdx<lastIdx)
 	{
 		if(target<numbers[midIdx])
 		{
 			lastIdx=midIdx-1;
 		}
 		else if(target>numbers[midIdx])
 		{
 			firstIdx=midIdx+1;
 		}
 		midIdx=Math.floor((firstIdx+lastIdx)/2);
 	}
 	return midIdx;

 	if(numbers[midIdx]==target){return midIdx;}
} 

console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0 
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3