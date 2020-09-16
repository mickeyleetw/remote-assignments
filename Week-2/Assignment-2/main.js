function avg(data) { 
	let sumT=0,avg=0;
	for(let i=0;i<data.products.length;i++){
		sumT+=data.products[i].price;
	}
	avg=sumT/data.size;
	return avg;
} 

console.log( 
 avg({ 
 size:3, 
 products:[ 
 { 
 name:"Product 1", 
 price:100 
 }, 
 { 
 name:"Product 2", 
 price:700 
 }, 
 { 
 name:"Product 3", 
 price:250 
 } 
 ] 
 }) 
) // should print the average price of all products 