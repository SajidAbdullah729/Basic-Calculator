function add()
{
    let ans=0;
    for(let i=0;i<arguments.length;i++)
    {
         ans+=arguments[i];
    }
    return ans;
}
const add2=(a,b)=>(a+b);
let res=add(10,20,30);
console.log(res);
console.log(add2(30,40));
students=[
    1,2,3,4

];
students.forEach((val) => console.log(val*2));

