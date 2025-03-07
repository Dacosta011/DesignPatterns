interface Prototype {
  clone(): Prototype;
}

class ConcretePrototype implements Prototype {
  constructor(public name: string, public data: object) {}

  clone(): ConcretePrototype {
    return new ConcretePrototype(this.name, { ...this.data });
  }
}

const original = new ConcretePrototype("Original", { value: 42 });
const cloned = original.clone();

console.log(cloned.name);
console.log(cloned.data);
console.log(original !== cloned);
