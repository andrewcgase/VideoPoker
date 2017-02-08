var fs = require('fs');
var vm = require('vm');
var Chai = require('chai');
var expect = Chai.expect;

var code = fs.readFileSync('./pokerHand.js');

vm.runInThisContext(code);

describe('PokerHand Object', function () {
	
	it('Can be created without a hand.', function () {

		var hand = new PokerHand();

		expect(hand).to.exist;
		expect(hand.cards).to.be.empty;
	});

	it('Can be created with a full hand.', function () {
		
		var hand = new PokerHand(['2H', '3H', '4H', '5H', '6H']);

		expect(hand).to.exist;
		expect(hand.cards).to.not.be.empty;
		expect(hand.cards.length).to.equal(5);
	});

	it('Can be created with a partial hand.', function () {
		
		var hand = new PokerHand(['2H', '3H', '4H']);

		expect(hand).to.exist;
		expect(hand.cards).to.not.be.empty;
		expect(hand.cards.length).to.equal(3);
	});

	it('Can detect a pair of Jacks', function (){

		var hand = new PokerHand(['2H', '3H', '4H', 'JH', 'JD'])

		expect(hand.evaluate()).to.equal(0)
	})

	it('Can detect two pairs', function (){

		var hand = new PokerHand(['2H', '4H', '4D', 'JH', 'JD'])

		expect(hand.evaluate()).to.equal(1)
	})

	it('Can detect three of a kind', function (){

		var hand = new PokerHand(['JS', 'JH', '3C', 'JD', '2D'])

		expect(hand.evaluate()).to.equal(2)
	})

	it('Can detect straight', function (){

		var hand = new PokerHand(['2H', '3H', '4H', '5H', '6D'])

		expect(hand.evaluate()).to.equal(3)
	})

	it('Can detect flush', function (){

		var hand = new PokerHand(['2H', '3H', '4H', '5H', '10H'])

		expect(hand.evaluate()).to.equal(4)
	})

	it('Can detect full house', function (){

		var hand = new PokerHand(['2H', '2D', '4D', '4S', '4C'])

		expect(hand.evaluate()).to.equal(5)
	})

	it('Can detect four of a kind', function (){

		var hand = new PokerHand(['2H', '2D', '2C', '2S', 'JD'])

		expect(hand.evaluate()).to.equal(6)
	})

	it('Can detect straight flush', function (){

		var hand = new PokerHand(['2H', '3H', '4H', '5H', '6H'])

		expect(hand.evaluate()).to.equal(7)
	})

	it('Can detect royal flush', function (){

		var hand = new PokerHand(['10H', 'JH', 'QH', 'KH', 'AH'])

		expect(hand.evaluate()).to.equal(8)
	})
	
});