// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

let max=(num1,num2,num3)=>{
    if(num1>num2 && num1>num3){
        console.log(`${num1} is maximum`);
    }
    else if(num2>num1 && num2>num3){
        console.log(`${num2} is maximum`);
    }
    else{
        console.log(`${num3} is maximum `)
    }
}

max(8,23,17)