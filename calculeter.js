
let display =(num1)=>
{
    document.querySelector("#solve").value+=num1;
}
let cler=()=>
{
    document.querySelector("#solve").value=""
}
let calculetor=()=>
{
    const p=  document.querySelector("#solve").value;
    const v=eval(p)
    document.querySelector("#solve").value=v;
}
let del=()=>
{
    const p= document.querySelector("#solve").value;
    const s=p.slice(0,-1);
    document.querySelector("#solve").value=s;
}
let parsentage=()=>
{
    const p=document.querySelector("#solve").value;
    const g=eval(p/100)
    document.querySelector("#solve").value=g;
}

