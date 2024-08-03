let fruits = ["apple", "banana", "orange"];
const getFruits = () => {
    // setTimeout
    setTimeout(() => {
        fruits.forEach(data => {
            console.log("Promise data:", data);
        });
    }, 1000); //this will run after 1000ms (1s)
};

const postFruits = (fruit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fruits.push(fruit);
            let err = false;
            // let err = true;
            if (!err) {
                resolve();
            }
            else {
                reject("Something went wrong");
            }
        }, 2000);
    });
};

postFruits("Kiwi").then(getFruits).catch(err => { console.log(err) });