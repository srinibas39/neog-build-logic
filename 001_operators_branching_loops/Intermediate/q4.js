// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let fibonacci = (num) => {
    let a = 0;
    let b = 1;
    String = `0,1,`
    for (let i = 0; i < num; i++) {
        if (i == num - 1) {
            c = a + b;
            String += `${c}`;
            break;

        }
        c = a + b;
        String += `${c},`
        a = b;
        b = c;

    }
    console.log(String)
}

fibonacci(10)
