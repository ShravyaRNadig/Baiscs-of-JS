/* 
 3 types
 for
 while
 for each
*/
// for
for (let i = 0; i <= 10; i++) {
    console.log("for loop of i:", +i, "i+1:", +(i + 1))
}
// while
let i = 0;
while (i <= 10) {
    console.log("while loop of i:", +i, "i+1:", +(i + 1))
    i++
}
// for each 1st method
let a = ["rety", "ghj"];
for (let b of a) {
    console.log("for each loop of a that is b :",b)
}
// for each 2nd method
a.forEach(data =>{
    console.log("for each loop of a that is data :",data)
})