// Promises

let apiData: string[] = ["a", "c", "b"];

function resProm(data: string[]): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      if (data.length > 0) {
        resolve(data);
      } else {
        reject("No data found");
      }
    }, 2000);
  });
};


console.log('Start!');

resProm(apiData)
.then((data) => {
    console.log(`The data is ${data} !`);
})
.catch((data) => {
    console.log(data);
})

console.log('End!');


