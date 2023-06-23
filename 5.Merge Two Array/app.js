// ---------- merge of two array without in built function----------------//


let arr1 = [20,3,5,69,4,3]

let arr2 = [1,52,86,93]

let arr3 = [];


for(let i = 0; i<arr1.length; i++){
    arr3[i] = arr1[i]
}

for(i=0; i<arr2.length; i++){
    arr3[arr1.length+i] = arr2[i]
}
console.log(arr3)


//-----------------in built function ----------//

// let arr1 = [20,3,5,69,4,3]

// let arr2 = [1,52,86,93]

// let arr3 = [...arr1, ...arr2];

// console.log(arr3)