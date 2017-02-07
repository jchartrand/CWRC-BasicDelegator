var BasicDelegator = require("../src/index.js");
var expect = require('chai').expect;

describe("CWRC-BasicDelegator", function() {

  describe("new", function() {

    it("returns help text for tag", function () {
      
      let writerMock = 
      { event: function(theEvent) {
          return {
            subscribe: function(someCallback) {}// would eventually call the callback
          }
        },
        utilities:{
          getDocumentationForTag: function(tagName){return 'something'}
        }
      };
      let delegatorInstance = new BasicDelegator(writerMock);

      console.log("made it out of here?");

      let helpText = delegatorInstance.getHelp('body');
      
      expect(helpText).to.be.a('string');
      expect(helpText).to.equal('something');
            
    });
  });
});
