/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

const maxOfTwoNumbers = (n1, n2) => {
   if (n1 > n2)
      return n1;
   else
      return n2;

};



/*
2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
*/
const maxOfThree = (n1, n2, n3) => {
   if ((n1 > n2) && (n1 > n3))
      return n1;
   else if (n2 > n3)
      return n2;
   else
      return n3;

};

/*
3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
const isCharacterAVowel = (c) => {
   if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
      return true;
   return false
};

/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/

const sumArray = (a) => {
   let sum = 0;
   for (let i = 0; i < a.length; i++)
      sum += a[i];

   return sum;
};

const multiplyArray = (a) => {
   let product = 1;;
   for (let i = 0; i < a.length; i++)
      product *= a[i];

   return product;
};


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
function argCount() {
   return arguments.length;
}

/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = (str) => {
   let revString = '';
   for (let i = str.length; i >= 0; i--)
      revString = revString + str.charAt(i);
   return revString;
};

/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/
const findLongestWord = (array) => {
   let max = 0;
   array.forEach(element => {
      if (element.length > max)
         max = element.length;
   });
   return max;

};

/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/
const filterLongWords = (array, length) => {
   let returnArray = [];
   array.forEach(element => {
      if (element.length > length)
         returnArray.push(element);
   });
   return returnArray;


}


  // Sample input to run above

/*  console.log(maxOfTwoNumbers(9,6));
console.log(maxOfThree(6,8,2));
 console.log(isCharacterAVowel('h'));
  console.log(sumArray([3,6,8]));
       console.log(multiplyArray([1,2,3,4]));
    console.log(argCount("indigo","yello","red","black"));
 console.log(  reverseString("bharati"));

     let list1=['sam','link','on'];
console.log(findLongestWord(list1));

  let list=['samsung','linkin','onsite','tree','bin','it'];

  let storeArray=filterLongWords(list,3);
  storeArray.forEach( element=> console.log(element));*/
