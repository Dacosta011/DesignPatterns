// Step 1: Define an interface for products
interface Product {
  use(): void;
}

// Step 2: Implement concrete products
class ConcreteProductA implements Product {
  use(): void {
    console.log("Using Product A");
  }
}

class ConcreteProductB implements Product {
  use(): void {
    console.log("Using Product B");
  }
}

// Step 3: Create an abstract factory class
abstract class Creator {
  abstract factoryMethod(): Product;

  // Common logic that can use the created object
  someOperation(): void {
    const product = this.factoryMethod();
    product.use();
  }
}

// Step 4: Implement concrete creators
class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Usage
const creatorA: Creator = new ConcreteCreatorA();
creatorA.someOperation(); // Output: Using Product A

const creatorB: Creator = new ConcreteCreatorB();
creatorB.someOperation(); // Output: Using Product B
