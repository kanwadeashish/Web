console.log("JS start");

setTimeout (()=>{
    console.log("First timeout function with 5000 ms");
},5000);

setTimeout (()=>{
    console.log("Second timeout function with 4000 ms");
},4000);

setTimeout (()=>{
    console.log("Third timeout functio with 3000 ms");
},3000);

setTimeout (()=>{
    console.log("Fourth timeout function with 2000 ms");
},2000);

setTimeout (()=>{
    console.log("Fifth timeout function with 1000 ms");
},1000);

console.log("JS End");