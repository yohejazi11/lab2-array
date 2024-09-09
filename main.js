let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10,30];


for (let i = 0; i <= numbers.length; i++) {
    for (let j = numbers.length; j > i - 1; j--)
        if (numbers[j] > numbers[j + 1]) {
            let temp = 0;
            temp = numbers[j + 1];
            numbers[j + 1] = numbers[j];
            numbers[j] = temp;
        }
}
console.log(numbers);


let squuareArray = [];
for (let i = 0; i <= numbers.length - 1; i++) {
    squuareArray[i] = numbers[i] * numbers[i];
}

console.log(squuareArray);

for (let i = 0; i <= numbers.length; i++) {

}

let firstBig= numbers.find( big => {
    if(big>25) {
        return big;
    }
});

console.log(firstBig);




const bigthenFive = numbers.map(function(currentValue) {  
    if(currentValue>5)
    {
        currentValue=true;

    }
    else{
        currentValue=false;

    }
    return currentValue;
})
console.log(bigthenFive)


console.log(numbers.includes(3));

let Evennumbers=[];

for(let i=0;i<=numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        Evennumbers[i]=numbers[i];
    }
}

console.log(Evennumbers);

console.log(numbers.splice((numbers.length/2),2,));
console.log(numbers);

let totalM=0;
for(let i=0;i<=numbers.length;i++)
{
    totalM+=numbers[i] * numbers[i+1];
}
console.log(totalM);


console.log(numbers.pop());

numbers.push(100);
console.log(numbers)

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

let startWithA=[];
names.forEach( startA =>{
    if(startA.includes("a"))
    {
        startWithA.push(startA)

    }
})
console.log(startWithA);
console.log(startWithA.join("-"))

let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];
let arrayStartWIthB=[];
fruits.forEach(startB =>{
    if(startB.charAt(0)=="b")
    {
        arrayStartWIthB.push(startB);
    }
})

console.log(arrayStartWIthB);

arrayStartWIthB.unshift("yello")
console.log(arrayStartWIthB)