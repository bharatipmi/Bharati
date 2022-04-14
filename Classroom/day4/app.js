
const btn= document.getElementsByClassName("change_text");
console.log(btn);

const  changeText=()=>
{
    const text=document.querySelector("h1");
    text.textContent="Changed Text here";
    console.log(text.textContent);
}

