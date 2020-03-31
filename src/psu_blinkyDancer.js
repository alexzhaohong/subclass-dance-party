var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var this = Object.create(makeBlinkyDancer.prototype)
  // this is instance of BlinkyDancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  // superclass step behavior from Dancer{}
  // (already falls back)

  // return this
};

// all failed lookups will go to makeDancer
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  callCount++;
};


// Invocation
// var blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);