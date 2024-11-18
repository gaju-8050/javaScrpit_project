let myDate = new Date();

console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())



let myCreatedDate = new Date(2024,0,18,5,45)
console.log(myCreatedDate);

console.log('--------------------------------------------TimeStamp Shuru Hoga--------------------------------------------')

let TimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000))


console.log('--------------------------------------------Date Phir se Shuru Hoga--------------------------------------------')

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth().toLocaleString());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
