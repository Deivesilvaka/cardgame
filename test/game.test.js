import assert from 'node:assert/strict';

import Game from '../src/classes/game.js'
import { deck } from '../src/mock/monsterMock.js'

const game = new Game()


// Tests adding players
const { room, player } = game.addPlayer({
    name: 'Colchão',
    deck
})

assert.equal(game.ROOMS_QUANTITY, 1, 'Quantity of rooms must to be 1')

const playerTwo = game.addPlayer({
    name: 'Colchão Dois',
    deck
})

const playerThree = game.addPlayer({
    name: 'Colchão Três',
    deck
})

assert.equal(game.ROOMS_QUANTITY, 2, 'Quantity of rooms must to be 2')

// Test removing a player
game.removePlayer({
    roomId: playerThree.room.id,
    playerId: playerThree.player.id
})

assert.equal(game.ROOMS_QUANTITY, 1, 'Quantity of rooms must to be 1')


// Player drawing a card
game.drawCard({
    roomId: room.id,
    playerId: player.id
})

assert.equal(player.hand_cards.length, 6, 'The quantity of cards must to be 6')


// Adding mana to player
game.addManaToPlayer({
    roomId: room.id,
    playerId: player.id
})

assert.equal(player.mana, 1, 'The quantity of mana must to be 1')

game.addManaToPlayer({
    roomId: room.id,
    playerId: player.id,
    quantity: 2
})
assert.equal(player.mana, 3, 'The quantity of mana must to be 3')


// Verifying the id of the players
const opponent = room.getOpponent(player.id)
assert.equal(player.id !== opponent.id, true, 'The opponent id is not diferent')

const me = room.getOpponent(player.id)
assert.equal(playerTwo.player.id === me.id, true, 'That is not the sema id')


console.log('All tests has passed!')