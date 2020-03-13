console.log("Hello Node World");
const person = {Name : 'Varun', Age : 22, University : 'Shiv Nadar University'};
console.log(person.Name);

const Multiply = (a,b) => {
    return a*b;
}

console.log(Multiply(10,11));

const sports = ['Cricket', 'Badminton', 'Swimming'];
console.log(sports.map(sports=>"Mapped:"+sports));

const parameterFunction = (...args) => {
    let sum=0;
    console.log(args);
    for(let i=0; i<args.length; i++)
    {
        sum=sum+args[i];
    }
    return sum;
}
console.log(parameterFunction(1,2,3,5));

const copy = [...sports]
console.log(copy);
