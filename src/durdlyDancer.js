class makeDurdlyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps, step) {
    super(top, left, timeBetweenSteps);
    this.timeBetweenSteps = 1000;
  }
  step() {
    super.step();
    this.$node.toggle(); //Change TOGGLE
  }
}