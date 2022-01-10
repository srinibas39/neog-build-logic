// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

let month31=(month)=>{
   return new Date(2022,month,0).getDate();//by passing as 0 as day it will give you last day of the prior month.
}

console.log(month31(7))