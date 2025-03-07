// Step 1: Define Abstract Products
interface Button {
  render(): void;
}

interface Checkbox {
  toggle(): void;
}

// Step 2: Implement Concrete Products
class MacButton implements Button {
  render(): void {
    console.log("Rendering Mac Button");
  }
}

class MacCheckbox implements Checkbox {
  toggle(): void {
    console.log("Toggling Mac Checkbox");
  }
}

class WindowsButton implements Button {
  render(): void {
    console.log("Rendering Windows Button");
  }
}

class WindowsCheckbox implements Checkbox {
  toggle(): void {
    console.log("Toggling Windows Checkbox");
  }
}

// Step 3: Create the Abstract Factory Interface
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Step 4: Implement Concrete Factories
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// Step 5: Client Code
function clientCode(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.toggle();
}

const macFactory = new MacFactory();
clientCode(macFactory);

const windowsFactory = new WindowsFactory();
clientCode(windowsFactory);
