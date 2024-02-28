const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let promises = array2D.map((row, index) => new Promise((resolve, reject) => {
    for (let i = 0; i < row.length; i++) {
        if (row[i] < 0) {
            resolve(`Row ${index} has negative value ${row[i]}`);
            return;
        }
    }
    reject("Found no negative value in row");
}))

Promise.any(promises)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("No negative values in array");
    });