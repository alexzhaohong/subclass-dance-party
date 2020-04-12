describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

// describe('durdlyDancer', function() {

//   var durdlyDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     durdlyDancer = new makedurdlyDancer(10,20, timeBetweenSteps);
//   });

//   it('should have a jQuery $node object', function() {
//     expect(durdlyDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   it('should have a step function that makes its node blink', function() {
//     sinon.spy(durdlyDancer.$node, 'toggle');
//     durdlyDancer.step();
//     expect(durdlyDancer.$node.toggle.called).to.be.true;
//   });

//   describe('dance', function() {
//     it('should call step at least once per second', function() {
//       sinon.spy(durdlyDancer, 'step');
//       expect(durdlyDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(durdlyDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(durdlyDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });
