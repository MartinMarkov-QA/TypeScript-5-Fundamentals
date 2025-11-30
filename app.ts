let data: number[] = [];

function getData(data: number[]): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
        setTimeout(() => {
            if (data.length > 0) {
            resolve(data);
        } else {
            reject('No data at this time!');
        }
        }, 2000)
    })
}

console.log("Start One!");

getData(data)
.then((d) => {
    console.log(`Here is your data: ${data} one!`);
})
.catch((d) => {
    console.log(d);
    
})

console.log("Finish One!");

console.log("Start Two!");

async function rData(data: number[]): Promise<void> {
    try {
        let res = await getData(data);
        console.log(`Here is your data: ${res} two!`);
    } catch (err) {
        console.log(err);
    }
}

rData(data);

console.log("Finish Teo!");
    

