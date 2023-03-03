///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0
//Set up an accumulator variable
for (let i = 0; i < fujiAcres.length && galaAcres.length && pinkAcres.length; i++){
//The idea behind i<fuji, gala, and pink length is that if any of them change their format, I can still capture their count
totalAcres += fujiAcres[i]+galaAcres[i]+pinkAcres[i]
//+= should make sure that all the previous iterations are counted in the sum, [i] should make sure that all three acres arrays are being summed at the same point
console.log(totalAcres)
//This will help me track where I went wrong if the sum is incorrect
}



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageLength = (fujiAcres.length + galaAcres.length + pinkAcres.length )/ 3
// I averaged the length to accomodate for any change in length of arrays 
let averageDailyAcres = totalAcres / averageLength
console.log(averageDailyAcres)

// average = totalAcres / 7
// console.log(average)
// // Because my averageLength calc was a little complex, I used this as a check figure for my work (it worked in catching a mistake I almost made)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0){
    days ++
    //increment days
    acresLeft-=averageDailyAcres
    // subtract averageDailyAcres from acresLeft
}
console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()

for (let i = 0; i < fujiTons.length; i++){
// No need to do the same as before because fujiTons, galaTons, and pinkTons won't change if fujiAcres etc. are adjusted
fujiTons[i] = fujiTons[i] * 6.5
galaTons[i] = galaTons[i] * 6.5
pinkTons[i] = pinkTons[i] * 6.5
// Take each of the arrays and multiply them by 6.5 to get the tons instead of the acres
}
console.log(fujiTons,galaTons,pinkTons)





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
// Set up fujiPounds as an accumulator variable
for (let i = 0; i < fujiTons.length; i++){
    fujiPounds += fujiTons[i]
    //calculate total tons in the array
}
fujiPounds = fujiPounds * 2000
// multiply result by 2000 to convert from tons to pounds
console.log(fujiPounds)
//track ending pounds

let galaPounds = 0
for (let i = 0; i < galaTons.length; i++){
    galaPounds += galaTons[i]
}
galaPounds = galaPounds * 2000
console.log(galaPounds)
// same code as fuji


let pinkPounds = 0
for (let i = 0; i < pinkTons.length; i++){
    pinkPounds += pinkTons[i]
}
pinkPounds = pinkPounds * 2000
console.log(pinkPounds)
// same code as fuji



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
console.log(`$${fujiProfit}`)

let galaProfit = galaPounds * galaPrice
console.log(`$${galaProfit}`)

let pinkProfit = pinkPounds * pinkPrice
console.log(`$${pinkProfit}`)
//Since price is per pound, I can just multiply poundage by price (although this isn't factoring in materials or labor so it should probably be labeled as gross revenue. Looks like old habits die hard as an ex-CPA)
//console logs added to check for reasonableness and $ added to help me keep track of which parts of console log are dollar values





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`$${totalProfit}`)
//total profit should be the three added together