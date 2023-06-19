export default class Player {
    constructor({ name, deck, playerId = null }) {
        this.id = playerId ?? `${Date.now()}${Math.random()}`
        this.name = name

        this.mana = 0
        this.mana_limit = 15
        this.shields = 5

        this.deck = deck
        this.hand_cards = []
        this.hand_card_limit = 7
        this.cemetery_deck = []
        this.monters_on_board = []

        this.shuffleDeck()
        this.drawCard(5)
    }

    increaseMana(quantity = 1) {
        if(this.mana < this.mana_limit) {
            if((this.mana + quantity) > this.mana_limit) {
                this.mana = parseInt(this.mana_limit)
                return this
            }

            this.mana += quantity
            return this
        }

        return this
    }

    shuffleDeck() {
        let currentIndex = this.deck.length,  randomIndex;
        
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [this.deck[currentIndex], this.deck[randomIndex]] = [
            this.deck[randomIndex], this.deck[currentIndex]];
        }
        
        return this.deck;
    }

    drawCard(quantity = 1) {
        if(this.hand_cards.length < this.hand_card_limit) {
            const cards = this.deck.slice(this.deck.length-quantity, this.deck.length)
            
            this.hand_cards = [...this.hand_cards, ...cards]
            this.deck = this.deck.slice(0, this.deck.length-quantity)
        }
        
        return this
    }
}