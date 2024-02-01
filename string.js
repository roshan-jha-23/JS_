const name="Roshan"
const repoCount=50



// console.log(name+" "+repoCount+" hey");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Nintendo-rx')
/*String {'Nintendo'}
//dont confuse here is tis not array it is  object  in js
0
: 
"N"
1
: 
"i"
2
: 
"n"
3
: 
"t"
4
: 
"e"
5
: 
"n"
6
: 
"d"
7
: 
"o"
length
: 
8
[[Prototype]]//these are the prototypes means these are some func related with String All right 
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Nintendo"*/
console.log(gameName[0]);
console.log(gameName.__proto__);




console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('p'));//if not aviable than -1

const newString=gameName.substring(0,4)//4 is excluded
console.log(newString);


const anotherString=gameName.slice(-10,4);
console.log(anotherString);



const newStringone="      roshan       "
console.log(newStringone);
console.log(newStringone.trim()) //it will remove the extra spaces from both sides


const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('handsome'))
let aString="my name is Roshan Kumar Jha";
//we will discuss every function one by one here
