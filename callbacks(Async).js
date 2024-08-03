let fruits = ["apple", "banana", "orange"];
const getFruits = () => {
    fruits.forEach(data => {
        console.log("Without set time out:", data);
    });
    // setTimeout
    setTimeout(() => {
        fruits.forEach(data => {
            console.log("Set time out data:", data);
        });
    }, 1000); //this will run after 1000ms (1s)
};

const postFruits = (fruit) => {
    setTimeout(() => {
        fruits.push("postFruits:", fruit);
    }, 2000); // this will run after 2000ms (2s)
};

postFruits("kiwi");


const postFruit = (fruit, callback) => {
    setTimeout(() => {
        fruits.push("postFruit:", fruit);
        callback();
    }, 2000); // this will run after 2000ms (2s)
};

// Corrected function call
postFruit("kiwi", getFruits);
getFruits();