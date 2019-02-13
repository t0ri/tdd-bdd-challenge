const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
//  * Area should return the area of a rectangle.
//  * Perimeter should return the perimeter of a rectangle.
//  * Should return the area of a circle with radius.
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5, 6)

  expect(area).to.be.a('number')
  expect(area).to.equal(30)
});

it("should return the area of a circle of radius 5", function() {
  const circleArea = utils.circleArea(5)

  expect(circleArea).to.be.a('Number')
  expect(circleArea).to.equal(78.53981633974483)
});

it("should return the perimeter of a 5 by 6 rectangle", function() {
  const perimeter = utils.perimeter(5, 6)

  expect(perimeter).to.be.a('Number')
  expect(perimeter).to.equal(22)
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.

// The product is a shopping cart. The cart will track products
// added to a cart. The cart needs to add new products, remove
// products, and provide the total count, and price of all 
// products in the cart.

// { items: [ { name: 'obj', price: 10 } ] }
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const newItem = utils.createObj('obj', 10)

  expect(newItem).to.be.an('Object')
  expect(newItem).to.have.all.keys('name', 'price')
  expect(newItem).to.have.deep.property('name', 'obj')
  expect(newItem).to.have.deep.property('price', 10)
});

it("Should return an array containing all items in cart", function() {
  const cartArray = utils.cartArray()

  expect(cartArray).to.be.an('object')
  expect(cartArray).to.have.key('items')
});

it("Should add a new item to the shopping cart", function() {
  const newItem = utils.createObj('obj', 10)
  utils.addToCart(newItem)
  const cartArray = utils.cartArray()

  expect(cartArray.items).to.be.an('array')
  expect(cartArray.items).to.have.lengthOf(1)
  expect(cartArray.items[0]).to.be.an('object')
  expect(cartArray.items[0]).to.have.deep.property('name', 'obj', 'price', 10)
});

it("Should return the number of items in the cart", function() {
  // No .after hook to clear cart, 
  // utils.cart already holds 1 item from prev test
  const newItem = utils.createObj('obj', 10)
  utils.addToCart(newItem)
  const cartSize = utils.cartSize() 
  
  expect(cartSize).to.be.a('number')
  expect(cartSize).to.equal(2)
});

it("Should remove items from cart", function() {

});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
