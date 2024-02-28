const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let promises = array2D.map((row) => new Promise((resolve, reject) => {
    let sum = row.reduce((total, val) => total + val, 0);
    resolve(sum);
}))

Promise.all(promises)
    .then((responses) => {
        let sum = responses.reduce((total, val) => total + val, 0);
        console.log(`Sum of 2D array is ${sum}`);
    })
    .catch((err) => {
        console.log(`Failed to calculate sum due to ${error}`);
    });