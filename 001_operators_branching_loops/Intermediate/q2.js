// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = () => {
    let p = ""
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i + 1; j++) {
            p += "* "
        }
        p += "\n"
    }
    console.log(p)
}

pattern();
