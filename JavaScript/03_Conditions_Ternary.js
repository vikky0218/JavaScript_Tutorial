let a = 13
if (a < 0) //if Condition
{
    console.log("Entered Age is Invalid")
} 
else if (a < 10) //else if condition
{
    console.log("Too Small For Driving")
}
else if(a < 18 && a > 10)
{
    console.log("You Can Drive when you are above 18")
}
else  //else condition
{
    console.log("you Can Drive Now")
}

console.log("You Can", (a < 18 ? "Not Drive" : "Drive")) //Ternary Operator SYNTAX: condition ? [if True] : [if False]