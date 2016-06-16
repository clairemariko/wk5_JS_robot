var _ = require('lodash');


var robotTin = {
  bestFriend: 'jay',
  welcome: function(){
    return "hello " + _.capitalize(this.bestFriend);
  }
};

module.exports =robotTin; //this send the function to the spec file.