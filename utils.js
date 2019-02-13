const sayHello = () => {
  return "Hello";
};

const area = (w, h) => {
  return w * h;
};

const perimeter = (w, h) => {
  return w + w + h + h;
};

const circleArea = r => {
  return Math.PI * r * r;
};

const createObj = (name, price) => {
  let item = new Object()
  item.name = name
  item.price = price
  return item
}

const cart = {
  "items": [

  ]
}

const cartArray = () => {
  return cart
}

const addToCart = (obj) => {
  cart.items.push(obj)
}

const cartSize = () => {
  let items = cart.items
  return items.length
}

module.exports = { sayHello, area, perimeter, circleArea, createObj, cartArray, addToCart, cartSize };
