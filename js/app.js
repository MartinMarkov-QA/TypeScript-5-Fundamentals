"use strict";
// Promises
let apiData = ["a", "c", "b"];
function resProm(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.length > 0) {
                resolve(data);
            }
            else {
                reject("No data found");
            }
        }, 2000);
    });
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
