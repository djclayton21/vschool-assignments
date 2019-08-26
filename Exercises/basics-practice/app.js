// console.log("hello")

//recursion?

//date

//convert date to day of the year
function getDays(date1, date2) {
    // console.log(date1)
    let diff = date2 -date1;
    diff = diff / (1000 * 60 * 60 * 24)
	return diff
}

let test = getDays(new Date('July 20, 2019'), new Date('July 30, 2019'));
console.log(test)


//subtract
