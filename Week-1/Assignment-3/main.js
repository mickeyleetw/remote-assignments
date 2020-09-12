function countAandB(input) { 
    var count=0;
    input.forEach(
        function (char)
        {
            if(char==='a'||char==='b'){count++;}
        }
    );
    return count;
} 

function toNumber(input) {
    var output = [];
    input.forEach(
        function (char)
        {
            output.push(char.charCodeAt()-96);
        }
    );
        return output;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter) 
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3] 

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0 
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]