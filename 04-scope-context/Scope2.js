/* Block scope, Function scope, Global scope */


// variable which is declared inside a function you can not access from the outside of the function


function testVariable(){

    const n = 'tirth'
    console.log(n)

}
 
//you can not access n outside the function
console.log(n)

testVariable()
