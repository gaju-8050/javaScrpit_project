// Primitive

// 7types : String , Number, Boolean, undefined, Symbol

//Reference (Non primitive)


const players = ["virat","Rohit","Pandya"]
const plays = {
    name: "Cricket",
    ground: "Dharmashala"
}

const Function = function () {
    console.log("Ky bola re tu!!!!");
    
}

// https://262.ecma-internation.org/5.1/#sec-11.4.3





// Memory Allocation

// Stack(Primitive)  Heap(Non-Primitive  )

const grounds={
    name: "MCG",
    Sport: "Cricket"
}


const AnotherGrounds = {
    name: "LORDS",
    Sport: "Cricket"
}

const both = AnotherGrounds

console.log(both);
console.log(AnotherGrounds);
console.log(grounds);

AnotherGrounds.name = "ChinnaSwamy"

console.log(both);
console.log(AnotherGrounds);
console.log(grounds);