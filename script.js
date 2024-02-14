
function calculation(){
    const main1=document.getElementById("part1");
    console.log(main1.value);
    alert("I will start calculating")

    const calcu=main1.value;
    let array0=calcu.trimStart();
    let array1=array0.split(/[\s,.\n]+/)
    console.log(array1)
    if(array1[0]=="" || array1[0]=="\n"){
        var p3=document.getElementById("part3")
        div=p3.querySelector("div")
        div.innerHTML=`
        <p>plese atleast enter the para</p>
        <p>${calcu}</p>`
    }
    else
    {
        var p3=document.getElementById("part3")
        div=p3.querySelector("div")
        div.innerHTML=`
        <p>The number of words are: ${array1.length-1} </p>
        <p>${calcu}</p>
        `
    }
}
