// Write a program to take an input from a user and find its Factorial. 

let factorial=(num)=>{
    
    let factorial=1;
    while(num>0){
        factorial*=num;
        num--;
    }
    console.log(factorial)
}

factorial(5);