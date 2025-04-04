//Load Elements
const input=document.getElementById("number-input");
const resulty=document.getElementById("result");

function handleClickButton(el)
{
    const exp=`${input.value}${el.innerText}`;
    input.value=exp;
    if(['+','-','*','/'].includes(el.innerText)) return;
    resulty.value=eval(exp);
    
}

function resetd()
{
    input.value="";
    resulty.value="";
}
