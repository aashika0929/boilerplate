const should = require("chai").should();

const expect = require("chai").expect;

sumEvenDigits = require("../js/addeven");

describe("A series of test to sum the even digits", function(err){
  it("should be in uppercase", function(done){
  	   var result=sumEvenDigits(9872);
       result.should.be.equal("TEN");
       done();
    });

  it("should only accept numerical value", function(done){
  	var result=sumEvenDigits();
    expect(result).to.be.NaN;
    done();
    });

  it("should only accept numbers upto 17732289", function(done){
    var result=sumEvenDigits(44444444);
    result.should.be.equal("NUMBER EXCEEDED");
    done();
    });


  it("should accept negative numbers also", function(done){
    var result=sumEvenDigits(-6546);
    result.should.be.equal("MINUS ONE ZERO");
    done();
    });

  it("should not contain trailing or leading spaces", function(done){
    var result=sumEvenDigits(123);
    result.should.be.equal("TWO");
    done();
    });

  });
