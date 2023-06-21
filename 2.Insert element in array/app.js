
//----------------insert element by logic ----------------------//


// let arr = [60,30,50,70,40]

// let newArr = 10;
// let position = 2
// for(let i = arr.length-1; i>=0; i--){

//     if(i>=position){

//         arr[i+1] = arr[i]
         
//        if(i==position){
//         arr[i] = newArr
//        }

//     }

// }

// console.log(arr)



// ---------------------insert element by in built function-------------------------//
// ----------by splice method-----------------//




let arr = [10,36,23,85,45,20,665,21];
 
arr.splice(3,0,233); // (position, delete, whatyou want to add)

console.log(arr);