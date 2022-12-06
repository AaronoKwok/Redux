/* function Parent() {
  this.name = "Parent"; 
}

Parent.prototype.greet = function() {
  console.log("Hello from " + this.name)
}

const child = Object.create(Parent.prototype); 

child.cry = function() {
  console.log('waah')
}

console.log(child.constructor.name) */

/* function Parent() {
  this.name = 'Parent'; 
  this.test = "test"
}

Parent.prototype.greet = function() {
  console.log('Hello from ' + this.name);
}

function Child() {
  Parent.call(this); 
  this.name = 'Child'
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child

const child = new Child() 

child.greet()
console.log(child.constructor.name)
console.log(child.test) */

const wrapp = (type) => (string) => `<${type}>${string}</${type}`
    console.log(wrapp("div")("curry"))