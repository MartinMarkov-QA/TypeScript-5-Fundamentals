"use strict";
// Promises
let apiData = ["a", "c", "b"];
function resProm(data) {
    let res = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.length > 0) {
                resolve(data);
            }
            else {
                reject("No data found");
            }
        }, 2000);
    });
    return res;
}
;
console.log('Start!');
resProm(apiData)
    .then((data) => {
    console.log(`The data is ${data} !`);
})
    .catch((data) => {
    console.log(data);
});
console.log('End!');
