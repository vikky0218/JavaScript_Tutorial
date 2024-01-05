var a = 10
var a = 20 // Dont Use var it does't throw any error on re-declaring the variable
let b = 30 
//let b = 40   let will throw error in re-declaration
console.log("Variable", a)
console.log("let before any scope",b)
{
    console.log("let in Scope without other let",b)
    b = 40 //overwriting  b 
    console.log("let has been overwrited in scope", b)
}
console.log("checking let overwrited value outside scope", b)
let c = 50 // declaring c
{
    console.log("checking b in other scope", b)
    let c = 60 // re-declaring in other scope
    console.log("let c in Scope with other let c",c)
}
console.log("let c value outside the scope", c)