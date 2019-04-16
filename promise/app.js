
// const trano = function(contrano) {
//     if(contrano) resolve("trano")
//     else reject("no");
// };

// trano(true)
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(data){
//         console.log(data)
//     })

const danhrang = () => {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log("danh rang");
            resolve();
        },1000)
    })
}

const ruamat = () => {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log("ruamat");
            resolve();
        },1000)
    })
}

const dihoc = () => {
    console.log('dihoc');
}

// danhrang().then(() => {
//     return ruamat();
// }).then(() => {
//     return dihoc();
// }).catch(() => {
//     console.log('fail');
// });



//async function

const asyncFunctionDemo = async function() {
    try {
    await danhrang();
    await ruamat();
    await dihoc();
    console.log("done");
    } catch{
        console.log("fail")
    }
}
asyncFunctionDemo();