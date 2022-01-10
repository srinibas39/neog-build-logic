// Write a Program to take a number input from user and find if the number is Prime or not.

let prime=(num)=>{
    let isPrime=true;
    for(let i=2;i<num;i++){
        if(num==2){
            console.log(`${num} is prime`)
        }
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime==true){
        console.log(`${num} is prime`);
    }
    else{
        console.log(`${num} is not prime`);
    }
    
}
prime(13);