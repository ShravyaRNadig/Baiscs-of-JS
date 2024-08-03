let a = 1;
if (a == 1) { // checks value & doesnt care abt data type
    console.log("Hi without data type check")
}
else {
    console.log("hlo")
}

if (a === "1") { // cares about vale & data type
    console.log("Hi with data type check")
}
else {
    console.log("hlo with data type check")
}