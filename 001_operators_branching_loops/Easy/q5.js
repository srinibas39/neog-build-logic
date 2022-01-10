// rite a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46

let min=(num1,num2,num3)=>{
  if(num1<num2 && num1<num3){
      console.log(`${num1} is minimum`);
  }
  else if(num2<num1 && num2<num3){
      console.log(`${num2} is minimum`)
  }
  else{
      console.log(`${num3} is minimum`)
  }
}

min(35,29,46)