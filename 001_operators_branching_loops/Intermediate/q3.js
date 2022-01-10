// Write a program to take a number input from user and print multiplication table 12 times for that number.

let multiplicationTable=(num)=>{
     let product=0;
    for(let i=1;i<=12;i++){
      product=num*i;
      console.log(`${num} * ${i} = ${product}`)
    }
}

multiplicationTable(4);