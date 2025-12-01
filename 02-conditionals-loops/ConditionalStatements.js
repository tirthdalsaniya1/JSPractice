/*
if else else if switch
*/

//if statement
const num = 5

if (num > 0) {
    console.log(num, ' is a positive number')
}

const num2 = -5

if (num2 > 0) {
    console.log(num2, 'is a positive number')
}

//if else
const num3 = -1

if (num3 > 0) {
    console.log(num3, ' is a positive number')
}
else {
    console.log(num3, ' is a negative number')

}

//if else if else statements
const num4 = 0

if (num4 > 0) {
    console.log(num4, ' is a positive number')
}
else if (num4 < 0) {
    console.log(num4, ' is a negative number')

} else {
    console.log(num4, ' its 0')

}


//switch statement

const color = 'blue'

switch (color) {

    case 'blue':
        console.log('color is blue')
        break
    case 'pink':
        console.log('color is pink')
        break
    case 'red':
        console.log('color is red')
        break

    default:
        console.log(color, 'not a valid color')

}

const wallcolor = 'sky blue'

switch (wallcolor) {

    case 'blue':
        console.log('color is blue')
        break
    case 'pink':
        console.log('color is pink')
        break
    case 'red':
        console.log('color is red')
        break

    default:
        console.log(wallcolor, 'not a valid color')

}