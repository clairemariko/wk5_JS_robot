//describe what a robot should and what it functionality should be

var assert = require('assert'); //this is require the assert from the a file in your nodemodules
var Robot = require('./robot'); //requiring the robot.js file


describe('Robot', function(){
it('should welcome me', function(){
  //write test here
    assert.equal(1,1);
  })
});

//two keywords DESCRIBE and IT
describe('Robot', function(){
it('should welcome me', function(){
  //write test here
    assert.equal("hello Jay", Robot.welcome());
  })
});