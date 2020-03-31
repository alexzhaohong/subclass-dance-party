
// class oldStep

// Creates and returns a new dancer object that can step


class makeDancer {

  //properties
  constructor(top, left, timeBetweenSteps, oldStep){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.oldStep();
  this.setPosition(top, left);
  }

  // methods
  oldStep() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    // Set at timeout for certain times per second for the new step function
    // How do I call oldStep below
    setTimeout(this.oldStep.bind(this), this.timeBetweenSteps);
  }

  // step.bind(this)
  // makeBlinkyDancer.oldStep
  // makeBlinkyDancer.step

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

}

// Invocation
// var test = new makeDancer();


/* OLD VERSION

// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};
*/
