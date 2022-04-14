
// Performing a task
function greet(firstname,lastName)
{
    console.log(firstname + lastName);
}
greet('Bharati','Patil');

//calculate value

function square(num)
{
    return (num*num);
}

console.log(square(3));
// Arrray opertaion
var groceries =['milk','eggs','Cearal'];
// push adds item to end of array
groceries.push('cake');

console.log(groceries);

// unshift adda item to start of array
groceries.unshift('apple');

//Looping through arrays
let i=0;
for(i=0;i<groceries.length;i++)
{
    console.log(groceries[i]);
}

console.log("-------------------------");
// pop removes last element from array
groceries.pop();
groceries.forEach(element => {console.log(element)});
  console.log(  groceries.shift());
  console.log("-------------------------");
    groceries.forEach(e=> console.log(e));

    groceries.unshift("mangoes");
    groceries.push("papaya");
    groceries.forEach(e=>console.log(e));
