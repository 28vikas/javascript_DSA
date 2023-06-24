


let arr1 = [5,8,6,3,20,74];
let arr2 = [1,58,2,36];

let arr3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;

while(a1<arr1.length && a2<arr2.length){
    if(arr1[a1]<arr2[a2]){
        arr3[a3]=arr1[a1];
        a1++;
    }else{
        arr3[a3] = arr2[a2];
        a2++;
    }
    a3++;

}

while(a1<arr1.length){
    arr3[a3]=arr1[a1];
    a1++;
    a3++
}


console.log(arr3)