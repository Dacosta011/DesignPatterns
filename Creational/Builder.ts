// Step 1: Define the product class
class Product {
  private partA?: string;
  private partB?: string;

  setPartA(partA: string): void {
    this.partA = partA;
  }

  setPartB(partB: string): void {
    this.partB = partB;
  }

  show(): void {
    console.log(
      `Product created with: PartA = ${this.partA}, PartB = ${this.partB}`,
    );
  }
}

// Step 2: Create a Builder interface
interface Builder {
  setPartA(partA: string): Builder;
  setPartB(partB: string): Builder;
  build(): Product;
}

// Step 3: Implement a concrete builder
class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  setPartA(partA: string): Builder {
    this.product.setPartA(partA);
    return this;
  }

  setPartB(partB: string): Builder {
    this.product.setPartB(partB);
    return this;
  }

  build(): Product {
    return this.product;
  }
}

// Step 4: Usage of Builder Pattern
const builder = new ConcreteBuilder();
const product = builder.setPartA("Component A").setPartB("Component B").build();
product.show(); // Output: Product created with: PartA = Component A, PartB = Component B
