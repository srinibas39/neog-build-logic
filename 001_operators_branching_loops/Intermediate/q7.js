// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const daysInWeek={
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
}
let weekdayOrEnd = (day) => {
    let idx;
    for(let i in daysInWeek){
        if(daysInWeek[i].toLowerCase()==day.toLowerCase()){
                idx=i;
                break;
        }
    }
    if(idx==6 || idx==1){
        console.log(`${day} is considered as weekend`)
    }
    else{
        console.log(idx)
        console.log(`${day} is considered as weekday`)
    }
}

weekdayOrEnd("Tuesday");
weekdayOrEnd("Saturday");
