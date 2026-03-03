class MyClass {
    constructor(arg1) {
      this.property1 = arg1;
      console.log("First constructor", arg1);
    }
  
    constructor(arg1, arg2) {
      this.property1 = arg1;
      this.property2 = arg2;
      console.log("First constructor:", arg1, arg2);
    }
  }
  
  const instance1 = new MyClass(10);
  const instance2 = new MyClass(20, "hello");
  