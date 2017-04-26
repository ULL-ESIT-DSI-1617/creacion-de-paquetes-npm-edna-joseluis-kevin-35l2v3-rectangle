'use strict'

var Rectangle = require('../lib/rectangle');
var Shape = require('@ull-edna-joseluis-kevin-35l2/ull-shape');

describe("getArea Shape", function(){
	it("must compute the rectangle shape area correctly", function(){
		let sh = new Shape ({ width: 100, height: 100 }, 'Rectangle');
		let result = sh.getArea();
		result.should.equal(10000);
	})
});

describe ("getArea Rectangle", function() {
	it ("must compute the rectangle area correctly", function() {
		let s = new Rectangle({ width: 100, height: 100 });
		let result = s.getArea();
		result.should.equal(10000);
	})
});