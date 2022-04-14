function sayHello()
{
    let comment= document.getElementById('comment').value;
   // alert(comment);
   document.write(comment);
}

/*console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title="123 hello";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[11]);
document.all[11].value="Bharati"*/
/*console.log(document.querySelector(".image_style"));
var text= document.getElementById("text-content");
  console.log(text.textContent);
 text.innerHTML='<h3> Joke</h3>';
 function mystr()
{
    let str="hello";
   console.log( str.charAt(str.length-1));
    
}
mystr();*/



let friendsAvailable = true;

function makePlans(name) {
 return callFriend(friendsAvailable,name);
}

function callFriend(bool, name) {
  if(bool===true)
    return `Plans made with ${name} this weekend`;
  else
    return "Everyone is busy this weekend.";
  
}

// Uncomment these to check your work!
/* console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
 friendsAvailable = false;
 console.log(makePlans("James")) //should return: "Everyone is busy this weekend."*/

 function arrayBuilder(obj) {
     

    var array= []
    for( let key in obj)
    {
        
        while( obj[key]>0)
        {
       
           array.push(key);
           obj[key]--;
        }
        
       

    }
    return(array);

  }
  //arrayBuilder({'cats': 2, 'dogs': 1});
  
  // Uncomment these to check your work!
   console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
   console.log(arrayBuilder({})); // => []

  
 
