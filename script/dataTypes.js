//Boolean
//all the values that have a initial value of false
//doing type conversion with Boolean function
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
//creating Boolean object with Boolean constructor
const isHereObj = new Boolean(false);
const isHere = false;
console.log(isHere);
console.log(isHere);
const marriageStatus = 'yes';
const isMarried = marriageStatus === 'yes';
console.log(isMarried);
//using not operator !
console.log(!false);
console.log('12' < '2');
const numberStr = '\n';
console.log(numberStr.charCodeAt());
//comparison operators also return falsy or trurhy values
//empty arrays and empty objects return true
//we don't have much of methods and properties for boolean data types
console.clear();
//arrays data type
//array object allows storing multiple data under one name
//using console.table for logging arrays
const scores = [12, 14, 16, 20];
const studentNames = ['hamid', 'hooman', 'ahmad', 'soheil'];
const streetNames = new Array('sohrab', 'jamaran');
const newStudentNames = studentNames.map((student) => student);
console.log(newStudentNames);
console.log(Array.isArray(scores));
const newScores = scores.values();
newScores.next();
console.clear();

// object data types
const studenets = [
  {
    name: 'reza',
    age: 24,
  },
  {
    name: 'hamid',
    age: 24,
  },
  {
    name: 'reza',
    age: 24,
  },
  {
    name: 'reza',
    age: 24,
  },
];

console.table(studenets);
console.clear();
