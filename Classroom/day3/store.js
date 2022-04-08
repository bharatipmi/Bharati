let cart=Array.of(5);

function addToCart(item)
{
   // let item= document.getElementById("rice").getAttribute("id");
   if(cart.length<5)
   {
    cart.push(item);
    alert(item +"added to cart");
   }
   else
   alert("Cart is Full");
}

function showCart()
{
    if(cart.length===0)
    {
        alert("Cart is Empty");
    }
    else if(cart.length===5)
    {
        alert("cart is full");
    }
    else
    {
//console.log("Cart items");
//cart.forEach(e=> console.log(e));
 alert(cart);
    }
}
