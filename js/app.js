"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let data = [];
function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.length > 0) {
                resolve(data);
            }
            else {
                reject('No data at this time!');
            }
        }, 2000);
    });
}
console.log("Start One!");
getData(data)
    .then((d) => {
    console.log(`Here is your data: ${data} one!`);
})
    .catch((d) => {
    console.log(d);
});
console.log("Finish One!");
console.log("Start Two!");
function rData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield getData(data);
            console.log(`Here is your data: ${res} two!`);
        }
        catch (err) {
            console.log(err);
        }
    });
}
rData(data);
console.log("Finish Teo!");
