var chai = require('chai')
var mocha = require('mocha')

chai.should()

describe('Array', function () {

  describe('#push', function () {

    it('should add given element to the end of an array', function () {
        let arr = []
        arr.push('x')
        arr.should.have.lengthOf(1)
        arr[0].should.equal('x')
    })
    
    it('should add more elements in the same order when several elements are passed as param', function () {
        let arr = []
        arr.push('x', 'y', 'z')
        arr.should.have.lengthOf(3)
        arr[0].should.equal('x')
        arr[1].should.equal('y')
        arr[2].should.equal('z')
    })

    it('should return the new length of the array', function () {
        let arr = []
        arr.push('3').should.equal(1)
    })
  })
})

mocha.run();

