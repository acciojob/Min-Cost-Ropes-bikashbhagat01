function mincost(arr)
{ 
//write your code here


	/**
	Iterate over the current array DONE
	find the 2 smallest items - use sort() DONE
	Add both of them to find the cost to be paid
	Add this cost to the totalCost
	Remove the first 2 items, and insert the latest cost/sum we found by connecting the ropes
	**/
	let totalCost = 0; 
	while(arr.length > 1) {
	arr.sort((a,b) => a-b);
	let firstSmallest = arr.shift();
	let secondSmallest = arr.shift();

	let smallestCost =  firstSmallest + secondSmallest;
	arr.push(smallestCost);
	totalCost += smallestCost
	}

	return totalCost;
}

module.exports=mincost;
