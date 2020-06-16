class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        return `Images/${this.point}${this.suit}.png` ; 
    }
}

// create card

var myCard = new Card ("5", "Diamond");

// see properties

/*
console.log(myCard.point); 
console.log(myCard.suit);
console.log(myCard); 
myCard.getImageUrl(); 
*/

// hand constructor 

class Hand {
    constructor() {
        this.cards = []
    }
    addCard(Card) {
        this.cards.push(Card);
    }
    getPoints = () => {
        var points = 0;
        this.cards.forEach((Card) => {
            return points + Card.point;
        })
        return points;
    }
}

var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()
console.log(myHand);

// deck constructor 

