//your JS code here. If required.
let student = {
	name : 'Md Shahzadah'
};
Object.prototype.getKeys = function(){
	return Object.keys(this); 
}
let keys = student.getKeys();
console.log(keys);

// let student = {
//   name: "John"
// };

// Object.prototype.getKeys = function() {
//   return Object.keys(this);
// };

// console.log(student.getKeys()); // Output: ["name"]