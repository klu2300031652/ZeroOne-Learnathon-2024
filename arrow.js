const add=(a,b)=>
{
    return a+b;
}
const sub=(a,b)=>
{
    let c=a-b;
    return c;
}
let mul=(a=10,b=100)=>
{
      return a*b;
}

console.log("the multi value : "+mul(10,100));
console.log("the sub value : "+sub(50,90));

console.log("the add value : "+add(4,7));