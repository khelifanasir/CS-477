
Array.prototype.even = function (){
    return this.filter(user => user % 2 ==0)
 }
 
 console.log([1,2,3,4,5,6,7,8].even()); 

Array.prototype.odd = function (){
   return this.filter(user => user % 2 !==0)
}

console.log([1,2,3,4,5,6,7,8].odd())



// Array.prototype.even = async function (){
//     try {
//         let arr= this;
//         let result = await new Promise ((resolve) => {
//               let final = []
//             for ( let each of arr) {
                
//                 if (each % 2 == 0){
//                     final.push(each)
//                 }
//             }
//             resolve(final)
//         }) 
//         console.log(result)
//     } catch (err){
//         console.log(err)
//     }
    
// }
// console.log([1,2,3,4,5,6,7,8].even()) 


// Array.prototype.odd = async function (){
//     try {
//         let arr= this;
//         let result = await new Promise ((resolve) => {
//               let final = []
//             for ( let each of arr) {
                
//                 if (each % 2 !== 0){
//                     final.push(each)
//                 }
//             }
//             resolve(final)
//         }) 
//         console.log(result)
//     } catch (err){
//         console.log(err)
//     }
  
    
//  }
//  console.log([1,2,3,4,5,6,7,8].odd())

